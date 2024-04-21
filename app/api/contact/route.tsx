import { WelcomeEmail } from "@/components/email-tempates/WelcomeEmail";
import { Resend } from "resend";
import { NextRequest } from "next/server";
import { ContactEmailTemplate } from "@/components/email-tempates/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const verifiedDomain = process.env.RESEND_VERIFIED_DOMAIN;
const adminDomain = process.env.ADMIN_DOMAIN;

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const isSentTOUser = await resend.emails.send({
      from: `${verifiedDomain}`, // your verified domain
      to: `${email}`, // the email address you want to send a message
      subject: `From Shadient.co`,
      react: <WelcomeEmail email={email} name={name} />,
    });
    const isSentTOAdmin = await resend.emails.send({
      from: `${verifiedDomain}`, // your verified domain
      to: `${adminDomain}`, // the email address you want to send a message
      subject: `New Contact from Agency Landing Page`,
      react: (
        <ContactEmailTemplate email={email} name={name} message={message} />
      ),
    });

    console.log("isSentTOAdmin: ", isSentTOAdmin);
    console.log("isSentTOCustomer: ", isSentTOUser);
    return Response.json({ isSentTOAdmin, isSentTOUser, msg: "Email Sent" });
  } catch (error) {
    console.log(error);

    return Response.json({ error });
  }
}

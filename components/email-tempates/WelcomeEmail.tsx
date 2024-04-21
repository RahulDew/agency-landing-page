import * as React from "react";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
}
const logoURL = process.env.COMPANY_LOGO_URL;

export const WelcomeEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
}) => (
  <Html>
    <Head />
    <Preview>From Shadient.co</Preview>

    <Body
      style={{
        backgroundColor: "black",
        color: "white",
        margin: "auto",
        padding: "30px 20px",
      }}
    >
      <Container
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          gap: "5px",
        }}
      >
        <Img src={logoURL} style={{ height: "35px", width: "180px" }} />
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          width: "80%",
          gap: "10px",
        }}
      >
        <Heading
          style={{
            fontWeight: "bold",
            paddingTop: "25px",
            color: "#e39b14",
            textAlign: "center",
          }}
        >
          Welcome to Shadient
        </Heading>
        <Text>{email === name ? "" : email}</Text>
        <strong>Dear {name},</strong>
        <Text>
          Thank you!!! for reaching out to us! Your message has been
          successfully received, and we're thrilled to have the opportunity to
          assist you. Our team is dedicated to providing excellent service and
          addressing your needs promptly.
        </Text>
        <br />
        <Link
          href="https://www.google.co.in/"
          style={{
            border: "1px solid #e39b14",
            backgroundColor: "transparent",
            padding: "0.6rem 1rem",
            borderRadius: "20px",
            color: "#e39b14",
            fontSize: "1rem",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Explore Shadient
        </Link>
        <br />
        <br />
        <Text>
          Once again, thank you for choosing Shadient. We look forward to
          serving you and ensuring your experience with us is nothing short of
          exceptional.
        </Text>
      </Container>
    </Body>
  </Html>
);

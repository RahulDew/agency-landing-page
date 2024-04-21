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

const logoURL = process.env.COMPANY_LOGO_URL;

interface ContactEmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ email, name, message }) => (
  <Html>
    <Head />
    <Preview>Contact from Agency Landing Page</Preview>

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
        <Img
          src={logoURL}
          style={{ height: "35px", width: "180px", textAlign: "center" }}
        />
      </Container>

      <Container
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          width: "80%",
          gap: "5px",
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
          New Contact
        </Heading>
        <Container>
          <Text>
            <strong>Name: </strong> {name}
          </Text>
          <Text>
            <strong>Email Id: </strong>{" "}
            <span style={{ color: "#e39b14" }}> {email}</span>
          </Text>
          <Text>
            <strong>Message: </strong>
          </Text>
          <Text>{message}</Text>
        </Container>
      </Container>
    </Body>
  </Html>
);

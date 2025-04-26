import { Html, Head, Preview, Body, Container, Text } from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem de contacto</Preview>
      <Body style={{ backgroundColor: "#f6f9fc", padding: "20px" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}>
          <Text style={{ fontSize: "18px", fontWeight: "bold" }}>Mensagem de: {name}</Text>
          <Text style={{ fontSize: "16px" }}>Email: {email}</Text>
          <Text style={{ fontSize: "16px", marginTop: "10px" }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

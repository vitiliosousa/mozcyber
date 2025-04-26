import { Html, Head, Preview, Body, Container, Heading, Text, Section } from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem de contato - {subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Nova mensagem de contato</Heading>
          <Section style={section}>
            <Text style={label}>Nome:</Text>
            <Text style={content}>{name}</Text>
            <Text style={label}>Email:</Text>
            <Text style={content}>{email}</Text>
            <Text style={label}>Assunto:</Text>
            <Text style={content}>{subject}</Text>
            <Text style={label}>Mensagem:</Text>
            <Text style={content}>{message}</Text>
          </Section>
          <Text style={footer}>Você está recebendo esta mensagem através do site da mozcyber.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  padding: '20px 0',
  fontFamily: 'Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: '#000000',
  borderRadius: '8px',
  padding: '30px',
  margin: '0 auto',
  maxWidth: '600px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  marginBottom: '20px',
  color: '#FB2C36',
  textAlign: 'center' as const,
};

const section = {
  marginBottom: '30px',
};

const label = {
  fontSize: '14px',
  fontWeight: 'bold' as const,
  color: '#ffffff',
};

const content = {
  fontSize: '16px',
  color: '#f3f3f3',
};

const footer = {
  fontSize: '12px',
  color: '#FB2C36',
  textAlign: 'center' as const,
  marginTop: '40px',
};

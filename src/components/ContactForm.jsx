import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import FormInput from "./FormInput";

// TODO Implement form validation
// TODO Create function for data transmission
const ContactForm = () => {
  return (
    <Container
      as="section"
      className="d-flex flex-column align-items-center py-5"
    >
      <Form>
        <Row>
          <Col>
            <FormInput label="First name" name="firstName" />
          </Col>
          <Col>
            <FormInput label="Last name" name="lastName" />
          </Col>
        </Row>
        <FormInput label="Email" name="email" type="email" />
        <FormInput
          label="Message"
          name="message"
          as="textarea"
          rows="10"
          height="200px"
        />
      </Form>
    </Container>
  );
};

export default ContactForm;

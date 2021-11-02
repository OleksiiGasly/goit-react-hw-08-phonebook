import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import * as phonebookOperation from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import css from './Form.module.css';

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = (name, number) =>
    dispatch(phonebookOperation.addContactsAction({ name, number }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkName(name)) {
      alert(`${name} уже есть в контактах!`);
    } else {
      onSubmit(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <Container className={css.form_container}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h2>Add new contact</h2>
          <Form.Label>Name</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may include letters, apostrophes, dashes, and spaces. E.g. Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
                required
                value={name}
                onChange={handleChange}
                placeholder="Type name"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be composed of digits and may include spaces, dashes, round brackets, and may commence with a +"
                required
                value={number}
                onChange={handleChange}
                placeholder="Type phone number"
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit">Add to contacts list</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ContactsForm;

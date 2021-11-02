import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, ListGroupItem } from 'react-bootstrap';
import * as phonebookOperation from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperation.fetchContactsAction());
  }, [dispatch]);

  const onDeleteContacts = id =>
    dispatch(phonebookOperation.deleteContactsAction(id));

  if (contacts.length === 0) {
    return (
      <Container>
        <h2>No contacts to display</h2>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Contacts list</h2>
        {contacts.map(({ id, name, number }) => (
          <ListGroupItem key={id}>
            {name} : {number}
            <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
          </ListGroupItem>
        ))}
      </Container>
    );
  }
};

export default ContactsList;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAction } from '../../redux/contacts/contacts-operations';
// import { Toaster } from 'react-hot-toast';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import Filter from '../../components/Filter/Filter';
// import Loader from '../../components/Loader/Loader';
import { FirstTitle, SecondTitle, Div } from './ContactsView.styled';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContactsAction()), [dispatch]);

  return (
    <div>
      <FirstTitle>Phonebook</FirstTitle>
      <Form />
      <SecondTitle>Contacts</SecondTitle>
      <Div>
        <List />
        <Filter />
      </Div>
    </div>
  );
}

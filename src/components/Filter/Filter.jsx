import { useSelector, useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import { Form, Container } from 'react-bootstrap';
import {
  getFilter,
  getContacts,
} from '../../redux/contacts/contacts-selectors';
import css from './Filter.module.css';

const changeFilter = createAction('contacts/changeFilter');

const Filter = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = e => dispatch(changeFilter(e.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

  if (contacts.length === 0) {
    return <h2 style={{ display: 'none' }}>Search</h2>;
  } else {
    return (
      <Container className={css.form_container}>
        <Form>
          <Form.Group>
            <h2>Search contact by name</h2>
            <Form.Control
              type="text"
              value={value}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </Form.Group>
        </Form>
      </Container>
    );
  }
};

export default Filter;

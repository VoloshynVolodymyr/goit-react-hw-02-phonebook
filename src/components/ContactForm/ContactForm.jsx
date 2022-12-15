import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import {Form, Input, Button, InputWrapper, Label} from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
};

  handleFormSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();

    onSubmit({ id: nanoid(), ...this.state });

    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({    name: '',
    number: '',});
  };

  render() {
    const nameId = nanoid();
    const numberId = nanoid();

    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <InputWrapper>
          <Label>
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id={nameId}
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>
            Number
          </Label>
          <Input
            type="tel"
            name="number"
            id={numberId}
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWrapper>
        <Button type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}


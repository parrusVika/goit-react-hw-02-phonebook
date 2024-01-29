// import { render } from '@testing-library/react';
import React from 'react';
import css from './Contactsform.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.formLabel}>
            <span>Name</span>
            <input
              className={css.formText}
              type="text"
              name={this.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className={css.formLabel}>
            <span>Number</span>
            <input
              className={css.formText}
              type="tell"
              name={this.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button className={css.btn}>Add contacts</button>
        </form>

        <h2>Contacts:</h2>
      </div>
    );
  }
}

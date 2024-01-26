import { render } from '@testing-library/react';
import React from 'react';
import css from './Contactsform.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class FormContacts extends Component {
  state = {
    name: '',
  };

  handleChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    id: nanoid();
    console.log(`Signed up as: ${this.state.name}`);
    this.props.onSubmit({ ...this.state });
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
          <button className={css.btn}>Add contacts</button>
        </form>

        <h2>Contacts:</h2>
      </div>
    );
  }
}

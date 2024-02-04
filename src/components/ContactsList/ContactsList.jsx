import css from './ContactsList.module.css';

export function ContactList({ contacts, deleteContact }) {
  return (
    <div className={css.contactEl}>
      {contacts.map(contact => (
        <ul className={css.contactList} key={contact.id} contact={contact}>
          <li className={css.contactItem}>
            {contact.name}: {contact.number}
          </li>
          <button
            className={css.contacBtn}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
}

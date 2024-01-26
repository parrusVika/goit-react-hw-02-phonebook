export function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      {contacts.map(contact => (
        <ul key={contact.id} contact={contact}>
          <li>
            {contact.name}: {contact.number}
          </li>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
}

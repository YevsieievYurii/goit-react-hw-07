import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.filterValue);

  const filteredContacts = contacts
    ? contacts.filter((contact) =>
        contact?.name?.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDelete = (idToDelete) => {
    dispatch(deleteContact(idToDelete));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./component/Heading";
import ContactList from "./component/ContactsList";
import AddContact from "./component/AddContact";
import UpdateContact from "./component/UpdateContact";
function App() {
  const [heading] = useState("My Contact List");
  const [contacts, setContacts] = useState([]);
  const [isEditable, setEditable] = useState(false);
  const [editableContactId, setEditatableContactId] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  //fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setContacts(users);
    } catch (err) {
      console.log("error :", err);
    }
  };

  //adding contact
  const addContact = async (newContact) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(newContact),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setContacts([...contacts, data]);
    } catch (err) {
      console.log("error :", err);
    }
  };

  //setEditingEnvironment
  const setEditingEnvironment = (user) => {
    setEditatableContactId(user.id);
    setEditable(true);
  };
  //update contact
  const updateContact = async (updatedContact) => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${editableContactId}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedContact),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setContacts(
        contacts.map((contact) =>
          contact.id === editableContactId
            ? {
                ...contact,
                name: updatedContact.name,
                phone: updatedContact.phone,
              }
            : contact
        )
      );
    } catch (err) {
      console.log("error :", err);
    }
    setEditatableContactId(null);
    setEditable(false);
  };
  //delete contact
  const deleteContact = async (id) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users/id", {
        method: "DELETE",
      });

      setContacts(contacts.filter((user) => user.id !== id));
    } catch (err) {
      console.log("error :", err);
    }
  };
  return (
    <div className="App">
      <Heading heading={heading} />
      <ContactList
        contacts={contacts}
        handleDeleteContact={deleteContact}
        handleUpdateContact={updateContact}
        setEditingEnvironment={setEditingEnvironment}
      />
      {isEditable ? (
        <UpdateContact
          editableContactId={editableContactId}
          handleUpdateContact={updateContact}
        />
      ) : (
        <AddContact handleAddContact={addContact} contacts={contacts} />
      )}
    </div>
  );
}

export default App;

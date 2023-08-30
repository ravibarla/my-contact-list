import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./component/Heading";
import ContactList from "./component/ContactsList";
import AddContact from "./component/AddContact";

function App() {
  const [heading] = useState("My Contact List");
  const [contacts, setContacts] = useState([]);
  // const [newContact, setNewContact] = useState({ name: "", phone: "" });

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
      console.log(contacts);
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
  //update contact
  const updateContact = async (id, updatedContact) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/id",
        {
          method: "PUT",
          body: JSON.stringify(updatedContact),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setContacts(
        contacts.map((user) =>
          user.id === id ? { ...contacts, updateContact } : user
        )
      );
    } catch (err) {
      console.log("error :", err);
    }
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
      <ContactList contacts={contacts} handleDeleteContact={deleteContact} />
      <AddContact handleAddContact={addContact} contacts={contacts} />
      {/* {console.log(contacts)} */}
    </div>
  );
}

export default App;

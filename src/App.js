import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./component/Heading";
import ContactList from "./component/ContactsList";
import AddContact from "./component/AddContact";
import UpdateContact from "./component/UpdateContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [heading] = useState("My Contact List");
  const [contacts, setContacts] = useState([]);
  const [isEditable, setEditable] = useState(false);
  const [editableContactId, setEditatableContactId] = useState("");
  useEffect(() => {
    fetchUsers();
  }, []);
  //call toast
  const callToast = (text) => {
    toast.info(`🦄${text}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

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
    callToast("added succesfully");
  };

  //setEditingEnvironment
  const setEditingEnvironment = (user) => {
    callToast("You can Update Now");
    setEditatableContactId(user);
    setEditable(true);
  };
  //update contact
  const updateContact = async (updatedContact) => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${editableContactId.id}`,
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
          contact.id === editableContactId.id
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
    callToast("updated successfully:");
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
    callToast("deleted successfully");
  };
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Heading heading={heading} />
        <ContactList
          contacts={contacts}
          handleDeleteContact={deleteContact}
          handleUpdateContact={updateContact}
          setEditingEnvironment={setEditingEnvironment}
          callToast={callToast}
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
    </>
  );
}

export default App;

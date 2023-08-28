import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./component/Heading";
import ContactList from "./component/ContactsList";
import AddContact from "./component/AddContact";

function fetchContact(contact) {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((jsonData) => setContacts(jsonData));
  // console.log("contats :", contact);
}
function App() {
  const [heading, setHeading] = useState("My Contact List");
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((data) => {
        const formattedData = data.map((user) => ({
          id: user.id,
          name: user.name,
          phone: user.phone,
        }));
        setContacts(formattedData);
      })

      .catch((err) => console.error(err));
  }, []);
  useEffect(() => console.log("contacts :", contacts), []);
  return (
    <div className="App">
      <Heading heading={heading} />
      <ContactList contacts={contacts}/>
      <AddContact />
      {/* {console.log("contacts :", contacts)} */}
      {/* <button onClick={() => fetchContact(contacts)}>view Contact</button> */}
    </div>
  );
}

export default App;

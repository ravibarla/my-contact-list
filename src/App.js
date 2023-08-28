import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./component/Heading";
import ContactList from "./component/ContactsList";
import AddContact from "./component/AddContact";

async function fetchContact() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));
}
function App() {
  const [heading, setHeading] = useState("My Contact List");

  useEffect(() => fetchContact, []);

  return (
    <div className="App">
      <Heading heading={heading} />
      <ContactList />
      <AddContact />
      {/* <button onClick={fetchContact}>view Contact</button> */}
    </div>
  );
}

export default App;

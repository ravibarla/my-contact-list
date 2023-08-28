import { useState } from "react";
import "./App.css";
import Heading from "./component/Heading";
import ContactList from "./component/ContactsList";
import AddContact from "./component/AddContact";
function App() {
  const [heading,setHeading] = useState("My Contact List");
  return (
    <div className="App">
      <Heading heading={heading} />
      <ContactList />
      <AddContact />
    </div>
  );
}

export default App;

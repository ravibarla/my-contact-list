import { useState } from "react";
const AddContact = (props) => {
  const { handleNewContact } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form onSubmit={(e) => handleNewContact({ name: name, phone: phone }, e)}>
      <input
        placeholder="enter name :"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="enter phone :"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
export default AddContact;

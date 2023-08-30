import { useState } from "react";
const AddContact = (props) => {
  const { handleAddContact, contacts } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    handleAddContact({ name, phone });
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
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

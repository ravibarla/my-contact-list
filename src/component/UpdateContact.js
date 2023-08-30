import { useState } from "react";
const UpdateContact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { editableContactId, handleUpdateContact } = props;
  //   console.log("editableContactId :", editableContactId);
  const handleForm = (e) => {
    e.preventDefault();
    handleUpdateContact({ id: editableContactId, name, phone });
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
      <button>UPDATE</button>
    </form>
  );
};
export default UpdateContact;

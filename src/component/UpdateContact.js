import { useState } from "react";
const UpdateContact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { editableContactId, handleUpdateContact } = props;
  const handleForm = (e) => {
    e.preventDefault();
    handleUpdateContact({ id: editableContactId, name, phone });
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
      <input
        placeholder={editableContactId.name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder={editableContactId.name}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="bg-secondary">UPDATE</button>
    </form>
  );
};
export default UpdateContact;

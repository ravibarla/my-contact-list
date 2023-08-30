import { useEffect, useState } from "react";
const UpdateContact = (props) => {
  const { editableContactId, handleUpdateContact } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setName(editableContactId.name);
    setPhone(editableContactId.phone);
  }, [editableContactId]);
  const handleForm = (e) => {
    e.preventDefault();
    //input validation
    handleUpdateContact({ id: editableContactId, name, phone });
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
      <input placeholder={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder={phone} onChange={(e) => setPhone(e.target.value)} />
      <button className="bg-secondary">Update</button>
    </form>
  );
};
export default UpdateContact;

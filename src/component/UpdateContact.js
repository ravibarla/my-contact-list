import { useEffect, useState } from "react";
//define UpdateContact
const UpdateContact = (props) => {
  const { editableContactId, handleUpdateContact, callToast } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setName(editableContactId.name);
    setPhone(editableContactId.phone);
  }, [editableContactId]);
  const handleForm = (e) => {
    e.preventDefault();
    //input validation
    if (!name) {
      callToast("name cannot be empty");
      return;
    }
    if (!phone) {
      callToast("phone cannot be empty");
      return;
    }
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

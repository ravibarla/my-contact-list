import { useState } from "react";
const AddContact = (props) => {
  const { handleAddContact, callToast } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    //input validation
    if (!name) {
      callToast("name cannot be empty","warning");
      return;
    }
    if (!phone) {
      callToast("phone cannot be empty","warning");
      return;
    }

    handleAddContact({ name, phone });
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
      <input
      type="text"
        placeholder="enter name :"
        onChange={(e) => setName(e.target.value)}
        className="form-control-md"
      />
      <input
      type="number"
        placeholder="enter phone :"
        onChange={(e) => setPhone(e.target.value)}
        className="form-control-md"
      />
      <button className="bg-primary">Add</button>
    </form>
  );
};
export default AddContact;

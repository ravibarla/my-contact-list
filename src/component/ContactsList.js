import "bootstrap/dist/css/bootstrap.css";
const ContactList = (props) => {
  const {
    contacts,
    handleDeleteContact,
    handleUpdateContact,
    setEditingEnvironment,
  } = props;

  // const handleEditButton = () => {
  //   console.log("edit");
  //   return (
  //     <form>
  //       <input placeholder="update name" />
  //     </form>
  //   );
  // };
  return (
    <div>
      <div style={{ listStyle: "none" }}>
        {contacts.length > 0 &&
          contacts.map((data) => (
            <>
              <div>{data.name}</div>
              <div>{data.phone}</div>
              <button
                onClick={() =>
                  setEditingEnvironment({
                    name: data.name,
                    phone: data.phone,
                    id: data.id,
                  })
                }
              >
                edit
              </button>

              <button onClick={() => handleDeleteContact(data.id)}>
                delete
              </button>

              <div></div>
              <div className="border 2px solid white"></div>
            </>
          ))}
      </div>
    </div>
  );
};
export default ContactList;

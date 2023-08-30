import "bootstrap/dist/css/bootstrap.css";
const ContactList = (props) => {
  const { contacts, handleDeleteContact, setEditingEnvironment } = props;

  return (
    <div>
      <div style={{ listStyle: "none" }}>
        {contacts.length > 0 &&
          contacts.map((data) => (
            <>
              <div>{data.name}</div>
              <div>{data.phone}</div>
              <button
                onClick={() => {
                  setEditingEnvironment(data.id);
                }}
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

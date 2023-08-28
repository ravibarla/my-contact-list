import "bootstrap/dist/css/bootstrap.css"
const ContactList = (props) => {
  // console.log(props);
  const { contacts } = props;
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {contacts.map((data) => (
          <>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.phone}</li>
            <button>edit</button>
            <button>delete</button>
          </>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;

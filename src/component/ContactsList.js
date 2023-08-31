import "bootstrap/dist/css/bootstrap.css";
const ContactList = (props) => {
  const { contacts, handleDeleteContact, setEditingEnvironment } = props;

  return (
    <div className="container">
      <div className="row border">
        <div className="col-2">
          <div className="h-2 fw-bold">S.no</div>
        </div>
        <div className="col-4">
          <div className="h-2 fw-bold">Name</div>
        </div>
        <div className="col-4">
          <div className="h-2 fw-bold">Phone</div>
        </div>
        <div className="col-2">
          <div className="h-2 fw-bold">Action</div>
        </div>
        {/* <div className="col-1">
          <div className="h-2 fw-bold">Delete</div>
        </div> */}
      </div>
      <div style={{ listStyle: "none" }}>
        {contacts.length > 0 &&
          contacts.map((data) => (
            <div className="d-flex flex-row mb-3 justify-content-center row">
              <div className=" border col-2">{data.id}</div>
              <div className=" border col-4">{data.name}</div>
              <div className=" border col-4">{data.phone}</div>
              <button
                onClick={() => {
                  setEditingEnvironment(data);
                }}
                className="border bg-warning col-1"
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteContact(data.id)}
                className="border bg-danger col-1"
              >
                Delete
              </button>

              <div></div>
              {/* <div className="border 2px solid white"></div> */}
            </div>
          ))}
      </div>
    </div>
  );
};
export default ContactList;

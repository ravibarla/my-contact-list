const ContactList = (props) => {
  // console.log(props);
  const { contacts } = props;
  return contacts.map((data) => (
    <ul>
      <li>{data.id}</li> <li>{data.name}</li>
      <li>{data.phone}</li>
    </ul>
  ));
};
export default ContactList;

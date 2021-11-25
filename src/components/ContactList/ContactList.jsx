import { removeContact } from '../../redux/phoneBook/phoneBook-operations';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { getFilteredContacts } from '../../redux/phoneBook/selectors';

const Styles = styled.div`
  .selector1 {
    position: relative;
    width: 95%;
    border-collapse: collapse;
    margin: 20px auto;
    overflow: scroll;
  }
  .selector2 {
    position: sticky;
    background-color: rgb(63, 207, 243);
    text-transform: uppercase;
    color: #fff;
  }
  .selector3 {
    line-height: 2;
    border: 1px solid burlywood;
    text-align: center;
  }
`;
function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleClick = e => dispatch(removeContact(e.target.id));
  return (
    <Styles>
      <table className="selector1">
        <thead className="selector2">
          <tr>
            <th className="selector3">Name</th>
            <th className="selector3">Phone Number</th>
            <th className="selector3">Etc.</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map(({ id, name, number }) => (
              <tr key={id}>
                <td
                  className="selector3"
                  style={{ textTransform: 'capitalize' }}
                >
                  {name}
                </td>
                <td className="selector3">{number}</td>
                <td className="selector3">
                  <button
                    className="button"
                    type="button"
                    onClick={handleClick}
                    id={id}
                  >
                    Delete contact
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="selector3" colSpan="3">
                <h3>no contacts finding</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Styles>
  );
}

export default ContactList;
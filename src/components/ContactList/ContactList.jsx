import { removeContact } from '../../redux/phoneBook/phoneBook-operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

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
  const { contacts } = useSelector(state => state.phoneBook)
  const {filter} = useSelector(state=>state.phoneBook)
  
  const dispatch = useDispatch();

  const getFilteredContacts = (allContacts, filterValue) => {
    return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase()),
  );
};

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
          {getFilteredContacts(contacts, filter).map(({ id, name, number }) => (
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
            ))}
        </tbody>
      </table>
    </Styles>
  );
}

export default ContactList;

































//  ----without createAsyncThunk----
// // import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// // import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
// import styled from 'styled-components';
// import { useEffect } from 'react';
// import {fetchContacts, removeContact} from '../../redux/phoneBook/phoneBook-operations';

// const Styles = styled.div`
//   .selector1 {
//     position: relative;
//     width: 95%;
//     border-collapse: collapse;
//     margin: 20px auto;
//     overflow: scroll;
//   }
//   .selector2 {
//     position: sticky;
//     background-color: rgb(63, 207, 243);
//     text-transform: uppercase;
//     color: #fff;
//   }
//   .selector3 {
//     line-height: 2;
//     border: 1px solid burlywood;
//     text-align: center;
//   }
// `;
// function ContactList(
//   { cbRemoveContact,
//     filterValue,
//     // filteredContacts,
//     allContacts,
//     fetchAllContacts,
//     // getFilteredContacts
//   }) {
//   useEffect(() => {
//     fetchAllContacts(filterValue);
//     // eslint-disable-next-line
//   }, [filterValue]);

//   // useEffect(() => {
//   //   // if (!filterValue) { return }
//   //   getFilteredContacts(filterValue)
//   //   // eslint-disable-next-line
//   // },[filterValue])

//   console.log(allContacts);

//   const handleClick = e => cbRemoveContact(e.target.id);
//   return (
//     <Styles>
//       <table className="selector1">
//         <thead className="selector2">
//           <tr>
//             <th className="selector3">Name</th>
//             <th className="selector3">Phone Number</th>
//             <th className="selector3">Etc.</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//           //allContacts &&
//             allContacts.map(({ id, name, number }) => (
//               <tr key={id}>
//                 <td
//                   className="selector3"
//                   style={{ textTransform: 'capitalize' }}
//                 >
//                   {name}
//                 </td>
//                 <td className="selector3">{number}</td>
//                 <td className="selector3">
//                   <button
//                     className="button"
//                     type="button"
//                     onClick={handleClick}
//                     id={id}
//                   >
//                     Delete contact
//                   </button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </Styles>
//   );
// }

// // const getFilteredContacts = (allContacts, filterValue) => {
// //   // const normalizeFilter = filterValue.toLowerCase();
// //   return allContacts.filter(({ name }) =>
// //     name.toLowerCase().includes(filterValue.toLowerCase()),
// //   );
// // };

// const mapStateToProps = ({
//   contacts: {
//     items,
//     filter,
//   },
// }) => ({
//   // filteredContacts: getFilteredContacts(items, filter),
//   allContacts: items,
//   filterValue:filter
// });

// const mapDispatchToProps = dispatch => ({
//   cbRemoveContact: id => dispatch(removeContact(id)),
//   fetchAllContacts: (filter) => dispatch(fetchContacts(filter)),
//   // getFilteredContacts: (filterValue)=>dispatch(getFilteredContacts(filterValue))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// // ContactList.propTypes = {
// //   contacts: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.string.isRequired,
// //       name: PropTypes.string.isRequired,
// //       number: PropTypes.string.isRequired,
// //     }),
// //   ),
// //   cbRemoveContact: PropTypes.func.isRequired,
// //   fetchAllContacts:PropTypes.func.isRequired,
// // };


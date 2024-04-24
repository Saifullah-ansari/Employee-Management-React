// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import style from "./home.module.css";
// import { Link } from "react-router-dom";

// const Users = () => {
//   let [state, setState] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/content").then((response) => {
//       console.log(response.data);
//       setState(response.data);
//     });
//   }, []);
//   //console.log(data)

//   let deleteData = (a) => {
//     axios.delete(`http://localhost:3000/content/${a}`);
//     window.location.assign("/user");
//   };
//   return (
//     <div id={style.profile}>
//       {state.map((x) => {
//         return (
//           <div id={style.box}>
//             <table>
//               <thead>
//                 <tr>
//                   <th>S.No</th>
//                   <th>Employee ID</th>
//                   <th>Name</th>
//                   <th>Salary</th>
//                   <th>Company</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{x.id}</td>
//                   <td>{x.id}</td>
//                   <td>{x.name}</td>
//                   <td>{x.salary}</td>
//                   <td>{x.company}</td>
//                   <td>
//                     <button>
//                       <Link to={`/edit/${x.id}`}>Edit</Link>
//                     </button>
//                     <button
//                       onClick={() => {
//                         deleteData(x.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Users;


//database
// //npx json-server --watch Backend/db.json
// //npx json-server Backend/db.json --watch port 8000



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import style from "./home.module.css";
// import { Link } from "react-router-dom";

// const Users = () => {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/content").then((response) => {
//       console.log(response.data);
//       setState(response.data);
//     });
//   }, []);

//   const deleteData = (id) => {
//     axios.delete(`http://localhost:3000/content/${id}`);
//     window.location.assign("/user");
//   };

//   return (
//     <div id={style.profile}>
//       {state.map((user) => (
//         <div key={user.id} className={style.box}>
//           <div>
//             <strong>S.No:</strong> {user.id}
//           </div>
//           <div>
//             <strong>Employee ID:</strong> {user.id}
//           </div>
//           <div>
//             <strong>Name:</strong> {user.name}
//           </div>
//           <div>
//             <strong>Salary:</strong> {user.salary}
//           </div>
//           <div>
//             <strong>Company:</strong> {user.company}
//           </div>
//           <div className={style.actions}>
//             <button>
//               <Link to={`/edit/${user.id}`}>Edit</Link>
//             </button>
//             <button onClick={() => deleteData(user.id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import style from "./home.module.css";
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';

// const Users = () => {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/content").then((response) => {
//       console.log(response.data);
//       setState(response.data);
//     });
//   }, []);

//   const deleteData = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this user data!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, keep it'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`http://localhost:3000/content/${id}`)
//           .then(() => {
//             Swal.fire('Deleted!', 'User data has been deleted.', 'success');
//             window.location.assign("/user");
//           })
//           .catch((error) => {
//             Swal.fire('Error!', 'An error occurred while deleting user data.', 'error');
//             console.error('Error deleting user data:', error);
//           });
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         Swal.fire('Cancelled', 'User data is safe :)', 'info');
//       }
//     });
//   };

//   return (
//     <div id={style.profile}>
//       {state.map((user) => (
//         <div key={user.id} className={style.box}>
//           <div>
//             <strong>S.No:</strong> {user.id}
//           </div>
//           <div>
//             <strong>Employee ID:</strong> {user.id}
//           </div>
//           <div>
//             <strong>Name:</strong> {user.name}
//           </div>
//           <div>
//             <strong>Salary:</strong> {user.salary}
//           </div>
//           <div>
//             <strong>Company:</strong> {user.company}
//           </div>
//           <div className={style.actions}>
//             <button>
//               <Link to={`/edit/${user.id}`}>Edit</Link>
//             </button>
//             <button onClick={() => deleteData(user.id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import style from "./home.module.css";
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';

// const Users = () => {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/content").then((response) => {
//       console.log("API Response:", response.data); // Log the API response
//       setState(response.data);
//     });
//   }, []);


//     // Function to handle edit button click
// const handleEdit = (userId) => {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: 'You are about to edit user data.',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, edit it!',
//     cancelButtonText: 'Cancel'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // If confirmed, redirect to the edit page
//       navigate(`/edit/${userId}`);
//     }
//   });
// };

//   const deleteData = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this user data!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, keep it'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`http://localhost:3000/content/${id}`)
//           .then(() => {
//             Swal.fire('Deleted!', 'User data has been deleted.', 'success');
//             window.location.assign("/user");
//           })
//           .catch((error) => {
//             Swal.fire('Error!', 'An error occurred while deleting user data.', 'error');
//             console.error('Error deleting user data:', error);
//           });
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         Swal.fire('Cancelled', 'User data is safe :)', 'info');
//       }
//     });
//   };




//   let serialNumber = 0; // Initialize serial number counter

//   return (
//     <div id={style.profile}>
//       {state.map((user) => {
//         serialNumber++; // Increment serial number for each user
//         return (
//           <div key={user.id} className={style.box}>
//             <div>
//               <strong>S.No:</strong> {serialNumber}
//             </div>
//             <div>
//               <strong>Employee ID:</strong> {user.employeeId} {/* Assuming employeeId is the correct field */}
//             </div>
//             <div>
//               <strong>Name:</strong> {user.name}
//             </div>
//             <div>
//               <strong>Salary:</strong> {user.salary}
//             </div>
//             <div>
//               <strong>Company:</strong> {user.company}
//             </div>
//             <div className={style.actions}>
//               {/* <button>
//                 <Link to={`/edit/${user.id}`}>Edit</Link>
//               </button> */}
//               <button onClick={() => handleEdit(user.id)}>Edit</button>
//               <button onClick={() => deleteData(user.id)}>Delete</button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Users;



import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./home.module.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from 'sweetalert2';

const Users = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook to navigate

  useEffect(() => {
    axios.get("http://localhost:3000/content").then((response) => {
      console.log("API Response:", response.data); // Log the API response
      setState(response.data);
    });
  }, []);

  // Function to handle edit button click
  const handleEdit = (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to edit user data.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, edit it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, navigate to the edit page
        navigate(`/edit/${userId}`);
      }
    });
  };

  const deleteData = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/content/${id}`)
          .then(() => {
            Swal.fire('Deleted!', 'User data has been deleted.', 'success');
            window.location.assign("/user");
          })
          .catch((error) => {
            Swal.fire('Error!', 'An error occurred while deleting user data.', 'error');
            console.error('Error deleting user data:', error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'User data is safe :)', 'info');
      }
    });
  };

  let serialNumber = 0; // Initialize serial number counter

  return (
    <div id={style.profile}>
      {state.map((user) => {
        serialNumber++; // Increment serial number for each user
        return (
          <div key={user.id} className={style.box}>
            {/* <div>
              <strong>S.No:</strong> {serialNumber}
            </div> */}
            <div>
              <strong>Employee ID:</strong> {user.id} {/* Assuming employeeId is the correct field */}
            </div>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Salary:</strong> {user.salary}
            </div>
            <div>
              <strong>Company:</strong> {user.company}
            </div>
            <div className={style.actions}>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => deleteData(user.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;



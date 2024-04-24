// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import style from "./home.module.css";


// const Footer = () => {

//   const location = useLocation();

//   if (location.pathname !== "/") {
//     // Don't render the footer on pages other than the home page
//     return null;
//   }

//   return (
//     <footer className={style.footer}>
//       <div className={style.footerContent}>
//         <div className={style.footerSection}>
//           <h2>Contact Us</h2>
//           <p>Email: navendurai49@gmail.com</p>
//           <p className={style.contact}>Phone: +91 8340450571</p>
//         </div>

//         <div className={style.footerSection}>
//           <h2>Follow Us</h2>
//           <p>
//             <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
//               Twitter
//             </a>
//           </p>
//           <p>
//             <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
//               Facebook
//             </a>
//           </p>
//           <p>
//             <a href="https://www.linkedin.com/in/navendu-singh-a3367a141/" target="_blank" rel="noopener noreferrer">
//               LinkedIn
//             </a>
//           </p>
//         </div>

//         <div className={style.footerSection}>
//           <h2>Quick Links</h2>
//           <p>
//             <Link to="/">Privacy Policy</Link>
//           </p>
//           <p>
//             <Link to="/">Terms of Service</Link>
//           </p>
//         </div>
//       </div>

//       <div className={style.footerBottom}>
//         <p>&copy; 2023 Employee Management App. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };



// const HomeCrud = () => {
//   const location = useLocation();
//   // console.log("Current pathname:", location.pathname);
//   return (
//     <div>
//       <section id={style.nav}>
//         <Link className={style.link} to="/">
//           Home
//         </Link>

//         <Link to="/create">Create-Users</Link>
//         <Link to="/user">Users</Link>
//       </section>

//       {location.pathname === "/" && (
//         <section className={style.sec}>
//           <h1>Employee Management</h1>
//           <br />

//           <p>
//             Efficiently manage your employee data with our <b>CRUD</b> application.
//             <br />
//             Keep track of salaries, edit employee information, and more.
//             <br />
//             Simplify your HR tasks with our user-friendly interface.
//           </p>
//           <br />
//         </section>
//       )}
//             <Footer />

//     </div>
//   );
// };

// export default HomeCrud;
  


// HomeCrud.jsx

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import style from "./home.module.css"; // Assuming you have a separate CSS module for the homepage styling
// // import Footer from "./Components/Footer"; // Import the Footer component
// import Footer from "./Footer"; // Import the Footer component

// const HomeCrud = () => {
//   const location = useLocation();

//   return (
//     <div>
//       {/* <section id={style.nav}>
//         <Link className={style.link} to="/">
//           Home
//         </Link>
//         <Link to="/create">Create-Users</Link>
//         <Link to="/user">Users</Link>
//       </section> */}


//       {/* Homepage content */}
//       {location.pathname === "/" && (
//         <section className={style.sec}>
//           <h1>Employee Management</h1>
//           <br />
//           <p>
//             Efficiently manage your employee data with our <b>CRUD</b> application.
//             <br />
//             Keep track of salaries, edit employee information, and more.
//             <br />
//             Simplify your HR tasks with our user-friendly interface.
//           </p>
//           <br />
//         </section>
//       )}

//       {/* Render the Footer component only on the homepage */}
//       {/* <Footer /> */}
//       <Footer/>
//     </div>
//   );
// };

// export default HomeCrud;




// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import style from "./home.module.css"; // Assuming you have a separate CSS module for the homepage styling
// import Footer from "./Footer"; // Import the Footer component
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const HomeCrud = () => {
//   const location = useLocation();

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">Home</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/create">Create Users</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/user">Users</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Homepage content */}
//       {location.pathname === "/" && (
//         <section className={style.sec}>
//           <h1>Employee Management</h1>
//           <br />
//           <p>
//             Efficiently manage your employee data with our <b>CRUD</b> application.
//             <br />
//             Keep track of salaries, edit employee information, and more.
//             <br />
//             Simplify your HR tasks with our user-friendly interface.
//           </p>
//           <br />
//         </section>
//       )}

//       {/* Render the Footer component only on the homepage */}
//       <Footer />
//     </div>
//   );
// };

// export default HomeCrud;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./home.module.css"; // Assuming you have a separate CSS module for the homepage styling
import Footer from "./Footer"; // Import the Footer component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

const HomeCrud = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Homepage content */}
      {location.pathname === "/" && (
        <section className="container mt-5">
        <h1 className="display-4">Employee Management</h1>
        <p className="lead">
          Efficiently manage your employee data with our <b>CRUD</b> application.
          <br />
          Keep track of salaries, edit employee information, and more.
          <br />
          Simplify your HR tasks with our user-friendly interface.
        </p>
      </section>
      
      )}

      {/* Render the Footer component only on the homepage */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomeCrud;

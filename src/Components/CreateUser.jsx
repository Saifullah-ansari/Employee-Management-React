// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import style from "./home.module.css"


// const CreateUser=()=> {
//     let [name,setName] =useState("")
//     let [salary,setSalary] =useState("")
//     let [company,setCompany] =useState("")
//     let navigate =useNavigate()

//     let nameData=(e)=>{
//         setName(e.target.value)
//     }
//     let salaryData=(e)=>{
//         setSalary(e.target.value)
//     }
//     let companyData=(e)=>{
//         setCompany(e.target.value)
//     }
//     let formHandle=(e)=>{
//         e.preventDefault()
//         let payload ={name,salary ,company}
//          axios.post("http://localhost:3000/content" ,payload)
//          .then((response)=>{
//          console.log("data has been added");
//         })
//         navigate("/user")
//     ,[]}
//   return (
//     <div>
//         <form action="">
//             <table id={style.Myform}>
//                 <h2 className={style.head}>Create New User</h2><br />
                
//                 <tr>
//                     <td><label htmlFor="">Name</label></td>
//                     <td><input type="text" placeholder='Enter full name' value={name} onChange={nameData} /></td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td><label htmlFor="">Salary</label></td>
//                     <td><input type="text" placeholder='Enter salary' value={salary} onChange={salaryData} /></td>
//                 </tr>
//                 <br />
//                 <tr>
//                     <td><label htmlFor="">Company</label></td>
//                     <td><input type="text" placeholder='Enter company name' value={company} onChange={companyData}/></td>
//                 </tr>
//                 <br />
//                 <tr id={style.btn}>
//                     <td colSpan='2'><button onClick={formHandle}>Submit</button></td>
//                 </tr>
//             </table>
//         </form>
//     </div>
    
//   )
// }

// export default CreateUser





import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./home.module.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const nameData = (e) => {
    setName(e.target.value);
  };

  const salaryData = (e) => {
    setSalary(e.target.value);
  };

  const companyData = (e) => {
    setCompany(e.target.value);
  };

  const formHandle = (e) => {
    e.preventDefault();
    const payload = { name, salary, company };
    axios.post("http://localhost:3000/content", payload)
      .then((response) => {
        console.log("Data has been added");
      });
    navigate("/user");
  };

  return (
    <div>
      <form className={style.Myform} onSubmit={formHandle}>
        <h2 className={style.head}>Create New User</h2>
        
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter full name' value={name} onChange={nameData} />
        </div>
        
        <div>
          <label htmlFor="salary">Salary</label>
          <input type="text" placeholder='Enter salary' value={salary} onChange={salaryData} />
        </div>
        
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" placeholder='Enter company name' value={company} onChange={companyData} />
        </div>
        
        <div className={style.btn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

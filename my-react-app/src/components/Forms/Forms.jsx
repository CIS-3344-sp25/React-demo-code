import React, { useState } from "react";

const Forms = () => {
  const [fullName, setFullName] = useState("");
   //setting the initial state will not let you change the value of the input field. The value of the input field is controlled by the component.
  //we need to make it so, that when the value is changed, setName is triggered and the value of the input field is changed.
  //associate this with the value of the imput field. This is a controlled component.
  // A controlled component is a component that renders a form whose values are controlled by the component. The value of the input field is controlled by the component.
  const [email, setEmail] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
        ...prevData,
        [name]: value
  }))
  };
  //we can use the formData object to store the form data. We can update the formData object when the value of the input field is changed.
  return (
    <div>
      <h1>Forms</h1>
      {/* <form>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" name="fullName" id="fullName"  required onChange={(e) => {setFullName(e.target.value)}} value={fullName}/>
            
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email"  required onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        </form> */}
      {/* <p>{fullName}</p>
    <p>{email}</p> */}
      <form>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          required
          onChange={handleChange}
          value={form.fullName}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
          value={form.email}
        />
        <p>{form.fullName}</p>
        <p>{form.email}</p>
      </form>
    </div>
  );
};

export default Forms;

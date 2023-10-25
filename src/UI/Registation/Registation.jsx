import { useState } from "react";
import { NavLink } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center container items-center mx-auto mt-8">
      <NavLink to="/">Back to main page</NavLink>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 rounded border"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 rounded border"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 rounded border"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 rounded border"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;

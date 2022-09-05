import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleQuery = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.match(/^[a-zA-Z]+$/))
      return setErrorMsg("Name must be A-Z letter only!");
    if (form.email.indexOf("@") && form.email.indexOf(".") === -1)
      return setErrorMsg("Email is not valid!");
    if (form.password.length < 8)
      return setErrorMsg("Password must be at least 8");

    setErrorMsg("");
    console.log("form submitted!");
  };

  return (
    <div className="App mb">
      <h3>Register</h3>
      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <br />
        <input type="text" name="name" id="name" onChange={handleQuery} />
        <br />
        <label htmlFor="email">Email: </label>
        <br />
        <input type="email" name="email" id="email" onChange={handleQuery} />
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          className="mb"
          onChange={handleQuery}
        />
        <br />
        <button
          disabled={
            form.name === "" || form.email === "" || form.password === ""
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

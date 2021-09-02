import React, { Fragment, useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { color };
      const response = await fetch("http://localhost:4000/api/addcolor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default Form;
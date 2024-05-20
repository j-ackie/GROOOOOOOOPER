import React, { useState } from "react";

const AddMemberForm = ({ addMember }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Member</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Member Name"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMemberForm;

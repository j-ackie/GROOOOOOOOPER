import React from "react";

const MemberList = ({ members, removeMember }) => {
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name}
            <button onClick={() => removeMember(member.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;

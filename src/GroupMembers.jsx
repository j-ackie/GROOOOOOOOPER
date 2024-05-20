import React from "react";

const GroupMembers = ({ groups, regroupMembers }) => {
  return (
    <div>
      <h2>Groups</h2>
      {groups.length === 0 ? (
        <p>No groups formed yet. Click the button to form groups.</p>
      ) : (
        groups.map((group, index) => (
          <div key={index}>
            <h3>Group {index + 1}</h3>
            <ul>
              {group.map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
            </ul>
          </div>
        ))
      )}
      <button onClick={regroupMembers}>Regroup Members</button>
    </div>
  );
};

export default GroupMembers;

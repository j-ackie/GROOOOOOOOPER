import React, { useState } from "react";
import MemberList from "./MemberList";
import AddMemberForm from "./AddMemberForm";
import GroupMembers from "./GroupMembers";

const App = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "Alice", collaborations: [2, 3] },
    { id: 2, name: "Bob", collaborations: [1] },
    { id: 3, name: "Charlie", collaborations: [1] },
  ]);
  const [groups, setGroups] = useState([]);

  const addMember = (name) => {
    const newMember = { id: Date.now(), name, collaborations: [] };
    setMembers([...members, newMember]);
  };

  const removeMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const regroupMembers = () => {
    const createGroups = () => {
      const groups = [];
      const usedMembers = new Set();

      members.forEach((member) => {
        if (!usedMembers.has(member.id)) {
          const availableMembers = members.filter(
            (m) =>
              m.id !== member.id &&
              !usedMembers.has(m.id) &&
              !member.collaborations.includes(m.id)
          );
          if (availableMembers.length > 0) {
            groups.push([member, availableMembers[0]]);
            usedMembers.add(member.id);
            usedMembers.add(availableMembers[0].id);
          } else {
            groups.push([member]);
            usedMembers.add(member.id);
          }
        }
      });

      return groups;
    };

    setGroups(createGroups());
  };

  return (
    <div>
      <h1>Agile Team Manager</h1>
      <AddMemberForm addMember={addMember} />
      <MemberList members={members} removeMember={removeMember} />
      <GroupMembers groups={groups} regroupMembers={regroupMembers} />
    </div>
  );
};

export default App;

import React from "react";

const displayOwner = ({ repositories }) => {
  return repositories.length !== 0 ? (
    <div style={{ marginBottom: "20px", background: "#eee" }}>
      <img src={repositories[0].owner.avatar_url} alt="morda" />
      <p>Name: {repositories[0].owner.login}</p>
    </div>
  ) : (
    <div>No user</div>
  );
};

export default displayOwner;

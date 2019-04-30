import React from "react";

const displayOwner = ({ ownerData }) => {
  return (
    <div style={{ marginBottom: "20px", background: "#eee" }}>
      <img src={ownerData.avatar_url} alt="morda" />
      <p>Name: {ownerData.login}</p>
    </div>
  );
};

export default displayOwner;

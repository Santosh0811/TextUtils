import React from 'react';

const Alert = (props) => {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show mb-auto p-1`} role="alert">
        <span>{capitalize(props.alert.msg)}</span>
      </div>}
    </div>
  );
};

export default Alert;

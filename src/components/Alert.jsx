import React from "react";

const Alert = (props) => {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.type}
        <strong> {props.alert.msg}</strong>
      </div>
    )
  );
};

export default Alert;

// src/components/Button/Button.jsx
import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const buttonClass = `${styles.btn} ${styles[`btn-${variant}`]} ${className}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

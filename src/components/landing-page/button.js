import React from 'react';
import { Link } from "gatsby";

const Button = ({ label, to, className="button", type, title, linkName }) => (
  <Link className={linkName} to={to}>
    <button className={className} type={type} title={title}>
      {label}
    </button>
  </Link>
);

export default Button;
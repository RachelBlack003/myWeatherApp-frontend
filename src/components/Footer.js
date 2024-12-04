import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <span className="position-absolute text-white p-2" style={{"bottom": "1px"}}>&copy; Copyright {year} Jack Pendleton, Rachel Black, and Avery Massman</span>
  );
};

export default Footer;
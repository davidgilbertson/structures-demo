import React from 'react';

const Link = (props) => {
  return (
    <a
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default Link;

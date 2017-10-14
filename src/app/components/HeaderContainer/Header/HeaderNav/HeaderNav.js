import React from 'react';
import { Link } from 'Components';

import formatDate from 'Utils/formatDate';
import getAtPath from 'Utils/getAtPath';
import toNumber from 'Utils/toNumber';
import toString from 'Utils/toString';

const HeaderNav = () => {
  return (
    <nav>
      {formatDate(new Date())} <br />
      {getAtPath('something')} <br />
      {toNumber('something')} <br />
      {toString('some new string')}
      <br />
      <Link href="https://www.google.com">Nav 1</Link>
      <br />
      <Link href="https://www.google.com">Nav 2</Link>
      <br />
      <Link href="https://www.google.com">Nav 3</Link>
      <br />
    </nav>
  );
};

export default HeaderNav;

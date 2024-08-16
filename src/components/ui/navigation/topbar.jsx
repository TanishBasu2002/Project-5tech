import React, { useState } from 'react';
import { Menu } from 'antd';
import { topbaritems } from '../../../utils/constants';

export const Topbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={topbaritems} />;
};
import React from 'react';
import { Wrapper } from './style';
import { Dropdown } from 'antd';
import { useDropDown } from '../../Generic/DropDownApi';

const Navbar = () => {
  
  const { loginItems } = useDropDown();
  
  return (
    <Wrapper>
      <Wrapper.Title>NIHOL</Wrapper.Title>
      <Dropdown
       menu={{ items: loginItems() }}
       trigger={['click']}
      >
      <Wrapper.Avatar>A</Wrapper.Avatar>
    </Dropdown>
    </Wrapper>
  )
}

export default Navbar
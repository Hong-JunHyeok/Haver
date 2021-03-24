import React from 'react';
import './Header.scss';
import Button from 'components/Common/Button';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header_title">Haver</h1>
      <form className="Header_form">
        <input className="Header_form_input" type="text" placeholder="검색어를 입력해주세요" />
        <Button>제출</Button>
      </form>
    </div>
  );
};

export default Header;

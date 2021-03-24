import React, { useCallback, useState } from 'react';
import './Header.scss';
import Button from 'components/Common/Button';

const Header = () => {
  const [query, setQuery] = useState<string>('');

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [setQuery]
  );

  return (
    <div className="Header">
      <h1 className="Header_title">Haver</h1>
      <form className="Header_form">
        <input
          className="Header_form_input"
          value={query}
          onChange={handleChangeInput}
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <Button>검색</Button>
      </form>
    </div>
  );
};

export default Header;

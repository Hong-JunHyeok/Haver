import React from 'react';
import './Button.scss';

interface PropsType {
  children: React.ReactNode;
  customStyle?: object;
  onClickFunc?: (...args: any) => void;
}
const Button = ({ children, customStyle, onClickFunc }: PropsType) => {
  return (
    <div className="Button" onClick={onClickFunc} style={customStyle}>
      {children}
    </div>
  );
};

export default Button;

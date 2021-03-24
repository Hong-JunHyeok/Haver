import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './PageTemplate.scss';

interface PropsType {
  children?: React.ReactNode;
}

const PageTemplate = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <div className="body">{children}</div>
      <Footer />
    </>
  );
};

export default PageTemplate;

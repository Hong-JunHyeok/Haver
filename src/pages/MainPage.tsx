import React from 'react';
import PageTemplate from 'components/Common/PageTemplate';
import DocCard from 'components/Main/DocCard';

const MainPage = () => {
  return (
    <>
      <PageTemplate>
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
      </PageTemplate>
    </>
  );
};

export default MainPage;

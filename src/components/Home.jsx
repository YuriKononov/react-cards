import React from 'react';
import Header from './header/header';
import Album from './Album';

function Home() {
  return (
    <>
      <Header />
      <Album limit={3} />
    </>

  );
}

export default Home;

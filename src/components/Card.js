import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Card = ({ user, age }) => {
  return (
    <div class="card">
      <Header />
      <Main user={user} age={age} />
      <Footer />
    </div>
  );
};

export default Card;
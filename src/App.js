import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Main name="정기" color="blue" />
        <Main name="정기2" color="red" />
      </Wrapper>

      <Footer address="safsda" />
    </div>
  );
}

export default App;

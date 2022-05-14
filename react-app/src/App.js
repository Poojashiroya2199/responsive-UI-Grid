import React from 'react';

import { Wrapper } from './app-style';
import Content from './Components/Content/Content';

function App() {
  return (
    <Wrapper>
      <Content content="He's not the sharpest knife in the drawer." />
      <Content content="The big building was blazing with lights." />
      <Content content="Now you must answer some big questions." />
      <Content content="Get your act together." />
    </Wrapper>
  );
}

export default App;

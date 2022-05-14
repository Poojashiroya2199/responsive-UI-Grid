import React from 'react';

import Content from './Components/Content/Content';

import { Wrapper } from './App-style';

function App() {
  const content = [
    "He's not the sharpest knife in the drawer.",
    "The big building was blazing with lights.",
    "Now you must answer some big questions.",
    "Get your act together.",
  ];

  return (
    <Wrapper>
      {
        content.map((title, index) => (
          <Content content={title} key={index} />
        ))
      }
    </Wrapper>
  );
}

export default App;

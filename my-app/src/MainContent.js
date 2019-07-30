import React from 'react';
import './MainContent.css';
import InstaGrid from './InstaGrid';

function MainContent() {
  return (
      <main>
        <InstaGrid account="jcooke1986" numberOfMediaElements={50} />
      </main>
  );
}

export default MainContent;

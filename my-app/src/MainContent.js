import React from 'react';
import './MainContent.css';
import InstaGrid from './InstaGrid';

function MainContent() {
  return (
      <main>
        <h1>
          Flower follower
        </h1>
        <p>I have recently discovered that I have a flair for nature photography.  My best pieces go up to my Intagram account but you can always find my latest twelve images here.  I wanted to combine my new passion for photography with my current passion for UI development, so welcome to my React app Instagram feed.</p>
        <InstaGrid account="jcooke1986" numberOfMediaElements={50} />
      </main>
  );
}

export default MainContent;

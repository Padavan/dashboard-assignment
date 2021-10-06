import React, { useState } from 'react';
import styles from './Page.module.css';
import { Content } from '../Content';

const views = {
  'collapsed': 0,
  'split': 1,
  'fullscreen': 2
};


export const Page = () => {
  const [view, setView] = useState(0);

  const moveLeft = () => {
    console.log('moveLeft');
  }

  const moveRight = () => {
    console.log('moveRight');
  }

  return (
    <div className={styles.container}>
      <div />
      <div className={styles.buttonControls}>
        <button onClick={() => changeView(-1)}>
          Left
        </button>
        <button onClick={moveRight}>
          Right
        </button>
      </div>
      <Content />
    </div>
  );
}
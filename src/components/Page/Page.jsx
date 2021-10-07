import React, { useState } from 'react';
import styles from './Page.module.css';
import { Content } from '../Content';
import { TableContainer } from '../TableContainer';

const views = ['collapsed', 'split', 'fullscreen'];

export const Page = () => {
  const [view, setView] = useState(0);

  const isMoveRightPossible = view < (views.length - 1);
  const isMoveLeftPossible = view > 0;

  const moveLeft = () => {
    if (!isMoveLeftPossible) {
      return;
    }
    const newView = view - 1;
    setView(newView);
  }

  const moveRight = () => {
    if (!isMoveRightPossible) {
      return;
    }
    const newView = view + 1;
    setView(newView);
  }

  return (
    <div className={styles.container}>
      <TableContainer view={views[view]} />
      <div className={styles.buttonControls}>
        {
          isMoveLeftPossible &&
          <button onClick={moveLeft}>
            ◀
          </button>
        }
        {
          isMoveRightPossible && <button onClick={moveRight}>
            ▶
          </button>
        }
      </div>
      <Content view={views[view]}/>
    </div>
  );
}
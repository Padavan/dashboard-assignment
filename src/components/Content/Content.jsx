import React from 'react';
import styles from './Content.module.css';
import classnames from 'classnames';

export const Content = ({ view }) => {

  return (
    <div className={classnames(view === 'fullscreen' && styles.collapsed, styles.container)}>
    {view === 'fullscreen' ? <p className={styles.vertical}>FULL SCREEN VIEW</p> :
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    }
    </div>
  );
}
import React from 'react';
import styles from './Header.module.css';
import { Nav } from '../Nav';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Nav />
        <div className={styles.searchBox}>
          <input placeholder="Search" />
        </div>
      </div>
    </header>
  );
}
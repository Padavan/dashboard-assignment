import React from 'react';
import styles from './Table.module.css';
import classnames from 'classnames';

const DATA_LENGTH = 36;

export const Table = ({ view }) => {
  return (
    <div className={classnames(styles.grid, view === 'split' && styles.split, view === 'fullscreen' && styles.fullscreen)}>
      <div className={styles.header}>
        <h3>Table</h3>
      </div>
      {[...Array(DATA_LENGTH).keys()].map((cell, index) => (
        <div className={classnames(styles.cell, index%6 > 2 && styles.additionalCells)} key={cell} />
      ))}
    </div>
  );
}
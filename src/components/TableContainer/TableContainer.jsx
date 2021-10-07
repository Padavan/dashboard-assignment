import React from 'react';
import styles from './TableContainer.module.css';
import classnames from 'classnames';
import { Table } from '../Table';

export const TableContainer = ({ view }) => {
  return (
    <div className={classnames(view === 'collapsed' && styles.collapsed, styles.container)}>
      {view === 'collapsed'
        ? <p className={styles.vertical}>COLLAPSED VIEW</p>
        : <Table view={view} />
      }
    </div>
  );
}
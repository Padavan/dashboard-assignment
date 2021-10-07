import React from 'react';
import "./style.css";
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sections } from './components/Sections';
import { Page } from './components/Page';

export const App = () => (
  <div className={styles.container}>
    <Header />
    <Sections />
    <Page />
  </div>
);

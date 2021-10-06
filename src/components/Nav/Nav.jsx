import React from 'react';
import styles from "./Nav.module.css";

const routes = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"];

export const Nav = () => {
  return (
    <nav className={styles.container}>
      {routes.map(route => (
        <a href="#" key={route} className={styles.topicLink}>{route}</a>
      ))}      
    </nav>
  );
}
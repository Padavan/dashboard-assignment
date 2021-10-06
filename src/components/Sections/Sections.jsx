import React from 'react';
import styles from './Sections.module.css';

const sectionList = [
  "Section 1",
  "Section 2",
  "Section 3",
  "Section 4"
];

export const Sections = () => {
  return (
    <div className={styles.container}>
      {sectionList.map(section => (
        <a href="#" key={section} className={styles.sectionLink}>
          {section}
        </a>
      ))}
    </div>
  );
}
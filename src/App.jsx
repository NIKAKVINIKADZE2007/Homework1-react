import React from 'react';
import Header from './Header/Header';
import Card from './Card/Card';
import data from './data';
import styles from './App.module.scss';
function App() {
  return (
    <div className={styles.pageContent}>
      <Header />
      <Card data={data} />
    </div>
  );
}

export default App;

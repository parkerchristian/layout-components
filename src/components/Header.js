import React from 'react';
import logo from '../assets/logo.jpg';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    height: '4em',
  };

  return (
    <header style={styles}>
      <img src={logo} style={{ height: '100%' }}/>
      <h1 style={{ margin: 0, color: 'red' }}>My Dog</h1>
    </header>
  );
}

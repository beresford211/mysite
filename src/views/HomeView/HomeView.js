/* @flow */
import React from 'react';
import NavBar from './../../components/navbar';
import Header from './../../components/header';

export class HomeView extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <NavBar/>
        <h1>Footer</h1>
      </div>
    )
  }
}

export default HomeView

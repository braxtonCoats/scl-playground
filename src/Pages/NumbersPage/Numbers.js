import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import { H1 } from '@bandwidth/shared-components';
import NumbersSubNav from '/Users/braxtoncoats/scl/src/Components/NumbersSubNav.js';
import DragList from '/Users/braxtoncoats/scl/src/Components/DragListFruits.js';
//import Modal from './Modal';
//import '../Styles/orderStyle.css';

const Numbers = () => {
  return (
    <div>
    <NumbersSubNav />
      <H1>My Numbers</H1>
      My Numbers content goes here.
      <DragList />
    </div>
  )
}

//const Dashboard = AnimatedWrapper(Dashboard);
export default Numbers;

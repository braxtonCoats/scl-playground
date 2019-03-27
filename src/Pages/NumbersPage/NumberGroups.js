import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import { H1 } from '@bandwidth/shared-components';
import NumbersSubNav from '/Users/braxtoncoats/scl/src/Components/NumbersSubNav.js';
///Users/braxtoncoats/scl/src/Components/NumbersSubNav.js
//import Modal from './Modal';
//import '../Styles/orderStyle.css';

const NumberGroups = () => {
  return (
    <div>
    <NumbersSubNav />
      <H1>Number Groups</H1>
      Number Group content goes here
    </div>
  )
}

//const Dashboard = AnimatedWrapper(Dashboard);
export default NumberGroups;

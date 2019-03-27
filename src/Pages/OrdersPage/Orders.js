import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import { H1,Button,Modal } from '@bandwidth/shared-components';
//import DragListFuits from "/Users/braxtoncoats/scl/src/Components/DragList.js"
//import Modal from './Modal';
//import '../Styles/orderStyle.css';
//const React = require('react');

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    const toggle = () => this.setState({ show: !this.state.show });
    return (
      <div style={{ padding: "2em 20px" }}>
        <Button onClick={toggle}>show modal</Button>
        {this.state.show && (

          <Modal
            title="Custom buttons"
            onClose={toggle}
            actionContent={<Button onClick={toggle}>OK</Button>}>
            <div style={{ fontSize: "42px" }}>
              Hello, here's some modal content. 
              <Button>Hello</Button>
            </div>
          </Modal>

        )}
      </div>
    );
  }
}

//<ModalShow />;
//const Dashboard = AnimatedWrapper(Dashboard);
export default Orders;

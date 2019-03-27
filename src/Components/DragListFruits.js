import React, { Component } from 'react';
import { Navigation } from '@bandwidth/shared-components';
import { Loader } from '@bandwidth/shared-components';
import { Link,Input,DragList } from '@bandwidth/shared-components';
import { NavLink } from 'react-router-dom';

class DragListFruit extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     items: [
       "Apple",
       "Banana",
       "Lemon",
       "Watermelon"
     ]
   }
 }


 // This function merely swaps the order of the two items in the list.
 onMove(from, to) {
   this.setState(state => {
     const removed = state.items.splice(from, 1);
     state.items.splice(to, 0, removed[0]);
     return state;
   })
 }

 render() {
   return (
     <div className="DragList">
     <DragList>
       {this.state.items.map((item, index) =>
         <DragList.Item itemType="fruit" key={index} onMove={this.onMove.bind(this)}>
           <DragList.Container><Input placeholder={item} /></DragList.Container>
         </DragList.Item>
       )}
     </DragList>
     </div>
   );
 }
}


// <div style={{width: '500px'}}><DragList /></div>
export default DragListFruit;

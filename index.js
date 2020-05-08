import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import React, { useState } from 'react';


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const[check,setcheck]=useState(0);
   let [hello,sethello]=useState(0);
  


  return (
    <div>
      <p>You clicked {count} {hello} times</p>
      <h5> This is my name {hello}</h5>    <h2> Anotther Person {hello}</h2>
      <h2> Hello                                                     {check}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={()=>setcheck(check +5)}>
      This is a example of another counter
      </button>
      <button onClick={()=>counter()}> Another example
      </button>
    </div>
  );
}

function counter()
{
var count=5;
return count;

}
class classic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countcheck: 0
    };
  }

  render() {
    return (
      <div>
        <h5>You clicked {this.state.countcheck} times</h5>
        <button onClick={() => this.setState({ countcheck: this.state.countcheck + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
render(<Example />, document.getElementById('root'));
export default classic

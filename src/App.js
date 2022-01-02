import './App.css';
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Component from 'react';
class App extends Component{
  render(){
    return (
      <React.Fragment>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant='outline-secondary'>X</Button>
        </InputGroup.Prepend>
        <FormControl aria-aria-describedby='basic-addon1'/>
      </InputGroup>
      </React.Fragment>
    );
  }
}
export default App;
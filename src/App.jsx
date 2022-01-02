import logo from './logo.svg';
import './App.css';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

function App() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button variant='outline-secondary'>X</Button>
      </InputGroup.Prepend>
      <FormControl aria-aria-describedby='basic-addon1'/>
    </InputGroup>
    );
}
export default App;
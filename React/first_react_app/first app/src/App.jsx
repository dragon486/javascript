import Button from './button';
import './App.css';
import Image from './assets/react.svg';

function App(){
  return(
    <div>
      <h1>Hello World</h1>
      <p>Welcome to my React app!</p>
      <br />
      <br />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <br/>
      <br/>
      <img src={Image} alt="React Logo" />
    </div>
    
  )
}
export default App;
import './App.css';
import {Message} from "./components/Message";

function App() {

  const greetings = 'Hello World!';

  return (
    <>
      <Message text={greetings}/>
    </>
  );
}

export default App;
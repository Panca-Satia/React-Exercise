import { useState } from 'react';
import Header from './components/header.jsx';


function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header />
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default App;
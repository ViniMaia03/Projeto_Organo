import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {

  const [heroi, setHeroi] = useState([])
  const aoNovoHeroiAdd = (superheroi) => {
    setHeroi([...heroi, superheroi])
  }

  return (
    <>
      <Header />
      <Formulario aoSuperHeroiCadastrado={superheroi => aoNovoHeroiAdd(superheroi)} />
    </>
  );
}

export default App;

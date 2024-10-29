import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Vingadores',
      corPrimaria: '#57C278',
      corSecundaria:'#D9F7E9',
      imagem: '/imagens/avengers.webp'
    },
    {
      nome: 'Guardiões da Galáxia',
      corPrimaria: '#E06B69',
      corSecundaria:'#FDE7E8',
      imagem: '/imagens/guardians.webp'
    },
    {
      nome: 'X-Men',
      corPrimaria: '#A6D157',
      corSecundaria:'#F0F8E2',
      imagem: '/imagens/x-man.png'
    },
    {
      nome: 'Quarteto Fantástico',
      corPrimaria: '#82CFFA',
      corSecundaria:'#E8F8FF',
      imagem: '/imagens/fantastic.png'
    },
    {
      nome: 'Eternos',
      corPrimaria: '#FFBA05',
      corSecundaria:'#FFF5D9',
      imagem: '/imagens/eternals.webp'
    },
    {
      nome: 'Thunderbolts',
      corPrimaria: '#D86EBF',
      corSecundaria:'#EAE9F5',
      imagem: '/imagens/thunderbolts.png'
    },
    {
      nome: 'Defensores',
      corPrimaria: '#FF8A29',
      corSecundaria:'#FFEEDF',
      imagem: '/imagens/defenders.webp'
    }
  ]

  const [heroi, setHeroi] = useState([])
  const aoNovoHeroiAdd = (superheroi) => {
    setHeroi([...heroi, superheroi])
  }

  return (
    <>
      <Header />
      <Formulario times={times.map(time => time.nome)} aoSuperHeroiCadastrado={superheroi => aoNovoHeroiAdd(superheroi)} />
      {times.map(time => <Time key={time.nome} imagem={time.imagem} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} heroi={heroi.filter(heroi => heroi.time === time.nome)} />)}
      <Rodape />
    </>
  );
}

export default App;

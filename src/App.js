import Banner from './components/Banner';
import Input from './components/Input';

function App() {
  return (
    <>
      <Banner />
      <h1> Olá, mundo! </h1>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Input label="E-mail" placeholder="Digite seu e-mail" />
      <Input label="Imagem" placeholder="Digite o endereço de imagem" />
    </>
  );
}

export default App;

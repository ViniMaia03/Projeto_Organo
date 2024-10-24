import Input from '../Input'
import './Formulario.css'

export default function Formulario() {
    return (
        <>
            <section className="formulario">
                <form>
                    <h2> Preencha os dados para criar o card do super-herói: </h2>

                    <Input label="Nome" placeholder="Digite seu nome" />
                    <Input label="Poder" placeholder="Digite seu poder" />
                    <Input label="Imagem" placeholder="Digite o endereço de imagem" />
                </form>
            </section>
        </>
    )
}
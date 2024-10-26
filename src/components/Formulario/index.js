import Botao from '../Botao'
import Input from '../Input'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export default function Formulario() {

    const times = [
        'Vingadores',
        'Guardiões da Galáxia',
        'X-Men',
        'Quarteto Fantástico',
        'Super-Heroínas',
        'Vilões',
        'Eternos'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
        <>
            <section className="formulario">
                <form id='cadastro' onSubmit={aoSalvar}>
                    <h2> Preencha os dados para criar o card do super-herói: </h2>

                    <Input obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                    <Input obrigatorio={true} label="Poder" placeholder="Digite seu poder" />
                    <Input obrigatorio={true} label="Imagem" placeholder="https/" />
                    <ListaSuspensa label="Times" itens={times} />
                    <Botao> Criar card </Botao>
                </form>
            </section>
        </>
    )
}
import { useState } from 'react'
import Botao from '../Botao'
import Input from '../Input'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export default function Formulario(props) {

    const times = [
        'Selecione seu time',
        'Vingadores',
        'Guardiões da Galáxia',
        'X-Men',
        'Quarteto Fantástico',
        'Super-Heroínas',
        'Vilões',
        'Eternos'
    ]

    const [nome, setNome] = useState('')
    const [poder, setPoder] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoSuperHeroiCadastrado({
            nome,
            poder,
            imagem,
            time
        })
    }

    return (
        <>
            <section className="formulario">
                <form id='cadastro' onSubmit={aoSalvar}>
                    <h2> Preencha os dados para criar o card do super-herói: </h2>

                    <Input obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                    <Input obrigatorio={true} label="Poder" placeholder="Digite seu poder" valor={poder} aoAlterado={valor => setPoder(valor)} />
                    <Input obrigatorio={true} label="Imagem" placeholder="https/" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                    <ListaSuspensa label="Times" itens={times} valor={time} aoAlterado={valor => setTime(valor)} />
                    <Botao> Criar card </Botao>
                </form>
            </section>
        </>
    )
}
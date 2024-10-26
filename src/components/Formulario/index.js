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

    return (
        <>
            <section className="formulario">
                <form id='cadastro'>
                    <h2> Preencha os dados para criar o card do super-herói: </h2>

                    <Input label="Nome" placeholder="Digite seu nome" />
                    <Input label="Poder" placeholder="Digite seu poder" />
                    <Input label="Imagem" placeholder="Digite o endereço de imagem" />
                    <ListaSuspensa label="Times" itens={times} />
                </form>
            </section>
        </>
    )
}
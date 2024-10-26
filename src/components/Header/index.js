import ItemNav from '../ItemNav'
import './Header.css'

export default function Header() {
    return (
        <>
            <header className='cabecalho'>
                <img src="/imagens/Marvel-Studios-logo.png" alt="Logo da Marvel" className="img-header" />

                <nav className='navegacao'>
                    <ItemNav li="Cadastrar Herói" href='#cadastro' />
                    <ItemNav li="Times" href='#' />
                </nav>
            </header>
        </>
    )
}
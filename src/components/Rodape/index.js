import './Rodape.css'

export default function Rodape() {
    return (
        <>
            <footer className='rodape'>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/viniciusmaia03/'> <img src='/imagens/lkn.png' alt='Logo do LinkedIn' /> </a>
                    <a href='https://www.instagram.com/vinimaia_s/'> <img src='/imagens/instagram.png' alt='Logo do instagram' /> </a>
                    <a href='https://github.com/ViniMaia03'> <img src='/imagens/github.png' alt='Logo do Github' /> </a>
                </div>
                <p> Desenvolvido por Vinicius Maia &copy; | Projeto fictíco sem fins lucrativos. </p>
            </footer>
        </>
    )
}
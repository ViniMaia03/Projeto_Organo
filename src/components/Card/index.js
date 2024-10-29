import './Card.css'

export default function Card({nome, poder, imagem, corPrimaria}) {
    return(
        <>
            <div className='card'>
                <div className='cabecalho'>
                    <img src={imagem} alt={nome} />
                </div>

                <div className='rodape'>
                    <h4> {nome} </h4>
                    <p> {poder} </p>
                </div>
            </div>
        </>
    )
}
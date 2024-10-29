import Card from '../Card'
import './Time.css'

export default function Time(props) {
    return(
        (props.heroi.length > 0) ? 
        <section className='time' id='times' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ color: props.corPrimaria}}> <img src={props.imagem} alt={props.alt} /> </h3>
            <div className='heroi'>
                {props.heroi.map(heroi => <Card nome={heroi.nome} poder={heroi.poder} imagem={heroi.imagem} /> )}
            </div>
        </section>
        : ''
    )
}
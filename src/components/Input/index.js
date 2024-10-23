import './Input.css'

export default function Input() {
    return(
        <>
            <div className="campo-texto">
                <label> Nome </label>
                <input placeholder="Digite o seu nome" />
            </div>
        </>
    )
}
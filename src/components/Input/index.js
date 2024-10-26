import './Input.css'

export default function Input(props) {
    return(
        <>
            <div className="campo-texto">
                <label> {props.label} </label>
                <input required={props.obrigatorio} placeholder={props.placeholder} />
            </div>
        </>
    )
}
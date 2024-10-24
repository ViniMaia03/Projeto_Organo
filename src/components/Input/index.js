import './Input.css'

export default function Input(props) {
    return(
        <>
            <div className="campo-texto">
                <label> {props.label} </label>
                <input placeholder={props.placeholder} />
            </div>
        </>
    )
}
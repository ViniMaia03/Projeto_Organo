import './ListaSuspensa.css'

export default function ListaSuspensa(props) {
    return(
        <>
            <div className="listaSuspensa">
                <label> {props.label} </label>
                <select>
                    {props.itens.map(item => <option key={item}> {item} </option>)}
                </select>
            </div>
        </>
    )
}
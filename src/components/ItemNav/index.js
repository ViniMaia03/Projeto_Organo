import './ItemNav.css'

export default function ItemNav(props) {
    return (
        <>
            <ul>
                <li className='item-nav'> <a href={props.href}> {props.li} </a> </li>
            </ul>
        </>
    )
}
import '../style/itemListe.css'
import { BsTrash } from 'react-icons/bs'


function ItemListe(props) {
    return (
        //on récupère les props id et name qu'on va utiliser pour notre affichage
        <li id={props.id} className='ligneItem'>
            <input type="checkbox"/>
            <div className='divItem'>{props.itemName}</div>
            <button onClick={() => props.delFunc(props.id)} 
            className="btn btn-danger p-2 h-50"><BsTrash/></button>
            </li>

    )
}

export default ItemListe
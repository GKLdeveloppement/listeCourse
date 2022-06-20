import '../style/itemListe.css'
import { BsTrash } from 'react-icons/bs'


function ItemListe(props) {
    return (
        //on récupère les props id et name qu'on va utiliser pour notre affichage
        <li id={props.id} className='ligneItem'>
            <input type="checkbox"/>
            <div className='divItem'>{props.itemName}</div>
            
            {/* ici lorsque l'on va cliquer sur le bouton, notre fonction va permettre de récupérer l'ID de l'element */}
            {/* nb : on fait appelle à une fonction anonyme (flechée) pour ne pas que la fonction soit lancé lors du chargement de la page mais bien au click du bouton. */}
            <button onClick={() => props.delFunc(props.id)} 
            className="btn btn-danger p-2 h-50"><BsTrash/></button>
            </li>

    )
}

export default ItemListe
import '../style/itemListe.css'

function ItemListe(props) {
    return (
        //on récupère les props id et name qu'on va utiliser pour notre affichage
        <li id={props.id}>
            <div className='divItem'>{props.itemName}</div>
        </li>
        
    )
}

export default ItemListe
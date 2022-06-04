function ItemListe(props) {

    // console.log(item);
    return (
        <li id={props.id}>
            <div>{props.itemName}</div>
        </li>
    )
}

export default ItemListe
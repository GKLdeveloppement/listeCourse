import React, { useState } from 'react'
import ItemListe from './ItemListe';
import '../style/formulaireListe.css'

function Liste() {

    const [nbItem, setNbItem] = useState(0)

    const [itemName, setItemName] = useState('')

    const [itemListe, setItemListe] = useState([{}])


    function handleButton() {
        setNbItem(nbItem +1)
    }

    function changeName(e) {
        setItemName(e)
    }

    function addItem(e) {
        e.preventDefault()

        //on récupère le tableau de base dans un nouveau tableau qu'on enverra à ItemListe pour créer les éléments
        let newListItem = [...itemListe]

        //On instancie notre nouvel élément avec un nom et un id
        const newItem = {}
        newItem.elem = itemName
        newItem.id = nbItem
        //
        
        // alert(newItem.elem);

        //On ajoute ce nouvelle élément à notre tableau
        newListItem.push(newItem)

        //on met à jour notre state qui contient les items
        setItemListe(newListItem)

        //On remet le champ vide pour prochain ajout
        setItemName('')
    }


    return(
        <div className='appMainBg'>
            <h1>Bienvenue sur TA liste de course</h1>
            <h3>De quels aliments as-tu besoin ?</h3>
            <form onSubmit={addItem}>
                {/* On récupère le contenu du champ pour mettre à jour le state */}
                <input className='inputItem' value={itemName} type="text" onInput={e => changeName(e.target.value)}/>
                <br />
                <button className='addBtn' type='submit' onClick={handleButton}>AJOUTER</button>
            </form>

            <ul className='itemContainer'>
                {/* On va parcourir le tableau d'item et pour chaque iterration on ajoutera un élément dans la liste des courses en passant en props le nom et l'id de notre element */}
                {/* le filter boolean permet de ne rien afficher si l'item est vide cela pour fixer le bug d'affichage de li alors qu'aucun item n'est présent encore */}
                {itemListe.filter(Boolean).map((item) => {
                    return(
                        <ItemListe  itemName={item.elem} id={item.id} />
                    )

                })}
            </ul>

        </div>
    )
}

export default Liste
import CareScale from "./CareScale";
import '../styles/PlantItem.css'

function handleClick(plantName){
    // console.log('🤏 Ceci est mon event :', e)
     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱`)
 }

function PlantItem({ id, cover, name, water, light, price }){
    return(
        <li className='ljm-plant-item' onClick={handleClick}>    
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className='ljm-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}



export default PlantItem
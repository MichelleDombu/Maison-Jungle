import { useState } from 'react'
import '../styles/Footer.css'

function Footer(){
    //eslint-disable-next-line
    const [inputValue, setInputValue] = useState('')
   
    function handleInput(e){
        setInputValue(e.target.value)
    }

    function handleBlur(){
        if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
    }
    return (
        <footer className='ljm-footer'>
            <div className='ljm-footer-elem'>
                Pour les passionné.e.s de plantes 🌱🌵🌿
            </div>
            <div className='ljm-footer-elem'>Laissez-nous votre email :
            <input
                    placeholder='Entrez votre mail'
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur}
            />
            </div>
        </footer>
    )
}



export default Footer
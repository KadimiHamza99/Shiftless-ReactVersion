import React, { useState } from 'react';
import '../Styles/FetchButton.css'
import Loader from './Loader';

const FetchButton = (props) => {

    const [clicked,setClicked] = useState(false)
    const [hide,setHide] = useState(false)

    const scrapingMethod = () => {
        setClicked(true)
        fetch("http://localhost:8080/JavaProject/webapi/admin/scraping")
        .then((response)=>response.json())
        .then((result) => props.handleFetch(result))
        .catch(setHide(false))
    }

    return (
        <div>
            {hide ? <span/> : <button className='button' onClick={scrapingMethod}>HACKING BUTTON !</button>}
            {clicked ? <Loader/> : <span/>}
        </div>
    )
}

export default FetchButton;
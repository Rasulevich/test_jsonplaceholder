import React from "react";
import './search.css';
import img from '../img/search.com.png';

export const Search = ({value,setValue}) => {
    
    return (
        <div className="main">
            <div className="main_search">
               <img src={img} className="icon"/> 
                <form>
                    <input
                        type="text"
                        placeholder="Search author"
                        className="search_input"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}>
                    </input>
                </form>
            </div>
        </div>
    )
}
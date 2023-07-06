import {useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        try{
            if (event.key === 'Enter') {
                navigate("/" + searchValue)
            }
        }
        catch{
            console.log("A")
        }
    };
    
    return(
        <input 
        className="sticky" 
        type="text"
        placeholder="Search for Pokemon"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
    />
    )
}
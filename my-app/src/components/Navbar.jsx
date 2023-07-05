import './Navbar.css'
import {Link} from 'react-router-dom'
import Search from './Search'

export default function Navbar() {

    
    return(
        <div className="navbar-container">
            <Link to={'/'} className="pokemon-title">Pokèdex</Link>
            <Search/>
        </div>
    )
}
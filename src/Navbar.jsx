import './navbar.css';

export default function Navbar(){
    return(
        <div className="navbar-section">
            <div className="navbar-container">
                <img src="/burger-menu.png" alt="" className="menu-burger" />
                <img src="/lb-logo.png" alt="" className="logo" />
                <p className="close">Fermer</p>
            </div>
        </div>
    )
}
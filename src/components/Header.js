import logo from "../images/Troll Face.png"
function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Meme Logo" className="header-image" />
            <h3 className="header-title">MEME GENERATOR</h3>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )
}

export default Header
export default function Header() {
    return (
        <header className="header">
        <nav className="socials-bar">
            <a href="">
                <img src="/icons/icon-github.svg" className="icon" title="GitHub"></img>
            </a>
            <a href="">
                <img src="/icons/icon-mail.svg" className="icon" title="Mail"></img>
            </a>
            <a href="">
                <img src="/icons/icon-linkedin.svg" className="icon" title="LinkedIn"></img>
            </a>
        </nav>
        <nav className="navigation-bar">
            <ul className="links">
                <li className="item active">
                    <a href="#home-section" className="link">Accueil</a>
                </li>
                <li className="item">
                    <a href="#about-section" className="link">A propos</a>
                </li>
                <li className="item">
                    <a href="#portfolio-section" className="link">Portfolio</a>
                </li>
                <li className="item">
                    <a href="#contacts-section" className="link">Contacts</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}
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
            <ul class="links">
                <li class="item active">
                    <a href="#home-section" class="link">Accueil</a>
                </li>
                <li class="item">
                    <a href="#about-section" class="link">A propos</a>
                </li>
                <li class="item">
                    <a href="#portfolio-section" class="link">Portfolio</a>
                </li>
                <li class="item">
                    <a href="#contacts-section" class="link">Contacts</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}
import Head from "next/head"

export default function Layout({ children, page }) {
    return (
        <div className="content">
            <Head>
                <title>{page}</title>
            </Head>
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

                </nav>
            </header>
            {children}
        </div>
    )
}
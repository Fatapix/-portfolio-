import Head from "next/head"

export default function Layout({ children, page }) {
    return (
        <div className="content">
            <Head>
                <title>{page}</title>
            </Head>
            <header className="header">
                <nav className="socials-bars">

                </nav>
                <nav className="navigation-bar">
                    
                </nav>
            </header>
            {children}
        </div>
    )
}
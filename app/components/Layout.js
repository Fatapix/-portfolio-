import Head from 'next/head';
import Header from '../components/Header'

export default function Layout({ children, page }) {
    return (
        <div className="content">
            <Head>
                <title>{page}</title>
            </Head>
            <Header></Header>
            {/* // header */}
            {children}
        </div>
    )
}
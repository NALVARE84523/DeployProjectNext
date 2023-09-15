import Navbar from "../components/Navbar"
import "./globals.css"

export const metadata = {
    title: 'Mis Post con Next.js',
    description: 'Prueba Técnica para Auco.ai',
    authors: [{first_name: 'Diego Fernando'}, {last_name: 'Méndez Vargas'}],
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
            {children}
            </body>
        </html>
    )
}
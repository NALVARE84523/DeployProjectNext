import Link from "next/link"

export default function Navbar() {
    return ( 
        
        <nav className="flex bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210115/pngtree-vector-dark-blue-geometric-cascading-background-image_520707.jpg')] text-white justify-between py-6 px-32 items-center text-xl mb-3">
            <h1 className="text 3xl font-bold">Mis Posts</h1>
            <ul className="flex gap-8">
                <li className="hover:underline">
                    <Link href="/posts">Posts</Link>
                </li>
                <li className="hover:underline">
                    <Link href="/developer">Sobre mi</Link>
                </li>
            </ul>
        </nav>
    )
 }
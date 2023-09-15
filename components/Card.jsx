"use client"
import Link from 'next/link'
import "./Card.css"

function Card({ post }) {
    return (
        <div className="bg-[url('https://img.freepik.com/fotos-premium/fondo-blanco-abstracto-lineas-onduladas-suaves-su-proyecto_476363-6150.jpg')] bg-no-repeat bg-cover p-10 rounded-lg">
            <h2 className='text-xl font-bold mb-4'>{post.id}. {post.title}</h2>
            <p className='text-black mb-3 text-justify'>{post.body}</p>
            <div className='flex items-end'>
                <Link href={`/posts/${post.id}/comments`}>
                    <button className='buton'>Comentarios</button>
                </Link>
            </div>  
        </div>
    );
}

export default Card
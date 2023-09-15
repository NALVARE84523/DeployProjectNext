import Link from "next/link"

async function loadComments(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await res.json();
    console.log(data)
    return data; 
}

async function page({params}) {
    const post = await loadComments(params.id)
    return (
        <div>
            <Link className="mx-32 bg-gray-600 hover:bg-white hover:text-gray-600 hover:border-2 hover:border-gray-600 text-white font-bold py-2 px-4 rounded-full" href="/posts">Atrás</Link>
            {post.map((pos) => (
                <div className="bg-[url('https://img.freepik.com/fotos-premium/fondo-blanco-abstracto-lineas-onduladas-suaves-su-proyecto_476363-6150.jpg')] bg-no-repeat bg-cover p-10 rounded-lg mx-64 my-8">
                    <p className='text-black mb-3 text-justify'><b>Name:</b> {pos.name}</p>
                    <p className='text-black mb-3 text-justify'><b>Email:</b>: {pos.email}</p>
                    <p className='text-black mb-3 text-justify'><b>Body:</b>: {pos.body}</p>
                </div> 
            ))}
        </div>
    )
}

export default page
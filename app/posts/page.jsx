import Card from '../../components/Card'

export const metadata = {
    title: 'Post',
  }

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
} 

async function Posts() {
    const posts = await loadPosts();
    // console.log(posts);

    return (
        <div className='grid grid-cols-3 gap-4 mx-4 my-0'>
            {posts.map((post) => (
                <Card post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default Posts
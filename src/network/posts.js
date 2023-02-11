const URL = "https://jsonplaceholder.typicode.com/posts"

export async function getPosts(page) {
    const res = await fetch(`${URL}/?_start=${page * 5}&_limit=5`);
    return res.json();
}

export async function addPost(post) {
    const res = await fetch(URL,{
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

export async function updatePost(post) {
    const res = await fetch(`${URL}/${post.id}`,{
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}
const URL = "https://jsonplaceholder.typicode.com/posts"

export async function getPosts() {
    const res = await fetch(`${URL}/?_start=0&_limit=5`);
    return res.json();
}
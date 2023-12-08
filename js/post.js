console.log(location.search)
let queryString = location.search
let searchParam = new URLSearchParams(queryString)
console.log(searchParam)
let postId = searchParam.get('id')
console.log(postId)

async function getBlogpost(){
    try {
        let resp = await fetch('https://blog-api-assignment.up.railway.app/posts/' + postId)
        let post = await resp.json()
        console.log(post)

        document.getElementById('post').innerHTML = `
            <a href="index.html" id="back-to-posts">Back to posts</a> 
            <h2>${post.title}</h2>
            <p> Author: ${post.author} | <i>${post.date}</i></p>
            <p>${post.content}</p>
            <p>Tags: ${post.tags}</p>
        `
        
    } catch(error) {
        console.log(error)
    }
}

getBlogpost()
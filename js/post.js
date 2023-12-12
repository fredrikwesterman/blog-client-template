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
        let postDate = new Date(post.date)

        document.getElementById('post').innerHTML = ` 
            <li id="post-card-single" class="post-card">
                <h2>${post.title}</h2>
                <p>Author: ${post.author} | <i>${postDate.getFullYear()}-${postDate.getMonth()+1}-${postDate.getDate()}, ${postDate.toLocaleTimeString()}</i></p>
                <p>${post.content}</p>
                <p>Tags: ${post.tags}</p>
            </li>
        `
        
    } catch(error) {
        console.log(error)
    }
}

getBlogpost()
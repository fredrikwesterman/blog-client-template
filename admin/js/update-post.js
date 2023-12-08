let searchParam = new URLSearchParams(location.search)
console.log(searchParam)
let postId = searchParam.get('data-id')
console.log(postId)

getPost()

document.getElementById('form').addEventListener('submit', updatePost)


async function getPost(){
    try{
        let resp = await fetch('https://blog-api-assignment.up.railway.app/posts/' + postId)
        let post = await resp.json()
        console.log(post)

        document.getElementById('post-title').value = post.title
        document.getElementById('post-content').value = post.content
        document.getElementById('post-author').value = post.author
        document.getElementById('post-tags').value = post.tags
    } catch(error){
        console.log('Error: ' + error)
    }
}

async function updatePost(e){
    e.preventDefault()
    
    try{

        let formData = new FormData(e.target)
        let data = {
            "content": formData.get("content"),
            "title": formData.get("title"),
            "author": formData.get("author"),
            "tags": formData.getAll("tags")
        }

        await fetch('https://blog-api-assignment.up.railway.app/posts/' + postId,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        location.replace("index.html")

    } catch(error){
        console.log('Error: ' + error)
    }
}
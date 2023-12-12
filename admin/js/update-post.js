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
        
        const tagCollection = document.getElementById('tags');
        console.log(tagCollection)
        const postTags = post.tags.join(', ')
        console.log(postTags)

        for (let i = 0; i < tagCollection.options.length; i++) {
            let optionValue = tagCollection.options[i].value;

            if(postTags.includes(optionValue)) {
            tagCollection.options[i].selected = true;
            }
        }

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
            "tags": formData.getAll("tags").join(', ')
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
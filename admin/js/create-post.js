document.getElementById('form').addEventListener('submit', createPost)

async function createPost(e){
    try{
        e.preventDefault()

        let formData = new FormData(e.target)
        console.log(formData)
        console.log(formData.get('id'))
        let data = {"content": formData.get('content'),
                    "title": formData.get('title'),
                    "author": formData.get('author'),
                    "tags": formData.get('tags')}
        console.log(data)
        
        await fetch('https://blog-api-assignment.up.railway.app/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    
        location.replace("index.html")

    }catch(error){
        console.log('Error: ' + error)
    }
}
fetchAllPosts()
async function fetchAllPosts(){
    try{
        let resp = await fetch('https://blog-api-assignment.up.railway.app/posts')

        let posts = await resp.json()
        console.log(posts)


        let postListTable = ''
        for(let post of posts){
            
            postListTable += `
            <tr>
                    <td>${post.title}</td>
                    <td>${post.author}</td>
                    <td>${post.date}</td>
                    <td>${post.tags}</td>
                    <td>
                        <a href="" id="update-post">Update</a><br>
                        <a href="" id="delete-post">Delete</a>
                    </td>
                </tr>
            `
        }

        document.querySelector('tbody').innerHTML = postListTable

    } catch(error){
        console.log(error)
    }
}
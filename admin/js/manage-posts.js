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
                        <a href="" class="update-post">Update</a><br>
                        <a href="" class="delete-post">Delete</a>
                    </td>
                </tr>
            `
        }

        document.querySelector('tbody').innerHTML = postListTable

        let deleteBtns = document.getElementsByClassName("delete-post")
        console.log(deleteBtns)

        for(let btn of deleteBtns){
            btn.addEventListener('click', async function(e){
                e.preventDefault()
                console.log("tjena du har tryckt!")
                await fetch('https://blog-api-assignment.up.railway.app/posts/' + e.target.dataset.id, {
                    method: "DELETE"
                })

                e.target.parentNode.parentNode.remove()
            })
        }

    } catch(error){
        console.log(error)
    }
}
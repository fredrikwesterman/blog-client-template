fetchAllPosts()

async function fetchAllPosts(){
    try{
        let resp = await fetch('https://blog-api-assignment.up.railway.app/posts')

        let posts = await resp.json()
        console.log(posts)

        let postListTable = ''
        for(let post of posts){
            let postDate = new Date(post.date)
            
            postListTable += `
            <tr>
                    <td>${post.title}</td>
                    <td class="table-author">${post.author}</td>
                    <td>${postDate.getFullYear()}-${postDate.getMonth()+1}-${postDate.getDate()}, ${postDate.toLocaleTimeString()}</td>
                    <td class="table-tags">${post.tags}</td>
                    <td>
                        <a href="update-post.html?data-id=${post._id}" class="update-post">Update</a><br>
                        <a href="" class="delete-post" data-id=${post._id}>Delete</a>
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
                let resp = await fetch('https://blog-api-assignment.up.railway.app/posts/' + e.target.dataset.id, {
                    method: "DELETE"
                })
                console.log(resp)
                e.target.parentNode.parentNode.remove()
            })
        }

    } catch(error){
        console.log(error)
    }
}
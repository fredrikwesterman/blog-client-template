fetchAllPosts()

async function fetchAllPosts(){
    try{
        let resp = await fetch('https://blog-api-assignment.up.railway.app/posts')

        
        let posts = await resp.json()
        console.log(posts)


        let postListHtml = ''
        for(let post of posts){
            let postDate = new Date(post.date) 

            postListHtml += `
            <li class="post-card">
                <h2>${post.title}</h2>
                <p>${post.author} | <i>${postDate.getFullYear()}-${postDate.getMonth()+1}-${postDate.getDate()}, ${postDate.toLocaleTimeString()}</i></p>
                <p>${post.content.slice(0, 100)}... <a href="post.html?id=${post._id}" class="read-more">Read More</a></p> 
                <p>Tags: ${post.tags}</p>
            </li>`
        }

        document.getElementById('blog-list').innerHTML = postListHtml

    } catch(error){
        console.log(error)
    }
}
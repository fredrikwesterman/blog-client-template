fetchAllPosts()

async function fetchAllPosts(){
    try{
        let resp = await fetch('https://blog-api-assignment.up.railway.app/posts')

        
        let posts = await resp.json()
        console.log(posts)


        let postListHtml = ''
        for(let post of posts){
            postListHtml += `
            <h2>${post.title}</h2>
            <p>${post.author} | <i>${post.date}</i></p>
            <p>${post.content.slice(0, 100)}... <a href="post.html?id=${post._id}" id="read-more">Read More</a> </p> 
            <p>Tags: ${post.tags}</p>
            <hr>`
        }

        document.getElementById('blog-list').innerHTML = postListHtml

    } catch(error){
        console.log(error)
    }
}
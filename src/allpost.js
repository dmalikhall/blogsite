
const url = 'https://fixed-blog-api-project.herokuapp.com/blogs';
const allPostsContent = document.querySelector('.all-posts_content')

const fetchAllPosts = async () => {
    try {
        allPostsContent.innerHTML = `<span class="loader"></span>`
        const response = await fetch(url);
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error);

    }
}

const displayAllPosts = (allPosts) =>{
    const allList = allPosts.map((all)=> {
        const {image, category, title, description, id} = all;
        
        return `<a class="all-posts_list" href="../pages/single-blog.html?id=${id}">
        <div class="image">
            <img src="${image}" alt="">
        </div>
        <div class="all-posts_info">
            <p class="category">${category}</p>
            <h2 class="title">${title}</h2>
            <p class="description">${description}</p>
            <p class="read-more">Read More</p>
        </div>
    </a>`

    }).join('')
    allPostsContent.innerHTML = `${allList}`

    
}
const showAllPosts = async () => {
    const data = await fetchAllPosts();
    displayAllPosts(data)

}

showAllPosts();


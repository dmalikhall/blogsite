
const url = 'https://fixed-blog-api-project.herokuapp.com/blogs';


const postContainer = document.querySelector('.blog-container');

const fetchBlog = async () => {
    try {
        postContainer.innerHTML = `<span class="loader"></span>`
        const response = await fetch(url);
        const data = await response.json();

        return data.splice(0,6)
    } catch (error) {
        console.log(error);

    }
}

const displayBlog = (blogs) => {
    const blogList = blogs.map((item)=> {
        const {image, category, title, description, id} = item;

        return `<a class="latest-posts" href="../pages/single-blog.html?id=${id}">
        <div class="post-image">
            <img src="${image}"
                alt="blog post">
        </div>
        <div class="post-info">
            <p class="category">${category}</p>
            <h1 class="title">${title}</h1>
            <p class="short-description">${description}</p>
        </div>
    </a>`

    }).join('');
    postContainer.innerHTML = `${blogList}`

}

const start = async () => {
    const data = await fetchBlog();
    displayBlog(data)
}

start();
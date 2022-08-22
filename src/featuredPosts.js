// const featuredPostURL = 'https://the-blog-api.herokuapp.com/blogs';
const featuredPostURL = 'https://fixed-blog-api-project.herokuapp.com/blogs';
const featuredPostContainer = document.querySelector('.feature-post');


const fetchFeaturedPosts = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.splice(6,4));
        return data.splice(2,3)
    } catch (error) {
        console.log(error);

    }
}

const displayFeaturedPosts = (featured) => {
    const featuredList = featured.map((item)=> {
        console.log(item);

        // image, category, title, description
        const {image, category, title, id} = item;

        return `<a class="feature-post" href="../pages/single-blog.html?id=${id}">
        <div class="featured-image">
            <img src="${image}" alt="">
        </div>
        <div class="featured-name">
            <p class="category">${category}</p>
            <p class="title">${title}</p>
        </div>
    </a>`

    }).join('');
    featuredPostContainer.innerHTML = `${featuredList}`

}

const startFeaturedPost = async () => {
    const data = await fetchFeaturedPosts();
    displayFeaturedPosts(data)
}

startFeaturedPost();

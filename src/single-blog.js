// const blogApi = 'https://the-blog-api.herokuapp.com/blogs';
const blogApi = 'https://fixed-blog-api-project.herokuapp.com/blogs';

const singleBlogContainer = document.querySelector('.single-blog-container');

const fetchBlog = async () => {
    try {
        const param = new URLSearchParams(window.location.search);
        const id = param.get("id")
        
        

        const response = await fetch(`${blogApi}?id=${id}`);
        const data = await response.json();
        
        return data;

    } catch (error) {
        console.log(error);

    }

}

const displayBlog = (blog) => {
    const { image, category, title, description, theEnd } = blog[0];
    const { image: authorPic, name, postDate } = blog[0].author[0];
    const { firstParagraph, secondParagraph, thirdParagraph, fourthParagraph, quote } = blog[0].overview[0];

    singleBlogContainer.innerHTML = `<div class="blog-image">
    <img src="${image}"
        alt="blog post">
</div>

<div class="container">
    <div class="header">
        <p class="category">${category}</p>
        <h1 class="title">${title}</h1>
        <p class="description">${description}</p>
        <div class="author-info">
            <div class="author-image">
                <img src="${authorPic}" alt="${name}">
            </div>
            <p>By <span>${name}</span> on ${postDate}</p>
        </div>
    </div>

    <div class="overview">
        <h2>overview</h2>
        <p>${firstParagraph}</p>
        <p>${secondParagraph}</p>
        <div class="quote">${quote}</div>
        <p>${thirdParagraph}</p>
        <p>${fourthParagraph}</p>
    </div>

    <div class="the-end">
        <h3>The End</h3>
        <p>${theEnd}</p>
    </div>

    <div class="dots">...</div>
    </div>
`



}

const start = async () => {
    const data = await fetchBlog();
    displayBlog(data);
}

start()
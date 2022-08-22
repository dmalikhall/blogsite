// const url = 'https://the-blog-api.herokuapp.com/blogs';
const url = 'https://fixed-blog-api-project.herokuapp.com/blogs';
const navigationBlogContainer = document.querySelector('.category-blog_container');
console.log(navigationBlogContainer);
const navName = document.querySelector('#nav-name');

const fetchNavigation = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data
}

const displayNavigation = (navList) => {
    const navigationItems = navList.filter(
        (cat) => cat.category === navName.innerText
    );
    

    const eachNavItem = navigationItems.map((navItem) => {
        const { image, title, description, id } = navItem;
        const { name } = navItem.author[0];
        return `<a class="category-blog_list" href="../pages/single-blog.html?id=${id}">
        <div class="image">
            <img src="${image}" alt="${title}">
        </div>

        <div class="category-blog_info">
            <h3>${title}</h3>
            <p class="short-description">${description}</p>
            <p>By <span class="category-author">${name}</span></p>
        </div>
    </a>`

    }).join('');
    
    navigationBlogContainer.innerHTML = `${eachNavItem}`
}

const showNavigation = async () => {
    const data = await fetchNavigation();
    displayNavigation(data);

}

showNavigation()

const url = 'https://fixed-blog-api-project.herokuapp.com/blogs';

const latestEntryList = document.querySelector('.full-dynamic-list');

const fetchLatestEntry = async () => {
    try {
        latestEntryList.innerHTML = `<span class="loader"></span>`;
        const response = await fetch(url);
        const data = await response.json();

        return data.splice(6,4)
    } catch (error) {
        console.log(error);

    }
}

const displayLatestEntry = (entries) => {
    const entryList = entries.map((entry)=> {

        const {image, category, title, id} = entry;
        const {name} = entry.author[0];

        return `<a class="dynamic-list" href="../pages/single-blog.html?id=${id}">
        <div class="image">
            <img src="${image}" alt="${title}">
        </div>
        <div class="info">
            <p class="preview-category">${category}</p>
            <p class="preview-title">${title}</p>
            <p class="preview-author">by <span>${name}</span></p>
        </div>
    </a> `

    }).join('');
    latestEntryList.innerHTML = `${entryList}`

}

const show = async () => {
    const data = await fetchLatestEntry();
    displayLatestEntry(data)
}

show();
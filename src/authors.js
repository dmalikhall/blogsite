
const urlAuthors = 'https://fixed-blog-api-project.herokuapp.com/blogs';

const fetchAuthors = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('hey');
        
        return data
        

    } catch (error) {
        console.log(error);

    }

    
}


const showAllAuthors = async () => {
    const data = await fetchAllPosts();
    displayAllAuthors(data)

}

showAllAuthors();
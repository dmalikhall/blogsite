// const urlAuthors = 'https://the-blog-api.herokuapp.com/blogs';
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



const displayAllAuthors = (allPosts) => {
    
    // const authorList = allPosts.map((author)=>{
    //     const{image, name} = author.author[0]
    //     console.log(author.author[0].name.splice(1,4));

    // })
}

const showAllAuthors = async () => {
    const data = await fetchAllPosts();
    displayAllAuthors(data)

}

showAllAuthors();
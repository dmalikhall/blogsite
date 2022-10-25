
const carouselUrl = 'https://fixed-blog-api-project.herokuapp.com/blogs';

const slideContainer = document.querySelector('.slide-show_container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');





const carouselData = async () => {
    try {
        slideContainer.innerHTML = `<span class="loader"></span>`;
        const response = await fetch(carouselUrl);
        const data = await response.json();

        return data.splice(6, 8);

    } catch (error) {
        console.log(error);

    }

}

const displayCarousel = (items) => {
    slideContainer.innerHTML = items.map((item, slideIndex) => {
        const { image, title, category, id } = item;

        let position = 'next';

        if (slideIndex === 0) {
            position = 'active'
        }
        if (slideIndex === items.length - 1) {
            position = 'last'
        }
        if (items.length <= 1) {
            position = 'active'
        }

        return `<a class="front-page_carousel ${position}" href="../pages/single-blog.html?id=${id}">
        <div class="carousel-image">
            <img src="${image}" alt="">
        </div>
        <div class="carousel-title">
            <p>${category}</p>
            <h3>${title}</h3>
        </div>                    
    </a>`
    }).join('');





    const startSlider = (type) => {
        const active = document.querySelector('.active')
        const last = document.querySelector('.last')
        let next = active.nextElementSibling
        if (!next) {
            next = slideContainer.firstElementChild
        }
        active.classList.remove('active')
        last.classList.remove('last')
        next.classList.remove('next')

        if (type === 'prev') {
            active.classList.add('next')
            last.classList.add('active')
            next = last.previousElementSibling
            if (!next) {
                next = slideContainer.lastElementChild
            }
            next.classList.remove('next')
            next.classList.add('last')
            return
        }
        active.classList.add('last')
        last.classList.add('next')
        next.classList.add('active')
    }
    nextBtn.addEventListener('click', () => {
        startSlider()

    })
    prevBtn.addEventListener('click', () => {
        startSlider('prev')


    })

}

const startCarousel = async () => {
    const data = await carouselData();
    displayCarousel(data)
}

startCarousel();
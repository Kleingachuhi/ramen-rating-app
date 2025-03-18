document.addEventListener('DOMContentLoaded', () => {
    const ramenListSection = document.getElementById('ramen-list');
    const ramenNameInput = document.getElementById('ramenName');
    const restaurantNameInput = document.getElementById('restaurantName');
    const ramenImageInput = document.getElementById('ramenImage');
    const ramenRatingInput = document.getElementById('ramenRating');
    const ramenCommentInput = document.getElementById('ramenComment');
    const createRamenButton = document.getElementById('createRamen');

    let ramenData = [
        {
            id: 1,
            name: "Gyukotsu Ramen",
            restaurant: "Ramenya",
            image: "images/gyukotsu.jpg",
            rating: 4,
            comment: "Rich and flavorful broth."
        },
        {
            id: 2,
            name: "Kojiro Ramen",
            restaurant: "Ichiban",
            image: "images/kojiro.jpg",
            rating: 5,
            comment: "Excellent noodles and toppings."
        },
        {
            id: 3,
            name: "Naruto Ramen",
            restaurant: "Noodle House",
            image: "images/naruto.jpg",
            rating: 3,
            comment: "Good classic ramen."
        },
        {
            id: 4,
            name: "Nirvana Ramen",
            restaurant: "Zen Noodles",
            image: "images/nirvana.jpg",
            rating: 5,
            comment: "The best ramen I've ever had!"
        },
        {
            id: 5,
            name: "Shoyu Ramen",
            restaurant: "Tokyo Eats",
            image: "images/shoyu.jpg",
            rating: 4,
            comment: "Savory and well-balanced."
        }
    ];

    function renderRamenList() {
        ramenListSection.innerHTML = ''; 
        ramenData.forEach(ramen => {
            const ramenCard = document.createElement('div');
            ramenCard.classList.add('ramen-card');
            ramenCard.innerHTML = `
                <img src="${ramen.image}" alt="${ramen.name}">
                <h3>${ramen.name}</h3>
                <p>Restaurant: ${ramen.restaurant}</p>
                <div class="rating">Rating: <span class="rating-stars">${getRatingStars(ramen.rating)}</span></div>
                ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
            `;
            ramenListSection.appendChild(ramenCard);
        });
    }

    function getRatingStars(rating) {
        const maxRating = 5;
        let stars = '';
        for (let i = 1; i <= maxRating; i++) {
            if (i <= rating) {
                stars += '⭐';
            } else {
                stars += '☆';
            }
        }
        return stars;
    }

    function addRamen() {
        const name = ramenNameInput.value.trim();
        const restaurant = restaurantNameInput.value.trim();
        const image = ramenImageInput.value.trim();
        const rating = parseInt(ramenRatingInput.value);
        const comment = ramenCommentInput.value.trim();

        if (!name || !restaurant || !image || isNaN(rating) || rating < 1 || rating > 5) {
            alert('Please fill in all required fields (Name, Restaurant, Image URL, Rating - 1 to 5).');
            return;
        }

        const newRamen = {
            id: Date.now(), 
            name,
            restaurant,
            image,
            rating,
            comment
        };

        ramenData.push(newRamen);
        renderRamenList();
        ramenNameInput.value = '';
        restaurantNameInput.value = '';
        ramenImageInput.value = '';
        ramenRatingInput.value = '';
        ramenCommentInput.value = '';
        alert('Ramen added successfully!');
    }

    createRamenButton.addEventListener('click', addRamen);

    renderRamenList();
});
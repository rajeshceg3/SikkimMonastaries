// This file will be responsible for populating and managing the monastery list.

// The monastery data is moved here to be the single source of truth.
const monasteries = [
    {
        name: "Rumtek Monastery",
        lat: 27.2856,
        lng: 88.5714,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Rumtek.jpg",
        description: "The largest and most famous monastery in Sikkim, the main seat of the Karma Kagyu school of Tibetan Buddhism. A center of spiritual learning and vibrant festivals."
    },
    {
        name: "Pemayangtse Monastery",
        lat: 27.3006,
        lng: 88.2531,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Pemayangtse.jpg",
        description: "One of the oldest and most important monasteries in Sikkim, founded in the 17th century. It houses ancient scriptures and priceless works of art, including the magnificent Sangdogpalri sculpture."
    },
    {
        name: "Tashiding Monastery",
        lat: 27.2731,
        lng: 88.2917,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Tashiding.jpg",
        description: "Considered the holiest monastery in Sikkim, perched on a heart-shaped hill. It is believed that a single glimpse of the monastery can cleanse one of all sins."
    },
    {
        name: "Enchey Monastery",
        lat: 27.3392,
        lng: 88.6183,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Enchey.jpg",
        description: "A 200-year-old monastery in Gangtok, believed to be blessed by the tantric master Lama Druptob Karpo. Known for its vibrant Cham dance festival."
    },
    {
        name: "Phodang Monastery",
        lat: 27.4556,
        lng: 88.5908,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Phodong.jpg",
        description: "One of the most beautiful monasteries in Sikkim, with stunning architecture and ancient murals. It belongs to the Kagyupa sect of Tibetan Buddhism."
    },
    {
        name: "Dubdi Monastery",
        lat: 27.3833,
        lng: 88.2208,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Dubdi.jpg",
        description: "The first monastery established in Sikkim, also known as the 'Hermit's Cell'. A short trek through a dense forest leads to this serene and historic site."
    },
    {
        name: "Sanga Chelling Monastery",
        lat: 27.3083,
        lng: 88.2417,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Sanga-Chelling.jpg",
        description: "The second oldest monastery in Sikkim, meaning 'the island of esoteric teaching'. It offers breathtaking panoramic views of the surrounding mountains."
    },
    {
        name: "Khecheopalri Monastery",
        lat: 27.3711,
        lng: 88.2017,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Khecheopalri.jpg",
        description: "Located above the sacred and wish-fulfilling Khecheopalri Lake. A place of pilgrimage for both Buddhists and Hindus, surrounded by pristine nature."
    },
    {
        name: "Dodrul Chorten",
        lat: 27.3247,
        lng: 88.6139,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Dodrul-Chorten.jpg",
        description: "An iconic stupa in Gangtok, built in 1945. It is surrounded by 108 prayer wheels and is a spiritual landmark of the city."
    },
    {
        name: "Karma Kagyu Monastery, Phodong",
        lat: 27.4556,
        lng: 88.5908,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Karma-Kagyu.jpg",
        description: "Famous for its rich history and ancient murals, this monastery is a significant center of the Karma Kagyu lineage."
    },
    {
        name: "Namchi Monastery",
        lat: 27.1667,
        lng: 88.3667,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Namchi.jpg",
        description: "Located in South Sikkim, this monastery is known for its large statue of Guru Padmasambhava, offering a sense of peace and grandeur."
    },
    {
        name: "Lachen Monastery",
        lat: 27.7167,
        lng: 88.5500,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Lachen.jpg",
        description: "A key monastery in the remote and beautiful North Sikkim, offering insights into the unique culture of the Lachenpas."
    },
    {
        name: "Lachung Monastery",
        lat: 27.6833,
        lng: 88.7333,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Lachung.jpg",
        description: "An important monastery in the picturesque Lachung valley, known for its traditional architecture and serene atmosphere."
    },
    {
        name: "Tsuk-La-Khang Monastery",
        lat: 27.3308,
        lng: 88.6142,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Tsuk-La-Khang.jpg",
        description: "The former royal monastery, located within the palace grounds. It was once the center for royal weddings, coronations, and religious ceremonies."
    },
    {
        name: "Pal Zurmang Kagyud Monastery (Lingdum)",
        lat: 27.3167,
        lng: 88.5667,
        image: "https://www.sikkimtourism.gov.in/Public/ExperienceSikkim/images/Monasteries/Lingdum.jpg",
        description: "A stunning example of modern Tibetan monastic architecture, with intricate details and vibrant colors. A peaceful retreat near Gangtok."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const monasteryList = document.getElementById('monastery-list');

    if (monasteryList) {
        monasteries.forEach((monastery, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="list-item-name">${monastery.name}</span>
            `;
            listItem.dataset.index = index;
            monasteryList.appendChild(listItem);

            // Add click listener to select the monastery
            listItem.addEventListener('click', () => {
                selectMonastery(index);
            });

            // Add hover listeners to highlight the corresponding map marker
            listItem.addEventListener('mouseover', () => {
                if (mapContext.markers[index]) {
                    mapContext.markers[index].getElement().classList.add('hover');
                }
            });

            listItem.addEventListener('mouseout', () => {
                if (mapContext.markers[index]) {
                    mapContext.markers[index].getElement().classList.remove('hover');
                }
            });
        });
    }
});

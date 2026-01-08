// Jony Ive Inspired Map Logic
// - Clean, efficient, and focused on a smooth user experience.

// Single source of truth for monastery data
const monasteries = [
    {
        name: "Rumtek Monastery",
        lat: 27.2856,
        lng: 88.5714,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rumtek_Monastery_2010.jpg",
        description: "The largest and most famous monastery in Sikkim, the main seat of the Karma Kagyu school of Tibetan Buddhism. A center of spiritual learning and vibrant festivals."
    },
    {
        name: "Pemayangtse Monastery",
        lat: 27.3006,
        lng: 88.2531,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pemayangtse_Monastery_in_Sikkim.jpg",
        description: "One of the oldest and most important monasteries in Sikkim, founded in the 17th century. It houses ancient scriptures and priceless works of art, including the magnificent Sangdogpalri sculpture."
    },
    {
        name: "Tashiding Monastery",
        lat: 27.2731,
        lng: 88.2917,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tashiding_Monastery-Sikkim-DSC_0002.jpg",
        description: "Considered the holiest monastery in Sikkim, perched on a heart-shaped hill. It is believed that a single glimpse of the monastery can cleanse one of all sins."
    },
    {
        name: "Enchey Monastery",
        lat: 27.3392,
        lng: 88.6183,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Enchey_Monastery_in_Gangtok_district%2C_East_Sikkim.jpg",
        description: "A 200-year-old monastery in Gangtok, believed to be blessed by the tantric master Lama Druptob Karpo. Known for its vibrant Cham dance festival."
    },
    {
        name: "Phodang Monastery",
        lat: 27.4556,
        lng: 88.5908,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Phodong_monastery_-_north_sikkim.jpg",
        description: "One of the most beautiful monasteries in Sikkim, with stunning architecture and ancient murals. It belongs to the Kagyupa sect of Tibetan Buddhism."
    },
    {
        name: "Dubdi Monastery",
        lat: 27.3833,
        lng: 88.2208,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dubdi_Monastery_4.jpg",
        description: "The first monastery established in Sikkim, also known as the 'Hermit's Cell'. A short trek through a dense forest leads to this serene and historic site."
    },
    {
        name: "Sanga Chelling Monastery",
        lat: 27.3083,
        lng: 88.2417,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Full_view_of_Sanga-Choeling_Monastery.jpg",
        description: "The second oldest monastery in Sikkim, meaning 'the island of esoteric teaching'. It offers breathtaking panoramic views of the surrounding mountains."
    },
    {
        name: "Khecheopalri Monastery",
        lat: 27.3711,
        lng: 88.2017,
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Tashi_Choling_Monastery_%2C_Khecheopalri_Lake.%2C_West_Sikkim_02.jpg",
        description: "Located above the sacred and wish-fulfilling Khecheopalri Lake. A place of pilgrimage for both Buddhists and Hindus, surrounded by pristine nature."
    },
    {
        name: "Dodrul Chorten",
        lat: 27.3247,
        lng: 88.6139,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Do-drul_Chorten_is_a_stupa_in_Gangtok_in_East_Sikkim_05.jpg",
        description: "An iconic stupa in Gangtok, built in 1945. It is surrounded by 108 prayer wheels and is a spiritual landmark of the city."
    },
    {
        name: "Karma Kagyu Monastery, Phodong",
        lat: 27.4556,
        lng: 88.5908,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Phensang_Monastery%2C_Sikkim_India.jpg",
        description: "Famous for its rich history and ancient murals, this monastery is a significant center of the Karma Kagyu lineage."
    },
    {
        name: "Namchi Monastery",
        lat: 27.1667,
        lng: 88.3667,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Namchi_Monastery.jpg",
        description: "Located in South Sikkim, this monastery is known for its large statue of Guru Padmasambhava, offering a sense of peace and grandeur."
    },
    {
        name: "Lachen Monastery",
        lat: 27.7167,
        lng: 88.5500,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Lachen_Monastery_Gompa.jpg",
        description: "A key monastery in the remote and beautiful North Sikkim, offering insights into the unique culture of the Lachenpas."
    },
    {
        name: "Lachung Monastery",
        lat: 27.6833,
        lng: 88.7333,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Lachung_Monastery%2C_Sikkim_India.jpg",
        description: "An important monastery in the picturesque Lachung valley, known for its traditional architecture and serene atmosphere."
    },
    {
        name: "Tsuk-La-Khang Monastery",
        lat: 27.3308,
        lng: 88.6142,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tsuklakhang_Monastery_.jpg",
        description: "The former royal monastery, located within the palace grounds. It was once the center for royal weddings, coronations, and religious ceremonies."
    },
    {
        name: "Pal Zurmang Kagyud Monastery (Lingdum)",
        lat: 27.3167,
        lng: 88.5667,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Outer_view_of_Lingdum_Zurmang_Kharwang_Gonpa_or_Ranka_Monastery_premises%2C_East_Sikkim_12.jpg",
        description: "A stunning example of modern Tibetan monastic architecture, with intricate details and vibrant colors. A peaceful retreat near Gangtok."
    }
];

// This will hold the map instance and markers
const mapContext = {
    map: null,
    markers: [],
    activeMarker: null, // This will store the active marker's HTML element
};

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get DOM Elements
    const monasteryList = document.getElementById('monastery-list');
    const closePanelButton = document.getElementById('close-panel');

    // 2. Initialize the Map
    mapContext.map = L.map('map', {
        center: [27.5330, 88.5122], // Centered on Sikkim
        zoom: 9,
        scrollWheelZoom: false,
        zoomControl: false
    });

    // 3. Add a Custom Tile Layer
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=c8301630-e7df-4a9e-84d5-bf5e7453c864', {
        maxZoom: 16,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors'
    }).addTo(mapContext.map);

    // Add a custom zoom control
    L.control.zoom({ position: 'bottomright' }).addTo(mapContext.map);

    // 4. Create Markers, List Items, and Add Interactions
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-pin"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    monasteries.forEach((monastery, index) => {
        // --- Create Marker ---
        const marker = L.marker([monastery.lat, monastery.lng], { icon: customIcon }).addTo(mapContext.map);
        mapContext.markers.push(marker); // Store the Leaflet marker object

        // --- Create List Item ---
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="list-item-name">${monastery.name}</span>`;
        listItem.dataset.index = index;
        monasteryList.appendChild(listItem);

        // --- Add Event Listeners ---
        marker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            selectMonastery(index);
        });

        listItem.addEventListener('click', () => {
            selectMonastery(index);
        });

        listItem.addEventListener('mouseover', () => {
            marker.getElement().classList.add('hover');
        });

        listItem.addEventListener('mouseout', () => {
            marker.getElement().classList.remove('hover');
        });
    });

    // 5. Close Panel Logic
    closePanelButton.addEventListener('click', closeDetailPanel);
});


// --- Core Functions ---

function selectMonastery(index) {
    const monastery = monasteries[index];
    const markerElement = mapContext.markers[index].getElement();
    const listItem = document.querySelector(`#monastery-list li[data-index="${index}"]`);

    // Check if the panel is already open for this monastery
    if (markerElement.classList.contains('active')) {
        return;
    }

    // Get panel elements
    const mainContainer = document.getElementById('main-container');
    const detailPanel = document.getElementById('detail-panel');
    const detailBackground = document.getElementById('detail-view-background');
    const panelTitle = document.getElementById('panel-title');
    const panelDescription = document.getElementById('panel-description');

    // --- Deactivate previously active items ---
    deactivateCurrent();

    // --- Update Content ---
    detailBackground.style.backgroundImage = `url(${monastery.image})`;
    panelTitle.textContent = monastery.name;
    panelDescription.textContent = monastery.description;

    // --- Show Panel and Blur Background ---
    mainContainer.classList.add('detail-view-active');
    detailPanel.classList.add('detail-view-visible');

    // --- Activate New Items ---
    markerElement.classList.add('active');
    mapContext.activeMarker = markerElement; // Store the active element
    listItem.classList.add('active');

    // --- Fly to Location ---
    mapContext.map.flyTo([monastery.lat, monastery.lng], 12, {
        animate: true,
        duration: 1.5
    });

    // --- Add a one-time event listener to the map to close the panel ---
    setTimeout(() => {
        mapContext.map.once('click', closeDetailPanel);
    }, 100);
}

function closeDetailPanel() {
    const mainContainer = document.getElementById('main-container');
    const detailPanel = document.getElementById('detail-panel');

    mainContainer.classList.remove('detail-view-active');
    detailPanel.classList.remove('detail-view-visible');

    deactivateCurrent();

    // Remove the map click listener if it exists
    mapContext.map.off('click', closeDetailPanel);
}

function deactivateCurrent() {
    // Deactivate marker
    if (mapContext.activeMarker) {
        mapContext.activeMarker.classList.remove('active');
        mapContext.activeMarker = null;
    }
    // Deactivate list item
    const activeListItem = document.querySelector('#monastery-list li.active');
    if (activeListItem) {
        activeListItem.classList.remove('active');
    }
}

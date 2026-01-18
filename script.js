// Jony Ive Inspired Map Logic
// - Clean, efficient, and focused on a smooth user experience.

// Single source of truth for monastery data
const monasteries = [
    {
        name: "Rumtek Monastery",
        lat: 27.2856,
        lng: 88.5714,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rumtek_Monastery_2010.jpg",
        altitude: "1,500 m (4,900 ft)",
        established: "1966 (Rebuilt)",
        festivals: "Tse-Chu (June), Losar",
        visitingHours: "6:00 AM - 6:00 PM",
        bestTime: "Mar - Jun, Sep - Dec",
        description: "The largest and most significant monastery in Sikkim, serving as the main seat of the Karma Kagyu lineage in exile. Founded by the 16th Karmapa, it features traditional Tibetan architecture, a golden stupa, and the Karma Shri Nalanda Institute."
    },
    {
        name: "Pemayangtse Monastery",
        lat: 27.3006,
        lng: 88.2531,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pemayangtse_Monastery_in_Sikkim.jpg",
        altitude: "2,085 m (6,840 ft)",
        established: "1705",
        festivals: "Cham Dance (Feb/Mar)",
        visitingHours: "9:00 AM - 5:00 PM",
        bestTime: "Mar - Jun",
        description: "One of Sikkim's oldest and most premier monasteries, belonging to the Nyingma order. It houses the magnificent wooden sculpture of 'Sangtokpalri' (the celestial abode of Guru Rinpoche) and offers commanding views of Mt. Kanchenjunga."
    },
    {
        name: "Tashiding Monastery",
        lat: 27.2731,
        lng: 88.2917,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tashiding_Monastery-Sikkim-DSC_0002.jpg",
        altitude: "1,460 m (4,790 ft)",
        established: "1717",
        festivals: "Bumchu (Feb/Mar)",
        visitingHours: "7:00 AM - 5:00 PM",
        bestTime: "Mar - Jun",
        description: "Considered the holiest monastery in Sikkim, perched on a heart-shaped hill between the Rathong Chu and Rangeet rivers. Legend says that a mere glimpse of its sacred Thongwa Rangdol chorten washes away all sins."
    },
    {
        name: "Enchey Monastery",
        lat: 27.3392,
        lng: 88.6183,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Enchey_Monastery_in_Gangtok_district%2C_East_Sikkim.jpg",
        altitude: "2,000 m (6,560 ft)",
        established: "1909 (Structure)",
        festivals: "Detor Cham (Jan/Feb)",
        visitingHours: "6:00 AM - 6:00 PM",
        bestTime: "Mar - Jun, Sep - Oct",
        description: "Perched on a ridge above Gangtok, this 200-year-old monastery is believed to be protected by the spirits of the Kanchenjunga. It is a vital seat of the Nyingma order and is famous for its masked dances."
    },
    {
        name: "Phodong Monastery",
        lat: 27.4556,
        lng: 88.5908,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Phodong_monastery_-_north_sikkim.jpg",
        altitude: "1,370 m (4,500 ft)",
        established: "1734",
        festivals: "Phodong Tsechu (Dec)",
        visitingHours: "8:00 AM - 5:00 PM",
        bestTime: "Mar - May, Oct - Dec",
        description: "One of the six major monasteries in Sikkim, known for its exquisite murals and preserved architectural beauty. Standing at a scenic vantage point, it offers a glimpse into the rich history of the Karma Kagyu lineage."
    },
    {
        name: "Dubdi Monastery",
        lat: 27.3833,
        lng: 88.2208,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dubdi_Monastery_4.jpg",
        altitude: "2,100 m (6,900 ft)",
        established: "1701",
        festivals: "Losar (Feb)",
        visitingHours: "7:00 AM - 4:00 PM",
        bestTime: "Mar - May",
        description: "Known as the 'Hermit's Cell', this is the oldest monastery in Sikkim, established by the Chogyal Namgyal. Accessible via a beautiful trek through dense cardamom forests, it stands as a testament to the state's spiritual origins."
    },
    {
        name: "Sanga Chelling Monastery",
        lat: 27.3083,
        lng: 88.2417,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Full_view_of_Sanga-Choeling_Monastery.jpg",
        altitude: "2,150 m (7,050 ft)",
        established: "1697",
        festivals: "Khechuperra (Dec)",
        visitingHours: "8:00 AM - 5:00 PM",
        bestTime: "Mar - Jun",
        description: "Meaning 'The Island of Esoteric Teaching', this is the second-oldest monastery in Sikkim. Located on a ridge opposite Pemayangtse, it houses ancient clay statues and offers one of the best sunrise views in Pelling."
    },
    {
        name: "Khecheopalri Monastery",
        lat: 27.3711,
        lng: 88.2017,
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Tashi_Choling_Monastery_%2C_Khecheopalri_Lake.%2C_West_Sikkim_02.jpg",
        altitude: "1,700 m (5,600 ft)",
        established: "Ancient",
        festivals: "Maghe Purne (Jan)",
        visitingHours: "6:00 AM - 6:00 PM",
        bestTime: "Feb - Apr, Oct - Dec",
        description: "A small but significant monastery located just above the sacred 'Wish-Fulfilling Lake'. It is a place of deep reverence where silence is cherished, and the lake is believed to be kept clean by birds picking up falling leaves."
    },
    {
        name: "Dodrul Chorten",
        lat: 27.3247,
        lng: 88.6139,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Do-drul_Chorten_is_a_stupa_in_Gangtok_in_East_Sikkim_05.jpg",
        altitude: "2,300 m (7,500 ft)",
        established: "1945",
        festivals: "Auspicious Days",
        visitingHours: "8:00 AM - 6:00 PM",
        bestTime: "All Year",
        description: "A massive stupa in Gangtok marked by its golden top and 108 prayer wheels. Built to drive away evil spirits, it is a bustling center of faith where devotees circumambulate day and night."
    },
    {
        name: "Phensang Monastery",
        lat: 27.4181,
        lng: 88.5795,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Phensang_Monastery%2C_Sikkim_India.jpg",
        altitude: "1,450 m (4,760 ft)",
        established: "1721",
        festivals: "Kagyed Dance (Dec)",
        visitingHours: "8:00 AM - 5:00 PM",
        bestTime: "Oct - Dec, Mar - May",
        description: "Situated on a gentle slope in North Sikkim, this monastery of the Nyingma order is famous for its large number of monks and scenic location. Despite fire damage in the past, it has been beautifully restored."
    },
    {
        name: "Namchi Monastery (Samdruptse)",
        lat: 27.1667,
        lng: 88.3667,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Namchi_Monastery.jpg",
        altitude: "2,134 m (7,000 ft)",
        established: "1997 (Statue)",
        festivals: "Guru Rinpoche B'day",
        visitingHours: "9:00 AM - 5:00 PM",
        bestTime: "Feb - May, Sep - Nov",
        description: "Home to the towering statue of Guru Padmasambhava on the Samdruptse Hill ('Wish Fulfilling Hill'). It is a modern marvel of spirituality and engineering, overlooking the town of Namchi."
    },
    {
        name: "Lachen Monastery",
        lat: 27.7167,
        lng: 88.5500,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Lachen_Monastery_Gompa.jpg",
        altitude: "2,750 m (9,000 ft)",
        established: "1858",
        festivals: "Losoong (Dec)",
        visitingHours: "7:00 AM - 5:00 PM",
        bestTime: "Apr - Jun, Oct",
        description: "A serene monastery in the remote mountain village of Lachen, marking the gateway to the high Himalayas. It serves as a community center for the Lachenpas and offers a peaceful retreat with stunning alpine views."
    },
    {
        name: "Lachung Monastery",
        lat: 27.6833,
        lng: 88.7333,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Lachung_Monastery%2C_Sikkim_India.jpg",
        altitude: "2,700 m (8,858 ft)",
        established: "1880",
        festivals: "Mask Dance (Dec)",
        visitingHours: "8:00 AM - 5:00 PM",
        bestTime: "Apr - Jun",
        description: "Nestled among apple orchards and towering peaks, this monastery is a gem of the Lachung Valley. It features vibrant murals and hosts traditional mask dances that bring the quiet valley to life."
    },
    {
        name: "Tsuk-La-Khang Monastery",
        lat: 27.3308,
        lng: 88.6142,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tsuklakhang_Monastery_.jpg",
        altitude: "2,300 m (7,500 ft)",
        established: "1898",
        festivals: "Pang Lhabsol",
        visitingHours: "7:00 AM - 5:00 PM",
        bestTime: "All Year",
        description: "The Royal Chapel of the Chogyals, located within the palace complex in Gangtok. Once the site of royal weddings and coronations, it is a repository of Buddhist scriptures and a masterpiece of traditional Sikkimese architecture."
    },
    {
        name: "Lingdum Monastery (Ranka)",
        lat: 27.3167,
        lng: 88.5667,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Outer_view_of_Lingdum_Zurmang_Kharwang_Gonpa_or_Ranka_Monastery_premises%2C_East_Sikkim_12.jpg",
        altitude: "1,500 m (5,000 ft)",
        established: "1999",
        festivals: "Losar (Feb)",
        visitingHours: "8:00 AM - 6:00 PM",
        bestTime: "All Year",
        description: "A spectacular modern monastery near Gangtok, known for its vast courtyard, intricate artworks, and cinematic beauty. It follows the Zurmang Kagyu tradition and provides a perfect setting for meditation and photography."
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
    const detailContent = document.getElementById('detail-content');

    // --- Deactivate previously active items ---
    deactivateCurrent();

    // --- Update Content ---
    detailBackground.style.backgroundImage = `url(${monastery.image})`;

    // Rich Content Injection
    detailContent.innerHTML = `
        <h2 id="panel-title">${monastery.name}</h2>
        <div class="monastery-meta-grid">
            <div class="meta-item">
                <span class="meta-label">Altitude</span>
                <span class="meta-value">${monastery.altitude}</span>
            </div>
             <div class="meta-item">
                <span class="meta-label">Established</span>
                <span class="meta-value">${monastery.established}</span>
            </div>
             <div class="meta-item">
                <span class="meta-label">Best Time</span>
                <span class="meta-value">${monastery.bestTime}</span>
            </div>
             <div class="meta-item">
                <span class="meta-label">Visiting Hours</span>
                <span class="meta-value">${monastery.visitingHours}</span>
            </div>
        </div>

        <div class="monastery-description">
            <p>${monastery.description}</p>
        </div>

        <div class="monastery-festivals">
            <h3>Major Festivals</h3>
            <p>${monastery.festivals}</p>
        </div>
    `;

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

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
        festivals: "Tse-Chu (June), Losar (Feb)",
        visitingHours: "6:00 AM - 6:00 PM",
        bestTime: "Mar - Jun, Sep - Dec",
        description: "Rumtek, also known as the Dharma Chakra Centre, is the largest and most significant monastery in Sikkim. It serves as the main seat of the Karma Kagyu lineage in exile and was rebuilt by the 16th Karmapa in the 1960s. The monastery is a faithful replica of the Tsurphu Monastery in Tibet. It houses some of the world's most unique religious scriptures and rare religious art objects, including the Golden Stupa which contains the precious relics of the 16th Karmapa. The complex is a vibrant center of learning, housing the Karma Shri Nalanda Institute.",
        highlights: [
            "The Golden Stupa of the 16th Karmapa",
            "Karma Shri Nalanda Institute for Higher Buddhist Studies",
            "Annual Tse-Chu Chaam (Mask Dances)",
            "Stunning traditional Tibetan architecture and murals"
        ],
        travelTips: "Foreign nationals must carry their passport and Inner Line Permit (ILP). It is a steep walk from the gate to the main monastery; comfortable shoes are recommended. Photography inside the main prayer hall is generally restricted.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.2856,88.5714"
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
        description: "Pemayangtse, meaning 'Perfect Sublime Lotus', is one of Sikkim's oldest and most premier monasteries. It was designed and founded by Lama Lhatsun Chempo and belongs to the Nyingma order. The monastery is famous for its magnificent seven-tiered wooden sculpture of 'Sangtokpalri', depicting the celestial abode of Guru Rinpoche, which took five years to craft single-handedly by the late Dungzin Rinpoche. It stands at a prime location offering commanding views of Mt. Kanchenjunga.",
        highlights: [
            "The seven-tiered Sangtokpalri wooden sculpture",
            "Ancient manuscripts and antique idols",
            "Commanding views of Mt. Kanchenjunga",
            "Beautifully landscaped gardens"
        ],
        travelTips: "Located near Pelling, it is easily accessible by road. The best time to visit is during the morning for a clear view of the mountains. Dress modestly as it is a highly revered site.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3006,88.2531"
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
        description: "Considered the holiest monastery in Sikkim, Tashiding is perched on a heart-shaped hill between the Rathong Chu and Rangeet rivers. It is believed that the site was consecrated by Guru Rinpoche himself. The monastery is the center of the 'Bumchu' festival, where a sacred pot of water is opened annually to predict the year's fortune. Legend says that a mere glimpse of its sacred Thongwa Rangdol chorten washes away all sins.",
        highlights: [
            "The sacred Thongwa Rangdol Chorten",
            "The holy Bumchu ceremony",
            "Stone plates with holy mantras (Mani walls)",
            "Serene and isolated hilltop location"
        ],
        travelTips: "Reaching the monastery requires a steep uphill walk of about 20-30 minutes from the parking area. The atmosphere is deeply spiritual and quiet; visitors are expected to maintain silence.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.2731,88.2917"
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
        description: "Perched on a ridge above Gangtok, Enchey Monastery means 'Solitary Temple'. It was built on a site blessed by Lama Druptob Karpo, a tantric master known for his ability to fly. The monastery is a vital seat of the Nyingma order and is famous for its vibrant 'Chaam' or masked dances performed during the Detor festival. Its location offers a stunning view of Gangtok town and the Kanchenjunga range.",
        highlights: [
            "Site blessed by the 'Flying Monk' Druptob Karpo",
            "Spectacular Mask Dances (Chaam)",
            "Pagoda-style architecture",
            "Panoramic views of Gangtok"
        ],
        travelTips: "Located just 3 km from Gangtok town center, it is easily accessible by taxi. It is a perfect spot for a morning or evening walk. The path is lined with prayer wheels.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3392,88.6183"
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
        description: "One of the six major monasteries in Sikkim, Phodong is known for its exquisite ancient murals and preserved architectural beauty. It belongs to the Karma Kagyu sect and was founded by the 9th Karmapa. Standing at a scenic vantage point in North Sikkim, it offers a glimpse into the rich history of the lineage. The monastery is less commercialized, offering a peaceful experience.",
        highlights: [
            "Exquisite ancient murals and frescoes",
            "Rich collection of artifacts",
            "Scenic location in North Sikkim",
            "Peaceful and less crowded atmosphere"
        ],
        travelTips: "It is located about 38 km from Gangtok. The road offers beautiful views but can be rough. Combine this visit with the nearby Labrang Monastery.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.4556,88.5908"
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
        description: "Known as the 'Hermit's Cell', Dubdi is the oldest monastery in Sikkim, established by the Chogyal Namgyal. It played a crucial role in the consecration of the first King of Sikkim at Yuksom. Accessible via a beautiful trek through dense cardamom forests and chestnut groves, it stands as a testament to the state's spiritual origins. The stone two-story structure houses statues of the three lamas who consecrated the first king.",
        highlights: [
            "The oldest monastery in Sikkim (1701)",
            "Statues of the three founding Lamas",
            "Historical significance to the Chogyal dynasty",
            "Scenic trek through cardamom forests"
        ],
        travelTips: "Requires a 45-minute to 1-hour uphill hike from Yuksom. The trail is well-marked but can be slippery during rains. Great for birdwatching enthusiasts.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3833,88.2208"
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
        description: "Meaning 'The Island of Esoteric Teaching', Sanga Chelling is the second-oldest monastery in Sikkim. Located on a ridge opposite Pemayangtse, it houses ancient clay statues and offers one of the best sunrise views in Pelling. The monastery was built by Lama Lhatsun Chempo and is strictly for the Nyingma order. It was recently rebuilt after a fire but retains its original sacred aura.",
        highlights: [
            "Second oldest monastery in Sikkim",
            "Rare clay statues and Vajra artifacts",
            "Spectacular sunrise views over Pelling",
            "Ancient cremation ground nearby"
        ],
        travelTips: "Accessible by a 45-minute moderate hike from Pelling. The path goes through a thick forest. Carry water and wear good walking shoes.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3083,88.2417"
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
        description: "A small but significant monastery located just above the sacred 'Wish-Fulfilling Lake' (Khecheopalri Lake). The lake is revered by both Buddhists and Hindus. It is a place of deep reverence where silence is cherished, and the lake is believed to be kept clean by birds picking up falling leaves. The monastery oversees the rituals performed at the lake.",
        highlights: [
            "Overlooks the sacred Wish-Fulfilling Lake",
            "Sacred footprint of Goddess Tara",
            "Legends of birds cleaning the lake",
            "Deeply serene and mystical atmosphere"
        ],
        travelTips: "Shoes must be removed before walking on the boardwalk to the lake. Do not feed the fish in the lake as it is considered sacred. Silence is mandatory in the lake area.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3711,88.2017"
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
        description: "A massive stupa in Gangtok marked by its golden top and 108 prayer wheels. Built by Trulshik Rinpoche to drive away evil spirits that were believed to haunt the area, it is now a bustling center of faith where devotees circumambulate day and night. It houses a complete set of Dorjee Phurba (Vajra Kilaya) and other holy relics.",
        highlights: [
            "108 Mani Lhakor (Prayer Wheels)",
            "Golden top stupa architecture",
            "Statues of Guru Rinpoche",
            "Always buzzing with devotees"
        ],
        travelTips: "Always circumambulate the stupa in a clockwise direction. It is located near the Namgyal Institute of Tibetology, so you can visit both in one trip.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3247,88.6139"
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
        description: "Situated on a gentle slope in North Sikkim, Phensang Monastery of the Nyingma order is famous for its large number of monks and scenic location. It was founded by the 3rd Lhatsun Jigmed Pawo. Despite suffering severe fire damage in 1947 and again in 1983, it has been beautifully restored, preserving its structural integrity and spiritual importance.",
        highlights: [
            "Beautifully restored traditional architecture",
            "Large community of monks",
            "Scenic location on the way to North Sikkim",
            "Annual Kagyed Chaam dance"
        ],
        travelTips: "Located on the Gangtok-Chungthang highway. Best visited while traveling to or from North Sikkim. The road can be prone to landslides during monsoon.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.4181,88.5795"
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
        description: "Samdruptse, meaning 'Wish Fulfilling Hill', is home to the towering 135-foot statue of Guru Padmasambhava (Guru Rinpoche). It is the highest statue of Guru Rinpoche in the world. It is a modern marvel of spirituality and engineering, overlooking the town of Namchi. The complex includes a prayer hall within the statue's base and a beautiful garden.",
        highlights: [
            "135-foot tall statue of Guru Padmasambhava",
            "Highest statue of Guru Rinpoche in the world",
            "Panoramic views of Mt. Kanchenjunga",
            "Ropeway access from Namchi town"
        ],
        travelTips: "You can take the ropeway from Namchi town for a scenic approach. The wind can be strong at the top, so carry a light jacket. Binoculars are recommended for the views.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.1667,88.3667"
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
        description: "A serene monastery in the remote mountain village of Lachen, marking the gateway to the high Himalayas. It was originally a small hut built in 1806 and later expanded. It serves as a community center for the Lachenpas (local inhabitants) and offers a peaceful retreat with stunning alpine views. The monastery houses a statue of Guru Rinpoche and a casket containing the footprint of the first King of Sikkim.",
        highlights: [
            "Gateway to Gurudongmar Lake",
            "Authentic alpine village atmosphere",
            "Rare artifacts including a royal footprint",
            "Stunning views of rhododendron forests"
        ],
        travelTips: "Lachen is a restricted area; an Inner Line Permit is mandatory. It is very cold, especially in the evenings, so heavy woolens are required. It's a stopover for Gurudongmar Lake.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.7167,88.5500"
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
        description: "Nestled among apple orchards and towering peaks, Lachung Monastery is a gem of the Lachung Valley. It features vibrant murals and two heavy prayer wheels at the entrance. The monastery hosts traditional mask dances that bring the quiet valley to life. It is a symbol of the cultural heritage of the Lachungpas.",
        highlights: [
            "Located amidst apple orchards and snow peaks",
            "Vibrant ancient murals",
            "Gateway to Yumthang Valley",
            "Traditional wood carving architecture"
        ],
        travelTips: "Like Lachen, a permit is required. It is usually visited on the way to Yumthang Valley. Try the local apples if you visit during harvest season (Aug-Sep).",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.6833,88.7333"
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
        description: "The Royal Chapel of the Chogyals, located within the palace complex in Gangtok. Once the site of royal weddings and coronations, it is a repository of Buddhist scriptures and a masterpiece of traditional Sikkimese architecture. The monastery is known for its intricate wood carvings and mural paintings depicting Buddhist legends. It is the center of the 'Pang Lhabsol' festival, worshipping Mt. Kanchenjunga.",
        highlights: [
            "The Royal Chapel of the former Kings",
            "Venue for royal coronations and weddings",
            "Intricate wood carvings and murals",
            "Center of the Pang Lhabsol festival"
        ],
        travelTips: "It is located near the Ridge Park in Gangtok. Public entry is sometimes restricted as it is part of the palace grounds, but it is open during major festivals like Pang Lhabsol and Losar.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3308,88.6142"
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
        description: "A spectacular modern monastery near Gangtok, Lingdum (also known as Ranka Monastery) is known for its vast courtyard, intricate artworks, and cinematic beauty. It follows the Zurmang Kagyu tradition. The monastery has been a shooting location for several Bollywood movies due to its stunning symmetry and vibrant colors. It provides a perfect setting for meditation and photography.",
        highlights: [
            "Stunning modern Tibetan architecture",
            "Vast courtyard and symmetrical design",
            "Popular filming location for movies",
            "Friendly monks and serene environment"
        ],
        travelTips: "It is about 45 minutes drive from Gangtok. The road is scenic. There are souvenir shops and a restaurant nearby. It is very wheelchair friendly compared to older monasteries.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.3167,88.5667"
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

    // 6. Tactile 3D Tilt Effect
    const detailPanel = document.getElementById('detail-panel');
    const detailContent = document.getElementById('detail-content');

    detailPanel.addEventListener('mousemove', (e) => {
        if (!detailPanel.classList.contains('detail-view-visible')) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate rotation (-1 to 1)
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        // Apply tilt
        detailContent.style.transform = `rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    });

    detailPanel.addEventListener('mouseleave', () => {
        detailContent.style.transform = 'rotateY(0) rotateX(0)';
    });
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
        <h2 id="panel-title" class="panel-element delay-1">${monastery.name}</h2>
        <div class="monastery-meta-grid panel-element delay-2">
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

        <div class="monastery-description panel-element delay-3">
            <p>${monastery.description}</p>
        </div>

        <div class="monastery-highlights panel-element delay-3">
            <h3>Highlights</h3>
            <ul>
                ${monastery.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        </div>

        <div class="monastery-festivals panel-element delay-4">
            <h3>Major Festivals</h3>
            <p>${monastery.festivals}</p>
        </div>

        <div class="monastery-travel-tips panel-element delay-4">
            <h3>Travel Tips</h3>
            <p>${monastery.travelTips}</p>
        </div>

        <div class="monastery-actions panel-element delay-4">
            <a href="${monastery.directionsUrl}" target="_blank" class="cta-button">Get Directions</a>
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
    const detailContent = document.getElementById('detail-content');

    mainContainer.classList.remove('detail-view-active');
    detailPanel.classList.remove('detail-view-visible');

    // Reset tilt
    detailContent.style.transform = '';

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

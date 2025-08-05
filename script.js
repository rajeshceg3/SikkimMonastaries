// Jony Ive Inspired Map Logic
// - Clean, efficient, and focused on a smooth user experience.

// This will hold the map instance and markers so they can be accessed from list.js
const mapContext = {
    map: null,
    markers: [],
    activeMarker: null
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize the Map
    mapContext.map = L.map('map', {
        center: [27.5330, 88.5122], // Centered on Sikkim
        zoom: 9,
        scrollWheelZoom: false, // More controlled zoom
        zoomControl: false // We'll add it in a different position
    });

    // Add a custom zoom control
    L.control.zoom({
        position: 'bottomright'
    }).addTo(mapContext.map);

    // 2. Add a Custom Tile Layer
    // Using Stamen Watercolor from Stadia Maps
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=c8301630-e7df-4a9e-84d5-bf5e7453c864', {
        maxZoom: 16,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors'
    }).addTo(mapContext.map);

    // 3. Get DOM Elements for New Interaction
    const mainContainer = document.getElementById('main-container');
    const detailPanel = document.getElementById('detail-panel');
    const closePanelButton = document.getElementById('close-panel');
    const detailBackground = document.getElementById('detail-view-background');
    const panelTitle = document.getElementById('panel-title');
    const panelDescription = document.getElementById('panel-description');

    // 4. Create Custom Markers and Add Interaction
    monasteries.forEach((monastery, index) => {
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-pin"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        const marker = L.marker([monastery.lat, monastery.lng], { icon: customIcon }).addTo(mapContext.map);
        marker.dataset.index = index;
        mapContext.markers.push(marker);

        marker.on('click', (e) => {
            // Stop propagation to prevent map click from closing the panel immediately
            L.DomEvent.stopPropagation(e);
            selectMonastery(index);
        });
    });

    // 5. Close Panel Logic
    const closePanel = () => {
        detailPanel.classList.remove('detail-view-visible');
        mainContainer.classList.remove('detail-view-active');

        if (mapContext.activeMarker) {
            mapContext.activeMarker.classList.remove('active');
            mapContext.activeMarker = null;
        }
        const activeListItem = document.querySelector('#monastery-list li.active');
        if (activeListItem) {
            activeListItem.classList.remove('active');
        }
    };

    closePanelButton.addEventListener('click', closePanel);
    // Note: We'll handle map clicks within the selectMonastery function to avoid immediate closing.
});

// 6. Function to select a monastery (can be called from list.js or marker click)
function selectMonastery(index) {
    const monastery = monasteries[index];
    const marker = mapContext.markers[index].getElement();
    const listItem = document.querySelector(`#monastery-list li[data-index="${index}"]`);

    // --- Update Content ---
    detailBackground.style.backgroundImage = `url(${monastery.image})`;
    panelTitle.textContent = monastery.name;
    panelDescription.textContent = monastery.description;

    // --- Show Panel and Blur Background ---
    mainContainer.classList.add('detail-view-active');
    detailPanel.classList.add('detail-view-visible');

    // --- Update Active States ---
    if (mapContext.activeMarker) {
        mapContext.activeMarker.classList.remove('active');
    }
    marker.classList.add('active');
    mapContext.activeMarker = marker;

    const activeListItem = document.querySelector('#monastery-list li.active');
    if (activeListItem) {
        activeListItem.classList.remove('active');
    }
    listItem.classList.add('active');

    // --- Fly to Location ---
    mapContext.map.flyTo([monastery.lat, monastery.lng], 12, {
        animate: true,
        duration: 1.5
    });

    // --- Add a one-time event listener to the map to close the panel ---
    // This is more robust than a generic map click listener.
    const mapClickListener = () => {
        const closePanel = () => {
            detailPanel.classList.remove('detail-view-visible');
            mainContainer.classList.remove('detail-view-active');
            if (mapContext.activeMarker) {
                mapContext.activeMarker.classList.remove('active');
                mapContext.activeMarker = null;
            }
            const activeListItem = document.querySelector('#monastery-list li.active');
            if (activeListItem) {
                activeListItem.classList.remove('active');
            }
            mapContext.map.off('click', mapClickListener);
        };
        closePanel();
    };
    // Use a timeout to prevent the same click that opened the panel from closing it
    setTimeout(() => {
        mapContext.map.once('click', mapClickListener);
    }, 100);
}

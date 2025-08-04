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
    // Using Esri's satellite imagery for a more realistic view.
    L.esri.basemapLayer('Imagery').addTo(mapContext.map);

    // 3. Get DOM Elements for Interaction
    const detailPanel = document.getElementById('detail-panel');
    const closePanelButton = document.getElementById('close-panel');
    const panelImage = document.getElementById('panel-image');
    const panelTitle = document.getElementById('panel-title');
    const panelDescription = document.getElementById('panel-description');

    // 4. Function to update and show the panel
    const updatePanel = (monastery) => {
        panelImage.src = monastery.image;
        panelImage.alt = monastery.name;
        panelTitle.textContent = monastery.name;
        panelDescription.textContent = monastery.description;
        detailPanel.classList.add('panel-visible');
    };

    // 5. Create Custom Markers and Add Interaction
    monasteries.forEach((monastery, index) => {
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-pin"></div>`, // Inner pin for better styling
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        const marker = L.marker([monastery.lat, monastery.lng], { icon: customIcon }).addTo(mapContext.map);
        marker.dataset.index = index; // Store the index on the marker
        mapContext.markers.push(marker);

        marker.on('click', () => {
            selectMonastery(index);
        });
    });

    // 6. Close Panel Logic
    const closePanel = () => {
        detailPanel.classList.remove('panel-visible');
        if (mapContext.activeMarker) {
            mapContext.activeMarker.classList.remove('active');
            mapContext.activeMarker = null;
        }
        // Also remove active state from list
        const activeListItem = document.querySelector('#monastery-list li.active');
        if (activeListItem) {
            activeListItem.classList.remove('active');
        }
    };

    closePanelButton.addEventListener('click', closePanel);
    mapContext.map.on('click', closePanel); // Close panel when clicking on the map
});

// 7. Function to select a monastery (can be called from list.js)
function selectMonastery(index) {
    const monastery = monasteries[index];
    const marker = mapContext.markers[index];
    const listItem = document.querySelector(`#monastery-list li[data-index="${index}"]`);

    // Center map
    mapContext.map.flyTo([monastery.lat, monastery.lng], 11, {
        animate: true,
        duration: 1.5
    });

    // Update panel
    const panelImage = document.getElementById('panel-image');
    const panelTitle = document.getElementById('panel-title');
    const panelDescription = document.getElementById('panel-description');
    panelImage.src = monastery.image;
    panelImage.alt = monastery.name;
    panelTitle.textContent = monastery.name;
    panelDescription.textContent = monastery.description;
    document.getElementById('detail-panel').classList.add('panel-visible');

    // Update active marker
    if (mapContext.activeMarker) {
        mapContext.activeMarker.classList.remove('active');
    }
    marker.getElement().classList.add('active');
    mapContext.activeMarker = marker.getElement();

    // Update active list item
    const activeListItem = document.querySelector('#monastery-list li.active');
    if (activeListItem) {
        activeListItem.classList.remove('active');
    }
    listItem.classList.add('active');
}

// map.js
mapboxgl.accessToken = mapToken;

// Make sure listing.geometry exists
const coordinates = listing.geometry && listing.geometry.coordinates
    ? listing.geometry.coordinates
    : [73.8567, 18.5204]; // default coordinates if none exist

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// Add marker
new mapboxgl.Marker({ color: '#fe424d' })
    .setLngLat(coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h4>${listing.title}</h4>
                      <p>Exact location will be provided after booking</p>`)
    )
    .addTo(map);

// Coordenadas del centro de Barcelona
const barcelonaCoordinates = [41.3851, 2.1734];

// Crear el mapa
const map = L.map('map').setView(barcelonaCoordinates, 13);

// Agregar una capa de mapa base (utilizando OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Crea un grupo de capas para cada categoría
const categorias = {
    Parques: L.layerGroup(),
    Museos: L.layerGroup(),
    Restaurantes: L.layerGroup(),
};

// Marcadores de ejemplo
const lugares = [
    { nombre: 'Parque Güell', categoria: 'Parques', latlng: [41.4146, 2.1520] },
    { nombre: 'Museo Picasso', categoria: 'Museos', latlng: [41.3854, 2.1807] },
    { nombre: 'Sagrada Familia', categoria: 'Museos', latlng: [41.4036, 2.1744] },
    { nombre: 'Restaurante X', categoria: 'Restaurantes', latlng: [41.3965, 2.1918] },
    { nombre: 'Restaurante Y', categoria: 'Restaurantes', latlng: [41.3910, 2.1649] },
];

// Agrega los marcadores a las capas correspondientes
lugares.forEach((lugar) => {
    const marker = L.marker(lugar.latlng).bindPopup(lugar.nombre);

    // Agrega el marcador a la capa correspondiente
    categorias[lugar.categoria].addLayer(marker);
});

// Agrega capas al mapa
for (const categoria in categorias) {
    categorias[categoria].addTo(map);
}

// Crea un control de capas para cambiar entre categorías
L.control.layers(null, categorias, { collapsed: false }).addTo(map);

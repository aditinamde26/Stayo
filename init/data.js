const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8241, 39.1911] }
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
  },
  {
    title: "Cozy Cabin in Aspen",
    description: "A rustic wooden cabin surrounded by snow-capped mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 1200,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Penthouse in New York",
    description: "Stay in a stylish Manhattan penthouse with skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    price: 5000,
    location: "New York",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },

  {
    title: "Countryside Cottage in England",
    description: "Charming stone cottage with a thatched roof and cozy fireplace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    },
    price: 800,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.7216, 51.8330] }
  },
  {
    title: "Luxury Desert Camp in Dubai",
    description: "Glamping in the desert with starry night skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    },
    price: 2500,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description: "Crystal clear waters and direct lagoon access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    price: 7000,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] }
  },
  {
    title: "Ryokan in Kyoto",
    description: "Traditional Japanese inn with tatami rooms and hot springs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    },
    price: 1100,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] }
  },
  {
    title: "Treehouse in Costa Rica",
    description: "Eco-friendly jungle retreat with wildlife all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 600,
    location: "Monteverde",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.8278, 10.3136] }
  },
  {
    title: "Santorini Cave House",
    description: "Whitewashed cave house with sunset views over the caldera.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 2000,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  // 11

  {
    title: "Safari Lodge in Kenya",
    description: "Experience wildlife safaris right outside your lodge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2" },
    price: 3200,
    location: "Maasai Mara",
    country: "Kenya",
    geometry: { type: "Point", coordinates: [35.1434, -1.4061] }
  },
  {
    title: "Igloo Stay in Finland",
    description: "Glass igloo with breathtaking Northern Lights views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508739826987-b79cd8b7da12" },
    price: 1500,
    location: "Lapland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [27.6835, 67.9222] }
  },

  {
    title: "Historic Home in Charleston",
    description: "Step back in time in this beautifully restored historic home.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
    price: 1800,
    location: "Charleston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-79.9311, 32.7765] }
  },
  // 20
  {
    title: "Seaside Bungalow in Thailand",
    description: "Beachfront bungalow with turquoise waters.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    price: 2200,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3985, 7.8804] }
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Centrally located modern apartment with city access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
    price: 2500,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Chalet in French Alps",
    description: "Luxury chalet with panoramic mountain views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
    price: 4000,
    location: "Chamonix",
    country: "France",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] }
  },
  {
    title: "Safari Tent in South Africa",
    description: "Luxury tented camp in the African savannah.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2" },
    price: 2700,
    location: "Kruger National Park",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [31.4886, -23.9884] }
  },

  // 25
  {
    title: "Mountain Retreat in Austria",
    description: "Peaceful retreat surrounded by alpine forests.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d" },
    price: 3200,
    location: "Innsbruck",
    country: "Austria",
    geometry: { type: "Point", coordinates: [11.4041, 47.2692] }
  },
  {
    title: "Coastal Cottage in Ireland",
    description: "Charming seaside cottage with dramatic cliffs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" },
    price: 1200,
    location: "County Kerry",
    country: "Ireland",
    geometry: { type: "Point", coordinates: [-9.6625, 52.1548] }
  },
  {
    title: "Desert Oasis Camp in Morocco",
    description: "Luxury tents near the dunes with starry skies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff" },
    price: 1800,
    location: "Merzouga",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-4.0205, 31.1048] }
  },

  {
    title: "Luxury Apartment in Barcelona",
    description: "Modern apartment near La Rambla and beach.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    price: 2800,
    location: "Barcelona",
    country: "Spain",
    geometry: { type: "Point", coordinates: [2.1734, 41.3851] }
  },
  // 30

  {
    title: "Cave Hotel in Cappadocia",
    description: "Stay in a cave hotel with hot air balloon views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
    price: 1700,
    location: "Cappadocia",
    country: "Turkey",
    geometry: { type: "Point", coordinates: [34.8366, 38.6456] }
  },
  {
    title: "Luxury Tent in Mongolia",
    description: "Nomadic style luxury tents in the steppes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    price: 2000,
    location: "Gobi Desert",
    country: "Mongolia",
    geometry: { type: "Point", coordinates: [105.3188, 42.5903] }
  },
  // 35
  {
    title: "Seaside Villa in Portugal",
    description: "Villa overlooking the Atlantic with infinity pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
    price: 3000,
    location: "Algarve",
    country: "Portugal",
    geometry: { type: "Point", coordinates: [-8.984, 37.0194] }
  },

  // 40
  {
    title: "Seaside Cabin in Norway",
    description: "Coastal cabin with ocean views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d" },
    price: 1500,
    location: "Lofoten",
    country: "Norway",
    geometry: { type: "Point", coordinates: [13.6313, 68.2295] }
  },
  {
    title: "Luxury Safari Tent in Tanzania",
    description: "Exclusive tented safari with guided tours.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" },
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.8230, -2.3333] }
  },
  {
    title: "Mountain Villa in Italy",
    description: "Alpine villa with breathtaking views of the Dolomites.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff" },
    price: 3200,
    location: "Cortina d'Ampezzo",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.1357, 46.5407] }
  },

  {
    title: "Desert Lodge in UAE",
    description: "Stay in the desert with luxury amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    price: 2500,
    location: "Abu Dhabi",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [54.3773, 24.4539] }
  },
  // 45

  {
    title: "Canyon Lodge in USA",
    description: "Stay near the Grand Canyon with luxury amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    price: 3200,
    location: "Grand Canyon",
    country: "United States",
    geometry: { type: "Point", coordinates: [-112.1401, 36.0544] }
  },
  {
    title: "Beach Villa in Seychelles",
    description: "Private beachfront villa with pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
    price: 9000,
    location: "Mahe",
    country: "Seychelles",
    geometry: { type: "Point", coordinates: [55.4699, -4.6829] }
  },
  // 50
];

module.exports = { data: sampleListings };


export const initialNodes = [
  {
    id: "New York",
    data: { label: "New York" },
    position: { x: 100, y: 200 },
    style: { backgroundColor: "#ffd1dc" },
  },
  {
    id: "London",
    data: { label: "London" },
    position: { x: 400, y: 100 },
    style: { backgroundColor: "#d1e0ff" },
  },
  {
    id: "Paris",
    data: { label: "Paris" },
    position: { x: 420, y: 160 },
    style: { backgroundColor: "#ffe0b2" },
  },
  {
    id: "Rome",
    data: { label: "Rome" },
    position: { x: 450, y: 180 },
    style: { backgroundColor: "#c8e6c9" },
  },
  {
    id: "Moscow",
    data: { label: "Moscow" },
    position: { x: 600, y: 80 },
    style: { backgroundColor: "#e1bee7" },
  },
  {
    id: "Dubai",
    data: { label: "Dubai" },
    position: { x: 650, y: 250 },
    style: { backgroundColor: "#fff9c4" },
  },
  {
    id: "Mumbai",
    data: { label: "Mumbai" },
    position: { x: 800, y: 300 },
    style: { backgroundColor: "#f0f4c3" },
  },
  {
    id: "Beijing",
    data: { label: "Beijing" },
    position: { x: 850, y: 160 },
    style: { backgroundColor: "#ffccbc" },
  },
  {
    id: "Tokyo",
    data: { label: "Tokyo" },
    position: { x: 950, y: 200 },
    style: { backgroundColor: "#b2dfdb" },
  },
  {
    id: "Singapore",
    data: { label: "Singapore" },
    position: { x: 900, y: 400 },
    style: { backgroundColor: "#dcedc8" },
  },
  {
    id: "Sydney",
    data: { label: "Sydney" },
    position: { x: 1050, y: 500 },
    style: { backgroundColor: "#f8bbd0" },
  },
  {
    id: "Cape Town",
    data: { label: "Cape Town" },
    position: { x: 500, y: 600 },
    style: { backgroundColor: "#c5cae9" },
  },
  {
    id: "Buenos Aires",
    data: { label: "Buenos Aires" },
    position: { x: 200, y: 600 },
    style: { backgroundColor: "#ffe082" },
  },
  {
    id: "Toronto",
    data: { label: "Toronto" },
    position: { x: 120, y: 150 },
    style: { backgroundColor: "#b3e5fc" },
  },
  {
    id: "Los Angeles",
    data: { label: "Los Angeles" },
    position: { x: 80, y: 250 },
    style: { backgroundColor: "#d7ccc8" },
  },
];
export const initialEdges = [
  {
    id: "new_york-london",
    source: "New York",
    target: "London",
    label: "600 km",
    animated: true,
  },
  {
    id: "new_york-paris",
    source: "New York",
    target: "Paris",
    label: "850 km",
    animated: true,
  },

  {
    id: "london-paris",
    source: "London",
    target: "Paris",
    label: "200 km",
    animated: true,
  },
  {
    id: "toronto-paris",
    source: "Toronto",
    target: "Paris",
    label: "1200 km",
    animated: true,
  },

  {
    id: "paris-rome",
    source: "Paris",
    target: "Rome",
    label: "300 km",
    animated: true,
  },
  {
    id: "london-rome",
    source: "London",
    target: "Rome",
    label: "800 km",
    animated: true,
  },

  {
    id: "rome-moscow",
    source: "Rome",
    target: "Moscow",
    label: "500 km",
    animated: true,
  },
  {
    id: "paris-moscow",
    source: "Paris",
    target: "Moscow",
    label: "1000 km",
    animated: true,
  },

  {
    id: "moscow-dubai",
    source: "Moscow",
    target: "Dubai",
    label: "600 km",
    animated: true,
  },
  {
    id: "rome-dubai",
    source: "Rome",
    target: "Dubai",
    label: "1100 km",
    animated: true,
  },

  {
    id: "dubai-mumbai",
    source: "Dubai",
    target: "Mumbai",
    label: "450 km",
    animated: true,
  },
  {
    id: "moscow-mumbai",
    source: "Moscow",
    target: "Mumbai",
    label: "1000 km",
    animated: true,
  },

  {
    id: "mumbai-beijing",
    source: "Mumbai",
    target: "Beijing",
    label: "700 km",
    animated: true,
  },
  {
    id: "dubai-beijing",
    source: "Dubai",
    target: "Beijing",
    label: "1500 km",
    animated: true,
  },

  {
    id: "beijing-tokyo",
    source: "Beijing",
    target: "Tokyo",
    label: "500 km",
    animated: true,
  },
  {
    id: "mumbai-tokyo",
    source: "Mumbai",
    target: "Tokyo",
    label: "1300 km",
    animated: true,
  },

  {
    id: "tokyo-singapore",
    source: "Tokyo",
    target: "Singapore",
    label: "800 km",
    animated: true,
  },
  {
    id: "beijing-singapore",
    source: "Beijing",
    target: "Singapore",
    label: "1000 km",
    animated: true,
  },

  {
    id: "singapore-sydney",
    source: "Singapore",
    target: "Sydney",
    label: "700 km",
    animated: true,
  },
  {
    id: "mumbai-sydney",
    source: "Mumbai",
    target: "Sydney",
    label: "1500 km",
    animated: true,
  },

  {
    id: "mumbai-cape_town",
    source: "Mumbai",
    target: "Cape Town",
    label: "1300 km",
    animated: true,
  },
  {
    id: "rome-cape_town",
    source: "Rome",
    target: "Cape Town",
    label: "1700 km",
    animated: true,
  },

  {
    id: "cape_town-buenos_aires",
    source: "Cape Town",
    target: "Buenos Aires",
    label: "1000 km",
    animated: true,
  },
  {
    id: "sydney-buenos_aires",
    source: "Sydney",
    target: "Buenos Aires",
    label: "1800 km",
    animated: true,
  },

  {
    id: "new_york-los_angeles",
    source: "New York",
    target: "Los Angeles",
    label: "400 km",
    animated: true,
  },
  {
    id: "toronto-los_angeles",
    source: "Toronto",
    target: "Los Angeles",
    label: "800 km",
    animated: true,
  },
];

export const cities = [
  { value: "New York", label: "New York" },
  { value: "London", label: "London" },
  { value: "Paris", label: "Paris" },
  { value: "Rome", label: "Rome" },
  { value: "Moscow", label: "Moscow" },
  { value: "Dubai", label: "Dubai" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Beijing", label: "Beijing" },
  { value: "Tokyo", label: "Tokyo" },
  { value: "Singapore", label: "Singapore" },
  { value: "Sydney", label: "Sydney" },
  { value: "Cape Town", label: "Cape Town" },
  { value: "Buenos Aires", label: "Buenos Aires" },
  { value: "Toronto", label: "Toronto" },
  { value: "Los Angeles", label: "Los Angeles" },
];

export const initialNodes = [
  {
    id: "new-york",
    data: { label: "New York" },
    position: { x: 0, y: 200 },
    style: { background: "#A7D2CB" },
  },
  {
    id: "london",
    data: { label: "London" },
    position: { x: 300, y: 100 },
    style: { background: "#F2B5D4" },
  },
  {
    id: "paris",
    data: { label: "Paris" },
    position: { x: 350, y: 200 },
    style: { background: "#FCD5CE" },
  },
  {
    id: "berlin",
    data: { label: "Berlin" },
    position: { x: 450, y: 180 },
    style: { background: "#CDB4DB" },
  },
  {
    id: "moscow",
    data: { label: "Moscow" },
    position: { x: 600, y: 120 },
    style: { background: "#B5EAD7" },
  },
  {
    id: "beijing",
    data: { label: "Beijing" },
    position: { x: 800, y: 150 },
    style: { background: "#FFDAC1" },
  },
  {
    id: "tokyo",
    data: { label: "Tokyo" },
    position: { x: 950, y: 200 },
    style: { background: "#D0F4DE" },
  },
  {
    id: "sydney",
    data: { label: "Sydney" },
    position: { x: 1100, y: 400 },
    style: { background: "#FFD6A5" },
  },
  {
    id: "mumbai",
    data: { label: "Mumbai" },
    position: { x: 750, y: 350 },
    style: { background: "#C4E0F9" },
  },
  {
    id: "dubai",
    data: { label: "Dubai" },
    position: { x: 600, y: 300 },
    style: { background: "#E2F0CB" },
  },

  // new connections

  {
    id: "cape-town",
    data: { label: "Cape Town" },
    position: { x: 100, y: 600 },
    style: { background: "#F6DFEB" },
  },
  {
    id: "sao-paulo",
    data: { label: "São Paulo" },
    position: { x: -600, y: 500 },
    style: { background: "#D5AAFF" },
  },
  {
    id: "cairo",
    data: { label: "Cairo" },
    position: { x: -50, y: 240 },
    style: { background: "#FFDEAD" },
  },
  {
    id: "toronto",
    data: { label: "Toronto" },
    position: { x: -720, y: 150 },
    style: { background: "#E0BBE4" },
  },
  {
    id: "singapore",
    data: { label: "Singapore" },
    position: { x: 400, y: 350 },
    style: { background: "#B0EACD" },
  },
];

export const initialEdges = [
  {
    id: "e1",
    source: "new-york",
    target: "london",
    label: "5567 km",
    animated: true,
  },
  {
    id: "e2",
    source: "london",
    target: "paris",
    label: "343 km",
    animated: true,
  },
  {
    id: "e3",
    source: "paris",
    target: "berlin",
    label: "1054 km",
    animated: true,
  },
  {
    id: "e4",
    source: "berlin",
    target: "moscow",
    label: "1600 km",
    animated: true,
  },
  {
    id: "e5",
    source: "moscow",
    target: "beijing",
    label: "5792 km",
    animated: true,
  },
  {
    id: "e6",
    source: "beijing",
    target: "tokyo",
    label: "2096 km",
    animated: true,
  },
  {
    id: "e7",
    source: "tokyo",
    target: "sydney",
    label: "7830 km",
    animated: true,
  },
  {
    id: "e8",
    source: "sydney",
    target: "mumbai",
    label: "10410 km",
    animated: true,
  },
  {
    id: "e9",
    source: "mumbai",
    target: "dubai",
    label: "1927 km",
    animated: true,
  },
  {
    id: "e10",
    source: "dubai",
    target: "london",
    label: "5500 km",
    animated: true,
  },

  // New connections
  {
    id: "11",
    source: "new-york",
    target: "toronto",
    label: "800",
    animated: true,
  },
  {
    id: "12",
    source: "toronto",
    target: "sao-paulo",
    label: "8190",
    animated: true,
  },
  {
    id: "13",
    source: "sao-paulo",
    target: "cape-town",
    label: "6800",
    animated: true,
  },
  {
    id: "14",
    source: "cape-town",
    target: "cairo",
    label: "6400",
    animated: true,
  },
  {
    id: "15",
    source: "cairo",
    target: "singapore",
    label: "8300",
    animated: true,
  },
];

export const cities = [
  { id: "new-york", label: "New York" },
  { id: "london", label: "London" },
  { id: "paris", label: "Paris" },
  { id: "berlin", label: "Berlin" },
  { id: "moscow", label: "Moscow" },
  { id: "beijing", label: "Beijing" },
  { id: "tokyo", label: "Tokyo" },
  { id: "sydney", label: "Sydney" },
  { id: "mumbai", label: "Mumbai" },
  { id: "dubai", label: "Dubai" },

  // Newly added
  { id: "cape-town", label: "Cape Town" },
  { id: "sao-paulo", label: "São Paulo" },
  { id: "cairo", label: "Cairo" },
  { id: "toronto", label: "Toronto" },
  { id: "singapore", label: "Singapore" },
];

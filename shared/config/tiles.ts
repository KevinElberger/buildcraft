export interface TileSprite {
  id: number;
  name: string;
  x: number;
  y: number;
  category: string[];
}

export const tiles: TileSprite[] = [
  {
    id: 0,
    name: "Grass",
    x: 0,
    y: 0,
    category: ["Nature"]
  },
  {
    id: 1,
    name: "Dirt",
    x: -16,
    y: 0,
    category: ["Nature"]
  },
  {
    id: 2,
    name: "Snow",
    x: -32,
    y: 0,
    category: ["Nature"]
  },
  {
    id: 3,
    name: "Block of Amethyst",
    x: -48,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 4,
    name: "Block of Copper",
    x: -64,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 5,
    name: "Budding Amethyst",
    x: -80,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 6,
    name: "Calcite",
    x: -96,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 7,
    name: "Copper Ore",
    x: -112,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 8,
    name: "Waxed Cut Copper",
    x: -128,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 9,
    name: "Waxed Exposed Copper",
    x: -144,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 10,
    name: "Exposed Cut Copper",
    x: -160,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 11,
    name: "Weathered Copper",
    x: -176,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 12,
    name: "Weathered Cut Copper",
    x: -192,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 13,
    name: "Tuff",
    x: -208,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 14,
    name: "Oxidized Copper",
    x: -224,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 15,
    name: "Oxidized Cut Copper",
    x: -240,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 16,
    name: "Unknown",
    x: -256,
    y: 0,
    category: []
  },
  {
    id: 17,
    name: "Nether Portal",
    x: -272,
    y: 0,
    category: ["Nether"]
  },
  {
    id: 18,
    name: "Block of Copper (All Types)",
    x: -288,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 19,
    name: "Cut Copper (All Types)",
    x: -304,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    id: 20,
    name: "Inverted Daylight Sensor",
    x: 0,
    y: -16,
    category: ["Redstone"]
  },
  {
    id: 21,
    name: "Daylight Sensor",
    x: -16,
    y: -16,
    category: ["Redstone"]
  },
  {
    id: 22,
    name: "Unknown2",
    x: -32,
    y: -16,
    category: ["Redstone"]
  },
  {
    id: 23,
    name: "Sponge",
    x: -48,
    y: -16,
    category: ["Ocean"]
  },
  {
    id: 24,
    name: "Dripstone Block",
    x: -64,
    y: -16,
    category: ["Ore"]
  },
  {
    id: 25,
    name: "Wool (White)",
    x: -80,
    y: -16,
    category: ["Animal Product"]
  },
  {
    id: 26,
    name: "Moss Block",
    x: -96,
    y: -16,
    category: ["Nature"]
  }
]

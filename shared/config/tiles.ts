export interface TileSprite {
  name: string;
  x: number;
  y: number;
  category: string[];
}

export const tiles: TileSprite[] = [
  {
    name: "Grass",
    x: 0,
    y: 0,
    category: ["Nature"]
  },
  {
    name: "Dirt",
    x: -16,
    y: 0,
    category: ["Nature"]
  },
  {
    name: "Snow",
    x: -32,
    y: 0,
    category: ["Nature"]
  },
  {
    name: "Block of Amethyst",
    x: -48,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Block of Copper",
    x: -64,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Budding Amethyst",
    x: -80,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Calcite",
    x: -96,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Copper Ore",
    x: -112,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Waxed Cut Copper",
    x: -128,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Waxed Exposed Copper",
    x: -144,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Exposed Cut Copper",
    x: -160,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Weathered Copper",
    x: -176,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Weathered Cut Copper",
    x: -192,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Tuff",
    x: -208,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Oxidized Copper",
    x: -224,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Oxidized Cut Copper",
    x: -240,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Unknown",
    x: -256,
    y: 0,
    category: []
  },
  {
    name: "Nether Portal",
    x: -272,
    y: 0,
    category: ["Nether"]
  },
  {
    name: "Block of Copper (All Types)",
    x: -288,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Cut Copper (All Types)",
    x: -304,
    y: 0,
    category: ["Nature", "Ore"]
  },
  {
    name: "Inverted Daylight Sensor",
    x: 0,
    y: -16,
    category: ["Redstone"]
  },
  {
    name: "Daylight Sensor",
    x: -16,
    y: -16,
    category: ["Redstone"]
  },
  {
    name: "Unknown2",
    x: -32,
    y: -16,
    category: ["Redstone"]
  },
  {
    name: "Sponge",
    x: -48,
    y: -16,
    category: ["Ocean"]
  },
  {
    name: "Dripstone Block",
    x: -64,
    y: -16,
    category: ["Ore"]
  },
  {
    name: "Wool (White)",
    x: -80,
    y: -16,
    category: ["Animal Product"]
  },
  {
    name: "Moss Block",
    x: -96,
    y: -16,
    category: ["Nature"]
  }
]

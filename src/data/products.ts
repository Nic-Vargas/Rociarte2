import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: "Pequeña" | "Mediana" | "Grande";
  plant: string;
  category: "Materas estándar" | "Materas personalizadas" | "Ecosistemas vivos" | "Plantas de interior" | "Plantas de exterior" | "Interior/Exterior";
  location: "Interior" | "Exterior" | "Ambos";
  image: string;
};

export const products: Product[] = [
  { id: "1", name: "Matera Floral Suculenta", description: "Matera pintada a mano con motivos florales y suculenta.", price: 45000, size: "Pequeña", plant: "Suculenta", category: "Materas personalizadas", location: "Interior", image: p1 },
  { id: "2", name: "Ecosistema Bosque Sereno", description: "Terrario en vidrio con musgo, piedras y mini plantas.", price: 95000, size: "Mediana", plant: "Bonsái", category: "Ecosistemas vivos", location: "Interior", image: p2 },
  { id: "3", name: "Matera Nombre Personalizado", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 60000, size: "Mediana", plant: "Cactus", category: "Materas personalizadas", location: "Interior", image: p3 },
  { id: "4", name: "Cactus Hojas Acuarela", description: "Mini cactus en matera blanca con diseño botánico.", price: 38000, size: "Pequeña", plant: "Flores", category: "Plantas de interior", location: "Interior", image: p4 },
  { id: "5", name: "Pothos Colgante Macramé", description: "Pothos en matera artesanal con macramé natural.", price: 78000, size: "Mediana", plant: "Frutal", category: "Interior/Exterior", location: "Ambos", image: p5 },
  { id: "6", name: "Lavanda Jardín Terracota", description: "Lavanda fresca en matera grande para exteriores.", price: 110000, size: "Grande", plant: "Lavanda", category: "Plantas de exterior", location: "Exterior", image: p6 },
];

export const categories = [
  "Materas estándar",
  "Materas personalizadas",
  "Ecosistemas vivos",
  "Plantas de interior",
  "Plantas de exterior",
  "Interior/Exterior",
] as const;

import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/Tetera.jpeg";
import p3 from "@/assets/DragonBall.jpeg";
import p4 from "@/assets/Groot.jpeg";
import p5 from "@/assets/Lengua2.jpeg";
import p6 from "@/assets/Legua.jpeg";
import p7 from "@/assets/Matera Simple.jpeg";
import p8 from "@/assets/Matera Simple1.jpeg";
import p9 from "@/assets/Matera Simple2.jpeg";
import p10 from "@/assets/Matera Simple3.jpeg";
import p11 from "@/assets/Matera Simple4.jpeg";
import p12 from "@/assets/Matera Simple5.jpeg";
import p13 from "@/assets/Matera Simple6.jpeg";
import p14 from "@/assets/Matera Simple7.jpeg";
import p15 from "@/assets/DragonBall2.jpeg";
import p16 from "@/assets/DragonBall3.jpeg";
import p17 from "@/assets/DragonBall4.jpeg";
import p18 from "@/assets/DragonBall5.jpeg";
import p19 from "@/assets/DragonBall6.jpeg";
import p20 from "@/assets/Starwars.jpeg";
import p21 from "@/assets/Starwars1.jpeg";
import p22 from "@/assets/Starwars2.jpeg";
import p23 from "@/assets/Starwars3.jpeg";
import p24 from "@/assets/Starwars4.jpeg";
import p25 from "@/assets/Starwars5.jpeg";
import p26 from "@/assets/Starwars6.jpeg";
import p27 from "@/assets/Starwars7.jpeg";
import p28 from "@/assets/Starwars8.jpeg";
import p29 from "@/assets/Enamorados.jpeg";
import p30 from "@/assets/Enamorados1.jpeg";
import p31 from "@/assets/Enamorados2.jpeg";
import p32 from "@/assets/Enamorados3.jpeg";
import p33 from "@/assets/Enamorados4.jpeg";
import p34 from "@/assets/Enamorados5.jpeg";
import p35 from "@/assets/Excabacion.jpeg";
import p36 from "@/assets/Faro.jpeg";
import p37 from "@/assets/Finca.jpeg";
import p38 from "@/assets/Finca1.jpeg";
import p39 from "@/assets/finca2.jpeg";
import p40 from "@/assets/finca4.jpeg";
import p41 from "@/assets/finca5.jpeg";
import p42 from "@/assets/finca6.jpeg";
import p43 from "@/assets/finca7.jpeg";
import p44 from "@/assets/Ton&Jerry.jpeg";
import p45 from "@/assets/Jardin Ada.jpeg";
import p46 from "@/assets/Jardin Ada2.jpeg";
import p47 from "@/assets/Pesebre.jpeg";
import p48 from "@/assets/Pesebre1.jpeg";
import p49 from "@/assets/MonstersINC.jpeg";
import p50 from "@/assets/MonstersINC1.jpeg";
import p51 from "@/assets/Coco.jpeg";
import p52 from "@/assets/Coco2.jpeg";
import p53 from "@/assets/Coco3.jpeg";
import p54 from "@/assets/Wall-E.jpeg";




export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: "Pequeña" | "Mediana" | "Grande";
  plant: string;
  category: "Materas estándar" | "Materas personalizadas" | "Ecosistemas vivos" | "Plantas de interior" | "Plantas de exterior" | "Interior/Exterior";
  location: "Interior" | "Exterior" | "Interior-Exterior";
  image: string;
};

export const products: Product[] = [
  { id: "1", name: "Matera Harry Potter", description: "Matera pintada a mano con diseño de Harry Potter", price: 150000, size: "Mediana", plant: "Bonsai", category: "Materas personalizadas", location: "Interior", image: p1 },
  { id: "2", name: "Cáctus", description: "Ceramica pintada a mano mini", price: 60000, size: "Mediana", plant: "Cáctus", category: "Materas estándar", location: "Interior-Exterior", image: p2 },
  { id: "3", name: "Matera Dragon Ball", description: "Matera pintada a mano con diseño de Dragon Ball", price: 300000, size: "Grande", plant: "Pino Junipero", category: "Materas personalizadas", location: "Interior", image: p3 },
  { id: "4", name: "Groot", description: "Ceramica pintada a mano", price: 120000, size: "Mediana", plant: "Suculentas", category: "Plantas de interior", location: "Interior", image: p4 },
  { id: "5", name: "Lengua de Suegra", description: "Ceramica pintada a mano", price: 110000, size: "Mediana", plant: "Lengua de Suegra", category: "Interior/Exterior", location: "Exterior", image: p5 },
  { id: "6", name: "Lengua de Suegra", description: "Ceramica pintada a mano", price: 110000, size: "Mediana", plant: "Lengua de Suegra", category: "Plantas de exterior", location: "Exterior", image: p6 },
  { id: "7", name: "Pensamiento Mini", description: "Ceramica pintada a mano", price: 30000, size: "Mediana", plant: "Pensamiento", category: "Materas estándar", location: "Interior", image: p7 },
  { id: "8", name: "Pensamiento Mini", description: "Ceramica pintada a mano", price: 30000, size: "Mediana", plant: "Pensamiento", category: "Materas estándar", location: "Interior", image: p8 },
  { id: "9", name: "Pensamiento Mini", description: "Ceramica pintada a mano", price: 30000, size: "Mediana", plant: "Pensamiento", category: "Materas estándar", location: "Interior", image: p9 },
  { id: "10", name: "Cáctus", description: "Ceramica pintada a mano", price: 25000, size: "Mediana", plant: "Cáctus", category: "Interior/Exterior", location: "Interior-Exterior", image: p10 },
  { id: "11", name: "Pensamiento Mini", description: "Ceramica pintada a mano", price: 30000, size: "Mediana", plant: "Pensamiento", category: "Materas estándar", location: "Interior", image: p11 },
  { id: "12", name: "Cáctus", description: "Ceramica pintada a mano", price: 25000, size: "Mediana", plant: "Cáctus", category: "Interior/Exterior", location: "Interior", image: p12 },
  { id: "13", name: "Pensamiento Mini", description: "Ceramica pintada a mano", price: 30000, size: "Mediana", plant: "Pensamiento", category: "Materas estándar", location: "Interior", image: p13 },
  { id: "14", name: "Suculentas", description: "Ceramica pintada a mano", price: 25000, size: "Mediana", plant: "Suculentas", category: "Plantas de exterior", location: "Exterior", image: p14 },
  { id: "15", name: "Matera Dragon Ball", description: "Matera pintada a mano con diseño de Dragon Ball", price: 250000, size: "Grande", plant: "Bonsai", category: "Materas personalizadas", location: "Exterior", image: p15 },
  { id: "16", name: "Matera Dragon Ball", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 300000, size: "Grande", plant: "Bonsai", category: "Materas personalizadas", location: "Exterior", image: p16 },
  { id: "17", name: "Matera Dragon Ball", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 130000, size: "Mediana", plant: "Bonsai", category: "Materas personalizadas", location: "Exterior", image: p17 },
  { id: "18", name: "Matera Dragon Ball", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 250000, size: "Grande", plant: "Bonsai", category: "Materas personalizadas", location: "Exterior", image: p18 },
  { id: "19", name: "Matera Dragon Ball", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 180000, size: "Mediana", plant: "Bonsai", category: "Materas personalizadas", location: "Exterior", image: p19 },
  { id: "20", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 130000, size: "Mediana", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p20 },
  { id: "21", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 180000, size: "Mediana", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p21 },
  { id: "22", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 230000, size: "Grande", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p22 },
  { id: "23", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 180000, size: "Mediana", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p23 },
  { id: "24", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 150000, size: "Mediana", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p24 },
  { id: "25", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 180000, size: "Mediana", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p25 },
  { id: "26", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 250000, size: "Grande", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p26 },
  { id: "27", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 180000, size: "Mediana", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p27 },
  { id: "28", name: "Matera StarWars", description: "Terracota con tu nombre y hojas pintadas a mano.", price: 250000, size: "Grande", plant: "Cáctus", category: "Materas personalizadas", location: "Exterior", image: p28 },
  { id: "29", name: "Enamorados", description: "Ceramica pintada a mano", price: 80000, size: "Mediana", plant: "Suculentas", category: "Ecosistemas vivos", location: "Interior", image: p29 },
  { id: "30", name: "Enamorados", description: "Ceramica pintada a mano", price: 80000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Interior", image: p30 },
  { id: "31", name: "Enamorados", description: "Ceramica pintada a mano", price: 80000, size: "Mediana", plant: "Suculentas", category: "Ecosistemas vivos", location: "Interior", image: p31 },
  { id: "32", name: "Enamorados", description: "Ceramica pintada a mano", price: 110000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Interior", image: p32 },
  { id: "33", name: "Enamorados", description: "Ceramica pintada a mano", price: 110000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Interior", image: p33 },
  { id: "34", name: "Enamorados", description: "Ceramica pintada a mano", price: 110000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Interior", image: p34 },
  { id: "35", name: "Geologo", description: "Ceramica pintada a mano", price: 90000, size: "Mediana", plant: "Cáctus", category: "Ecosistemas vivos", location: "Interior", image: p35 },
  { id: "36", name: "Faro", description: "Ceramica pintada a mano", price: 250000, size: "Grande", plant: "Suculentas", category: "Ecosistemas vivos", location: "Exterior", image: p36 },
  { id: "37", name: "Ecosistema Finca", description: "Ceramica pintada a mano", price: 250000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Exterior", image: p37 },
  { id: "38", name: "Ecosistema Finca", description: "Ceramica pintada a mano", price: 130000, size: "Mediana", plant: "Rosa", category: "Ecosistemas vivos", location: "Exterior", image: p38 },
  { id: "39", name: "Ecosistema Finca", description: "Ceramica pintada a mano", price: 150000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Exterior", image: p39 },
  { id: "40", name: "Ecosistema Finca", description: "Ceramica pintada a mano", price: 180000, size: "Mediana", plant: "Suculentas", category: "Ecosistemas vivos", location: "Exterior", image: p40 },
  { id: "41", name: "Ecosistema Finca", description: "Ceramica pintada a mano", price: 130000, size: "Mediana", plant: "Suculentas", category: "Ecosistemas vivos", location: "Exterior", image: p41 },
  { id: "42", name: "Ecosistema Finca", description: "Ceramica pintada a mano", price: 130000, size: "Mediana", plant: "Suculentas", category: "Ecosistemas vivos", location: "Exterior", image: p42 },
  { id: "43", name: "Ecosistema Finca", description: "Ceramica pintada a mano", price: 130000, size: "Mediana", plant: "Suculentas", category: "Ecosistemas vivos", location: "Exterior", image: p43 },
  { id: "44", name: "Tom&Jerry", description: "Ceramica pintada a mano", price: 150000, size: "Mediana", plant: "Pino Junipero", category: "Ecosistemas vivos", location: "Exterior", image: p44 },
  { id: "45", name: "Ecosistema Hadas", description: "Ceramica pintada a mano", price: 180000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Exterior", image: p45 },
  { id: "46", name: "Ecosistema Hadas", description: "Ceramica pintada a mano", price: 180000, size: "Mediana", plant: "Bonsai", category: "Ecosistemas vivos", location: "Exterior", image: p46 },
  { id: "47", name: "Pesebres Vivos", description: "Ceramica pintada a mano", price: 150000, size: "Mediana", plant: "Suculentas-Rosa", category: "Ecosistemas vivos", location: "Exterior", image: p47 },
  { id: "48", name: "Pesebres Vivos", description: "Ceramica pintada a mano", price: 250000, size: "Grande", plant: "Bonsai", category: "Ecosistemas vivos", location: "Exterior", image: p48 },
  { id: "49", name: "Monsters INC", description: "Ceramica pintada a mano", price: 90000, size: "Pequeña", plant: "Suculentas", category: "Plantas de interior", location: "Interior-Exterior", image: p49 },
  { id: "50", name: "Monsters INC", description: "Ceramica pintada a mano", price: 90000, size: "Pequeña", plant: "Suculentas", category: "Plantas de interior", location: "Interior-Exterior", image: p50 },
  { id: "51", name: "Ecosistema COCO", description: "Ceramica pintada a mano", price: 130000, size: "Mediana", plant: "Suculentas", category: "Plantas de interior", location: "Interior", image: p51 },
  { id: "52", name: "Ecosistema COCO", description: "Ceramica pintada a mano", price: 130000, size: "Mediana", plant: "Suculentas", category: "Plantas de interior", location: "Interior", image: p52 },
  { id: "53", name: "Ecosistema COCO", description: "Ceramica pintada a mano", price: 130000, size: "Mediana", plant: "Suculentas", category: "Plantas de interior", location: "Interior", image: p53 },
  { id: "54", name: "Ecosistema Wall-E", description: "Ceramica pintada a mano", price: 150000, size: "Mediana", plant: "Cáctus", category: "Plantas de interior", location: "Interior-Exterior", image: p54 },
  



];

export const categories = [
  "Materas estándar",
  "Materas personalizadas",
  "Ecosistemas vivos",
  "Plantas de interior",
  "Plantas de exterior",
  "Interior/Exterior",
] as const;

import { motion } from "framer-motion";
import heroCabestany from "@/assets/hero-cabestany.png";

interface Colistier {
  name: string;
  age: number;
  profession: string;
}

const colistiers: Colistier[] = [
  { name: "Éric Poupet", age: 55, profession: "Directeur de magasin" },
  {
    name: "Fuster Pérez Virginie",
    age: 47,
    profession: "Développeuse informatique",
  },
  { name: "Gleizes Philippe", age: 62, profession: "Commerçant" },
  {
    name: "Alcaras Marie-Élisabeth",
    age: 51,
    profession: "Adjointe administrative",
  },
  { name: "Goncalves Michel", age: 55, profession: "Artisan Maçon" },
  {
    name: "Boisson Élodie",
    age: 44,
    profession: "Accompagnement éducatif et social",
  },
  { name: "Cornu Michel", age: 66, profession: "Enseignant" },
  { name: "Jonquères Valérie", age: 62, profession: "Secrétaire médicale" },
  { name: "Tronyo Jean-Louis", age: 59, profession: "Salarié" },
  {
    name: "Massana Véronique",
    age: 64,
    profession: "Gérante d'agence de communication",
  },
  {
    name: "Le Goff Patrice",
    age: 46,
    profession: "Brancardier, pompier volontaire",
  },
  { name: "Vidal Audrey", age: 42, profession: "Directrice administrative" },
  {
    name: "Rouhi Milad",
    age: 36,
    profession: "Juriste en protection juridique",
  },
  { name: "Goncalves Laura", age: 20, profession: "Employée de maison" },
  { name: "Lacalle Fabien", age: 58, profession: "Chef d'entreprise" },
  { name: "Camparols Emmanuelle", age: 55, profession: "Salariée" },
  {
    name: "Lenfant Philippe",
    age: 57,
    profession: "Professeur des Universités",
  },
  {
    name: "Creus Martine-Maryse",
    age: 74,
    profession: "Retraitée du ministère de la culture",
  },
  {
    name: "Corbacho Philippe",
    age: 38,
    profession: "Administrateur billetique",
  },
  { name: "Rondello Charlène", age: 34, profession: "Juriste" },
  { name: "Métairie Pierre", age: 62, profession: "Chef de projet logistique" },
  {
    name: "Husson Stéphanie",
    age: 46,
    profession: "Gérante de salon de coiffure",
  },
  {
    name: "Buisson Pierre",
    age: 67,
    profession: "Retraité du secteur touristique",
  },
  {
    name: "Perrault Christine",
    age: 67,
    profession: "Retraitée - Directrice d'agence bancaire",
  },
  {
    name: "Cavallier Michel",
    age: 79,
    profession:
      "Retraité, Vice-Président Association de protection de l'enfance",
  },
  {
    name: "Fouadé Sylvie",
    age: 67,
    profession:
      "Retraitée hospitalière, Présidente Association d'utilité publique",
  },
  {
    name: "Gaydé Rudy",
    age: 36,
    profession: "Chef d'équipe en imagerie médicale",
  },
  { name: "Peix Rita", age: 60, profession: "Professeur agrégé de Catalan" },
  { name: "Grandini Emmanuel", age: 46, profession: "Conducteur de bus" },
  {
    name: "Lerouvillois-Belluteau Marie-France",
    age: 77,
    profession: "Retraitée du Crédit Agricole",
  },
  { name: "Bergès Laurent", age: 48, profession: "Médecin biologiste" },
  {
    name: "De Los Santos Sophie",
    age: 53,
    profession: "Chargée de projet formation",
  },
  {
    name: "Vallot Jean-Michel",
    age: 67,
    profession: "Professeur agrégé d'éducation musicale",
  },
];

const EquipeSection = () => {
  return (
    <section id="equipe" className="section-padding bg-card">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Une équipe engagée
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            33 colistiers pour Cabestany
          </h2>
          <p className="mt-4 text-muted-foreground mx-auto">
            Des compétences variées au service d'un projet commun. Une même
            volonté : agir pour notre ville.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 rounded-2xl overflow-hidden bg-muted relative"
        >
          <div className="aspect-[21/9] w-full">
            <img
              src={heroCabestany}
              alt="Équipe Cabestany Avant Tout"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {colistiers.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.3) }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors duration-150"
            >
              <div className="flex items-center justify-center flex-shrink-0">
                <span className="font-serif font-bold text-lg text-primary/60 w-8 text-right tabular-nums">
                  {i + 1}.
                </span>
              </div>
              <div className="min-w-0">
                <span className="block font-sans font-semibold text-sm text-foreground truncate">
                  {c.name}
                </span>
                <span className="block font-sans text-xs text-muted-foreground">
                  {c.age} ans — {c.profession}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;

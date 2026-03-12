import { motion } from "framer-motion";
import heroCabestany from "@/assets/hero-cabestany.png";

interface Colistier {
  name: string;
  age: number;
  profession: string;
}

const colistiers: Colistier[] = [
  { name: "POUPET Éric", age: 55, profession: "Directeur de magasin" },
  {
    name: "FUSTER PEREZ Virginie",
    age: 47,
    profession: "Développeuse informatique",
  },
  { name: "GLEIZES Philippe", age: 62, profession: "Commerçant" },
  {
    name: "ALCARAS Marie-Elisabeth",
    age: 51,
    profession: "Adjoint administratif",
  },
  { name: "GONCALVES Michel", age: 55, profession: "Artisan Maçon" },
  {
    name: "BOISSON Elodie",
    age: 44,
    profession: "Accompagnant éducatif et social",
  },
  { name: "CORNU Michel", age: 66, profession: "Enseignant" },
  { name: "JONQUERES Valérie", age: 62, profession: "Secrétaire médicale" },
  { name: "TRONYO Jean-Louis", age: 59, profession: "Salarié" },
  {
    name: "MASSANA Véronica",
    age: 64,
    profession: "Gérante d'agence de communication",
  },
  {
    name: "LE GOFF Patrice",
    age: 46,
    profession: "Brancardier, pompier volontaire",
  },
  { name: "VIDAL Audrey", age: 42, profession: "Directrice administrative" },
  {
    name: "ROUHI Milad",
    age: 36,
    profession: "Juriste en protection juridique",
  },
  { name: "GONCALVES Laura", age: 20, profession: "Employée de maison" },
  { name: "LACAILLE Fabien", age: 58, profession: "Chef d'entreprise" },
  { name: "CAMPAROS Emmanuelle", age: 55, profession: "Salariée" },
  {
    name: "LENFANT Philippe",
    age: 57,
    profession: "Professeur des Universités",
  },
  {
    name: "CREUS Martine-Maryse",
    age: 74,
    profession: "Retraitée du ministère de la culture",
  },
  {
    name: "CORBACHO Philippe",
    age: 38,
    profession: "Administrateur billettique",
  },
  { name: "RONDELLO Charlène", age: 34, profession: "Juriste" },
  { name: "METAIRIE Pierre", age: 62, profession: "Chef de projet logistique" },
  {
    name: "HUSSON Stéphanie",
    age: 46,
    profession: "Gérante de salon de Coiffure",
  },
  {
    name: "BUISSON Pierre",
    age: 67,
    profession: "Retraité du secteur touristique",
  },
  {
    name: "PERRAULT Christine",
    age: 67,
    profession: "Retraité-Directrice d'agence bancaire",
  },
  {
    name: "CAVALLIER Michel",
    age: 79,
    profession:
      "Retraité, Vice-Président Association de protection de l'enfance",
  },
  {
    name: "FOUADE Sylvie",
    age: 67,
    profession:
      "Retraitée hospitalière, Présidente Association d'utilité publique",
  },
  {
    name: "GAYDE Rudy",
    age: 36,
    profession:
      "Chef d'équipe et de radioprotection en imagerie médicale",
  },
  { name: "PEIX Rita", age: 60, profession: "Professeur agrégé de Catalan" },
  { name: "GRANDIN Emmanuel", age: 46, profession: "Conducteur de bus" },
  {
    name: "LEROUVILLOIS – BELLUTEAU Marie-France",
    age: 77,
    profession: "Retraitée du Crédit Agricole",
  },
  { name: "BERGES Laurent", age: 48, profession: "Médecin biologiste" },
  {
    name: "DE LOS SANTOS Sophie",
    age: 53,
    profession: "Chargée de projet formation",
  },
  {
    name: "VALLOT Jean-Michel",
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

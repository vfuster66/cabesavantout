import { motion } from "framer-motion";
import { Handshake, Search, MessageCircle } from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Proximité",
    description:
      "Une mairie à l'écoute, des élus présents sur le terrain, un dialogue permanent avec les habitants.",
  },
  {
    icon: Search,
    title: "Rigueur",
    description:
      "Maîtriser les dépenses, moderniser l'administration, gérer les finances avec bon sens.",
  },
  {
    icon: MessageCircle,
    title: "Dialogue",
    description:
      "Ateliers participatifs, référents de quartier, une communication claire et régulière.",
  },
];

const ValuesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Notre méthode
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Proximité · Rigueur · Dialogue
          </h2>
          <p className="mt-4 text-muted-foreground mx-auto">
            Une mairie ne se transmet pas. Elle se choisit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground mx-auto">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

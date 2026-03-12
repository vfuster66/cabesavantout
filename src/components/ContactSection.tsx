import { motion } from "framer-motion";
import { Mail, Phone, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Restons en contact
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Contactez-nous
          </h2>
          <p className="mt-4 text-muted-foreground mx-auto">
            Vous avez une question, une suggestion ou souhaitez rejoindre notre
            équipe ?
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          <motion.a
            href="mailto:cabesavantout@yahoo.com"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 bg-card rounded-2xl p-5 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="block text-sm font-semibold text-foreground">
                Email
              </span>
              <span className="text-sm text-muted-foreground">
                cabesavantout@yahoo.com
              </span>
            </div>
          </motion.a>

          <motion.a
            href="tel:+33688994860"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="flex items-center gap-3 bg-card rounded-2xl p-5 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="block text-sm font-semibold text-foreground">
                Téléphone
              </span>
              <span className="text-sm text-muted-foreground">
                +33 6 88 99 48 60
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/cabesavantout"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-3 bg-card rounded-2xl p-5 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Facebook className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="block text-sm font-semibold text-foreground">
                Facebook
              </span>
              <span className="text-sm text-muted-foreground">
                Cabestany Avant Tout
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

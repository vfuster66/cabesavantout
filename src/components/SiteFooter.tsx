import { Mail, Phone, Facebook } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif font-bold text-lg text-background mb-1">
              Cabestany <span>Avant Tout</span>
            </p>
            <p className="text-sm text-background/60">
              Élections Municipales 2026 — Liste conduite par Éric Poupet
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs uppercase tracking-wide text-background/50">
              Nous contacter
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="mailto:cabesavantout@yahoo.com"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+33688994860"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/cabesavantout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-background/40 text-center md:text-left">
          © 2026 Cabestany Avant Tout. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;

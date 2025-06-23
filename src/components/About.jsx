// components/About.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const secciones = t("about.sections", { returnObjects: true });

  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 flex flex-col items-center z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl bg-black/60 text-base p-6 rounded-lg shadow-lg border border-cyan-400 backdrop-blur-sm"
      >
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold mb-6"># {t("about.title")}</h2>

        <div className="space-y-4">
          {secciones.map((bloque, i) => (
            <div key={i}>
              <h3 className="text-lg text-yellow-200 font-semibold mb-1">{bloque.titulo}</h3>
              <p className="text-green-300 text-sm whitespace-pre-line">{bloque.contenido}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

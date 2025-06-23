// components/Projects.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const proyectos = t("projects.list", { returnObjects: true });

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-transparent flex flex-col items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold mb-8"># {t("projects.title")}</h2>

        <div className="grid gap-6">
          {proyectos.map((proy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-black/60 border border-cyan-400 p-6 rounded-lg backdrop-blur-sm shadow-lg"
            >
              <p className="text-green-300 font-semibold">{proy.nombre}</p>
              <p className="text-yellow-200 text-sm">{proy.descripcion}</p>
              {proy.tecnologias && (
                <p className="text-cyan-400 text-sm mt-1">Tecnologías: {proy.tecnologias.join(", ")}</p>
              )}
              {proy.link && (
                <a href={proy.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm">Ver proyecto</a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

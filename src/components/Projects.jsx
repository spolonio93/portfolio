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
        className="w-full max-w-5xl"
      >
        <h2 className="text-3xl text-cyan-400 font-bold mb-10"># {t("projects.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-black/60 border border-cyan-500 p-5 rounded-xl backdrop-blur-md shadow-lg flex flex-col items-center"
            >
              {proy.logo && (
                <img
                  src={proy.logo}
                  alt={`Logo ${proy.nombre}`}
                  className="w-20 h-20 object-contain mb-4"
                />
              )}

              <h3 className="text-green-300 text-xl font-semibold mb-2">{proy.nombre}</h3>

              <p className="text-yellow-200 text-sm mb-3 text-center">{proy.descripcion}</p>

              {proy.tecnologias && (
                <div className="text-cyan-300 text-sm mb-4">
                  <strong>Tecnologías:</strong> {proy.tecnologias.join(", ")}
                </div>
              )}

              {proy.link && (
                <a
                  href={proy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-4 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-400 transition"
                >
                  Ver proyecto
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

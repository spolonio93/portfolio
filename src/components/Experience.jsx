import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Experience() {
  const { t } = useTranslation();
  const experiencias = t("experience.list", { returnObjects: true });

  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-transparent flex flex-col items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold mb-8"># {t("experience.title")}</h2>

        <div className="grid gap-6">
          {experiencias.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-black/60 border border-cyan-400 p-6 rounded-lg backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={exp.logo} alt={exp.empresa} className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-200">{exp.cargo}</h3>
                  <p className="text-sm text-cyan-400">{exp.empresa} · {exp.fecha}</p>
                  {exp.ubicacion && <p className="text-xs text-gray-400">{exp.ubicacion}</p>}
                </div>
              </div>
              <ul className="list-disc list-inside text-green-300 space-y-1 pl-2">
                {exp.descripcion.map((punto, idx) => (
                  <li key={idx}>{punto}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

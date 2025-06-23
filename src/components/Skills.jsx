// components/Skills.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const habilidades = t("skills.list", { returnObjects: true });

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-transparent flex flex-col items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold mb-8"># {t("skills.title")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {habilidades.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-black/60 border border-cyan-400 p-4 rounded-lg backdrop-blur-sm shadow"
            >
              <p className="text-green-300">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

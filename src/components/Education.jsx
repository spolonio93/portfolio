// components/Education.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const formaciones = t("education.list", { returnObjects: true });

  return (
    <section id="education" className="min-h-screen px-6 py-20 bg-transparent flex flex-col items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold mb-8"># {t("education.title")}</h2>

        <div className="grid gap-6">
          {formaciones.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-black/60 border border-cyan-400 p-6 rounded-lg backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <img src={edu.logo} alt={edu.institucion} className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-200">{edu.titulo}</h3>
                  <p className="text-sm text-cyan-400">{edu.institucion} · {edu.fecha}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-green-300 space-y-1 pl-2">
                {edu.detalles.map((detalle, idx) => (
                  <li key={idx}>{detalle}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

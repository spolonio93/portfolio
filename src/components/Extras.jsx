// components/Extras.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Extras() {
  const { t } = useTranslation();
  const idiomas = t("extras.languages", { returnObjects: true });
  const certificados = t("extras.certifications", { returnObjects: true });

  return (
    <section id="extras" className="min-h-screen px-6 py-20 bg-transparent flex flex-col items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold mb-8"># {t("extras.title")}</h2>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/60 border border-cyan-400 p-6 rounded-lg backdrop-blur-sm shadow-lg"
          >
            <h3 className="text-lg font-semibold text-yellow-200 mb-2">🌐 Idiomas</h3>
            <ul className="list-disc list-inside text-green-300 space-y-1 pl-2">
              {idiomas.map((lang, i) => (
                <li key={i}>{lang.idioma} – {lang.nivel}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/60 border border-cyan-400 p-6 rounded-lg backdrop-blur-sm shadow-lg"
          >
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">🎓 Certificaciones</h3>
            <div className="grid gap-4">
              {certificados.map((cert, i) => (
                <div key={i} className="flex items-start gap-4">
                  <img src={cert.logo} alt={cert.institucion} className="w-10 h-10 object-contain" />
                  <div>
                    <p className="text-green-300 font-semibold">{cert.titulo}</p>
                    <p className="text-cyan-400 text-sm">{cert.institucion} / {cert.fecha}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

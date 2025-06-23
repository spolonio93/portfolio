// components/Contacto.jsx
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 flex flex-col items-center z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-black/60 text-base p-6 rounded-lg shadow-lg border border-cyan-400 backdrop-blur-sm"
      >
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-bold mb-6"># Contacto</h2>

        <div className="space-y-4 text-green-300">
          <p>
            <span className="text-yellow-200">📞 Teléfono:</span>{" "}
            <a href="tel:+34612345678" className="text-blue-400 hover:underline">
              +34 659 799 600
            </a>
          </p>
          <p>
            <span className="text-yellow-200">✉️ Correo:</span>{" "}
            <a href="mailto:sergio.polonio@email.com" className="text-blue-400 hover:underline">
              sergiopoloniovazquez@gmail.com
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

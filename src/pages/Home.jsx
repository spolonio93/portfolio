// Home.jsx con estilo de código coloreado, responsive y multilenguaje
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import perfilImg from "/assets/perfil.png";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Extras from "../components/Extras";
import esFlag from '/assets/es.webp';
import enFlag from '/assets/en.png';
import deFlag from '/assets/de.png';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#003300";
      ctx.shadowColor = "#001100";
      ctx.shadowBlur = 1;
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative font-mono text-white overflow-hidden">
      <canvas
        id="matrix-canvas"
        className="fixed top-0 left-0 w-full h-full z-0"
      />

      {/* Selector de idioma */}
      <div className="absolute top-4 right-4 z-20 flex gap-3">
        <button
          onClick={() => i18n.changeLanguage('es')}
          title="Español"
          className="hover:scale-105 transition-transform"
        >
          <img src={esFlag} alt="Español" className="w-6 h-6 rounded-sm shadow" />
        </button>

        <button
          onClick={() => i18n.changeLanguage('en')}
          title="English"
          className="hover:scale-105 transition-transform"
        >
          <img src={enFlag} alt="English" className="w-6 h-6 rounded-sm shadow" />
        </button>

        <button
          onClick={() => i18n.changeLanguage('de')}
          title="Deutsch"
          className="hover:scale-105 transition-transform"
        >
          <img src={deFlag} alt="Deutsch" className="w-6 h-6 rounded-sm shadow" />
        </button>
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-24 py-20 z-10 relative">
        <motion.img
          src={perfilImg}
          alt="Foto de perfil"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-cyan-400 shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl bg-black/60 text-sm sm:text-base p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-cyan-400 backdrop-blur-sm"
        >
          <pre className="whitespace-pre text-green-300 font-mono">
            <span className="text-yellow-300">dev</span> = &#123;{"\n"}
            &nbsp;&nbsp;<span className="text-cyan-400">"nombre"</span>: <span className="text-yellow-200">"{t('hero.nombre')}"</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-cyan-400">"rol"</span>: <span className="text-yellow-200">"{t('hero.rol')}"</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-cyan-400">"stack"</span>: [ {"\n"}
            {
              t('hero.stack', { returnObjects: true }).map((tech, i, arr) => (
                <span key={i}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">"{tech}"</span>{i < arr.length - 1 ? "," : ""}
                  {"\n"}
                </span>
              ))
            }
            &nbsp;&nbsp;],{"\n"}
            &nbsp;&nbsp;<span className="text-cyan-400">"github"</span>:{" "}
            <span className="text-blue-400 underline">
              "<a href={t('hero.github')} target="_blank" rel="noopener noreferrer">
                {t('hero.github')}
              </a>"
            </span>,{"\n"}
            &nbsp;&nbsp;<span className="text-cyan-400">"linkedin"</span>:{" "}
            <span className="text-blue-400 underline">
              "<a href={t('hero.linkedin')} target="_blank" rel="noopener noreferrer">
                {t('hero.linkedin')}
              </a>"
            </span>{"\n"}
          &#125;
          </pre>





        </motion.div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center z-10">
          <a href="#about" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded shadow text-sm sm:text-base">
            {t('buttons.about')}
          </a>
          <a href="#projects" className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded shadow text-sm sm:text-base">
            {t('buttons.projects')}
          </a>
          <a href="#skills" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded shadow text-sm sm:text-base">
            {t('buttons.skills')}
          </a>
          <a href="#experience" className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded shadow text-sm sm:text-base">
            {t('buttons.experience')}
          </a>
          <a href="#education" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded shadow text-sm sm:text-base">
            {t('buttons.education')}
          </a>
          <a href="#extras" className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded shadow text-sm sm:text-base">
            {t('buttons.extras')}
          </a>
          <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded shadow text-sm sm:text-base">
            {t('buttons.contact')}
          </a>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Extras />
      <Contact />
    </main>
  );
}

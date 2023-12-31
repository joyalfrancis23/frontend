import { styles } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#171D1C]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#7A918D]`}>
            Hi there, this is <span className="text-[#171D1C]">Samaanata</span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-[#7A918D]`}>
            An AI Tool to
            <br className="sm:block hidden" /> check Incongruity between text and pdf
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#upload">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#7A918D] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-[#7A918D] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

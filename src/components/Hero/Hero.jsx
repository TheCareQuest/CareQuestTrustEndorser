import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: "Infinity",
        repeatType: "mirror",
        duration: 10,
      },
    },
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Welcome Trusties
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des" style={{ zIndex: 2 }}>
            <span>Empower Your Voice, Shape the Care Community</span>
            <span>Focus on the cause, let The Care Quest handle the rest</span>
          </div>
          <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            style={{ zIndex: 1 }}
          >
            Care Quest
          </motion.div>
        
          <div className="flexCenter stats" style={{ zIndex: 2 }}>
            {/* Your existing stats content */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1000} end={5000} duration={4} /> <span>+</span>
              </span>
              <span className="statText "> Hope Seekers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={500} end={700} duration={4} />
                <span>+</span>
              </span>
              <span className="statText"> Care Providers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={200} duration={4} />
                <span>+</span>
              </span>
              <span className="statText">Campaigns</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={100} duration={4} />
                <span>+</span>
              </span>
              <span className="statText">Trust Endorsers</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero.jpg" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion, useAnimation, useTransform, useMotionValue } from 'framer-motion';
import './ParallaxComponent.css';

const ParallaxComponent = () => {
  const scrollY = useMotionValue(0);

  const layer1Animation = useAnimation();
  const layer2Animation = useAnimation();

  scrollY.onChange((value) => {
    layer1Animation.start({ y: value / 2, opacity: 1 - value / 500 });
    layer2Animation.start({ y: value / 4, opacity: 1 - value / 500 });
  });

  return (
    <div className="parallax-container">
      <motion.div
        className="parallax-layer"
        style={{ backgroundImage: 'url("mountains.png")' }}
        animate={layer1Animation}
      />
      <motion.div
        className="parallax-layer"
        style={{ backgroundImage: 'url("stars.png")' }}
        animate={layer2Animation}
      />
      <motion.div className="parallax-layer" style={{ backgroundImage: 'url("planets.png")' }} />
      <motion.div className="content-container">
        <motion.h1
          style={{
            opacity: useTransform(scrollY, [0, 100], [1, 0]),
            y: useTransform(scrollY, [0, 100], [0, -50]),
          }}
        >
          Super Cool Parallax!
        </motion.h1>
      </motion.div>
      <motion.div
        className="scroll-indicator"
        animate={{
          opacity: useTransform(scrollY, [0, 100], [1, 0]),
          y: useTransform(scrollY, [0, 100], [0, 20]),
        }}
      >
        Scroll Down
      </motion.div>
      <motion.div
        className="scroll-trigger"
        onScroll={(event, info) => {
          scrollY.set(info.offset.y);
        }}
      />
    </div>
  );
};

export default ParallaxComponent;

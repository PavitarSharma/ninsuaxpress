import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ children, className }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.section className={`${className} xl:h-screen h-auto xl:my-16 relative`} style={{ y }}>
      {children}
    </motion.section>
  );
};

export default ParallaxSection;

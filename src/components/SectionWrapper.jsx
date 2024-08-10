import { motion } from "framer-motion";
import { staggerContainer } from "../variants";
const SectionWrapper = ({ children, className, idName}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${className}`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
};

export default SectionWrapper;

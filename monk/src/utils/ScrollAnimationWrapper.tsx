import { motion } from "framer-motion";

export default function ScrollAnimationWrapper({ children, className, ...props }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import { useRef } from "react";
import { motion, useInView, type MotionProps } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
}

const AnimateOnScroll = ({
  children,
  className,
  initial = { opacity: 0, y: 40 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: "easeOut" },
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;

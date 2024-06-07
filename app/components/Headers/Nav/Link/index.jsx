import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animated";
import React from "react";

const Index = React.memo(({ data, isActive, setSelectedIndicator }) => {
  if (!data) return null; // Menangani jika data undefined

  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
});

Index.displayName = "Index"; // Menambahkan display name

export default Index;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Hyperst8 | About",
  description: "This is the about page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="About page image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h3 className={styles.title}>Who are we?</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            qui veniam sit, dicta nam ducimus, quae alias accusamus consequatur
            exercitationem veritatis eveniet est commodi, expedita totam a
            cumque atque sint.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>What we do?</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dignissimos recusandae, qui blanditiis reprehenderit minus sapiente
            deleniti explicabo asperiores nostrum quae est necessitatibus.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

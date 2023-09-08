import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Desc: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus deleniti velit id. Autem eligendi officia aut omnis
            labore! Delectus velit ipsum eius distinctio soluta, ipsa sunt id
            nemo commodi fugiat?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16628785/pexels-photo-16628785/free-photo-of-sot-modell-luksus-lepper.jpeg"
              alt="Author image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jasmine Tea</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg"
            alt="Blog single image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          fuga enim veniam, voluptate itaque repudiandae dolorum consequuntur
          alias molestiae in reiciendis, porro doloribus, saepe quasi natus est
          adipisci ipsa necessitatibus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Numquam placeat corrupti dignissimos quibusdam
          mollitia sunt vel, adipisci animi atque corporis ab in aperiam
          voluptate expedita unde, incidunt temporibus ad vitae?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          fuga enim veniam, voluptate itaque repudiandae dolorum consequuntur
          alias molestiae in reiciendis, porro doloribus, saepe quasi natus est
          adipisci ipsa necessitatibus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Praesentium est quo repellat non, consectetur ipsum
          dolorum itaque, quam totam, explicabo aut exercitationem nisi fuga
          dolor dolore velit maxime. Fugiat, cupiditate.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

// app/page.js or pages/index.js

import Link from "next/link";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Left Side with Name */}
      <div className={styles.leftSection}>
        <h1>Artem Ruzaev</h1>
        <div className={styles.contactInfo}>
          <p>Toronto, ON, L4H 1R1</p>
          <p>
            <a href="tel:+16475469135">(647) 546-9135</a>
          </p>
          <p>
            <a href="mailto:ruzaev.artem21@gmail.com">
              ruzaev.artem21@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Right Side with Timeline and Skills */}
      <div className={styles.rightSection}>
        <h2>Timeline</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span className={styles.date}>Present</span>
            <div className={styles.timelineContent}>
              <strong>React Native Reading App ("Pock")</strong>
              <p>
                Currently developing a reading app using React Native, focusing
                on cross-device syncing and a seamless reading experience.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.date}>May 2024 - Sept 2024</span>
            <div className={styles.timelineContent}>
              <strong>Full Stack Web Developer Intern</strong> - Hofeto, Toronto
              <p>
                Enhanced SaaS dashboard performance and integrated NLP models.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.date}>Jun 2023 - Sept 2023</span>
            <div className={styles.timelineContent}>
              <strong>Front-End WordPress Developer</strong> - Noah Education
              Fund, USA
              <p>Customized WordPress themes, optimizing performance.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.date}>Feb 2024 - Apr 2024</span>
            <div className={styles.timelineContent}>
              <strong>Full Stack Java Storefront</strong> - Humber College
              <p>Java application for storefront and inventory management.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.date}>Feb 2024 - Apr 2024</span>
            <div className={styles.timelineContent}>
              <strong>Wallpaper Generator MERN Application</strong> - Humber
              College
              <p>
                MERN stack app to serve personalized wallpapers via Unsplash
                API.
              </p>
            </div>
          </div>
        </div>

        <h3>Top Skills</h3>
        <ul className={styles.skills}>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Node.js</li>
          <li>Docker</li>
          <li>SQL</li>
        </ul>
      </div>

      {/* Bottom Left with Social Links */}
      <div className={styles.socialLinks}>
        <Link href="https://www.linkedin.com/in/your-profile" target="_blank">
          LinkedIn
        </Link>
        <Link href="https://github.com/your-profile" target="_blank">
          GitHub
        </Link>
        <Link href="https://your-portfolio.com" target="_blank">
          Portfolio
        </Link>
      </div>
    </div>
  );
}

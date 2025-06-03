import { Link } from "react-router";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>CityPath: Find the Fastest Route</h1>
        <p className={styles.description}>
          Explore cities across the globe and visualize the shortest path
          between them using Dijkstra’s algorithm. A modern way to understand
          routing and graph theory.
        </p>
        <Link to="/explore" className={styles.link}>
          <button className={styles.button}>Get Started</button>
        </Link>
      </section>
    </main>
  );
};

export default LandingPage;

import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const MaintanencePage: NextPage = () => {
  return (
    <div className={styles.maintanencePage}>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <section className={styles.maintanencePageInner}>
        <FrameComponent />
      </section>
    </div>
  );
};

export default MaintanencePage;

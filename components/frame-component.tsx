import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.innerContentParent, className].join(" ")}>
      <div className={styles.innerContent}>
        <div className={styles.sorryParent}>
          <h1 className={styles.sorry}>Sorry!</h1>
          <h1 className={styles.ourWebsiteIsContainer}>
            <span className={styles.our}>{`our `}</span>website is under
            construction
          </h1>
          <div className={styles.weArePreparingContainer}>
            <span className={styles.weArePreparingContainer1}>
              <span className={styles.our}>We</span> are preparing something
              amazing and exciting for you. Please come back later!
              <span className={styles.our}>{` `}</span>
            </span>
          </div>
        </div>
      </div>
      <img
        className={styles.component6Icon}
        loading="lazy"
        alt=""
        src="/component-6.svg"
      />
    </div>
  );
};

export default FrameComponent;

import type { NextPage } from "next";
import Head from "next/head";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const MaintanencePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Telemate AI</title>
                <meta name="description" content="Description of your website" />
                <link rel="icon" href="/telemateicon.svg" type="image/svg+xml" />
            </Head>
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
        </>
    );
};

export default MaintanencePage;

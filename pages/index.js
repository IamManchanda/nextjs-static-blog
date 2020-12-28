import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Next.js Static Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        <a href="https://nextjs.org" target="_blank">
          Next.js
        </a>{" "}
        Static Blog!
      </h1>

      <p className={styles.description}>
        <ol>
          <li>
            <Link href="/faq">
              <a>Go to FAQ.</a>
            </Link>
          </li>
        </ol>
      </p>
    </Fragment>
  );
}

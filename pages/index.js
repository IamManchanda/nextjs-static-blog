import fs from "fs";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Fragment } from "react";

function Home({ postSlugs }) {
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
          {postSlugs.map((slug) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{`/blog/${slug}`}</a>
              </Link>
            </li>
          ))}
        </ol>
      </p>
    </Fragment>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  return {
    props: {
      postSlugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
}

export default Home;

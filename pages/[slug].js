import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import marked from "marked";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

function Post({ contentWithHtmlMarkup, data }) {
  return (
    <Fragment>
      <Head>
        <title>{data.title} | Next.js Static Blog</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentWithHtmlMarkup }} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  console.log(JSON.stringify({ files }, null, 2));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(JSON.stringify({ paths }, null, 2));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetaData = fs
    .readFileSync(path.join("posts", `${slug}.md`))
    .toString();

  const parsedMarkdown = matter(markdownWithMetaData);
  const { content, data } = parsedMarkdown;
  const contentWithHtmlMarkup = marked(content);

  return {
    props: {
      contentWithHtmlMarkup,
      data,
    },
  };
}

export default Post;

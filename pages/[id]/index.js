import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import supabase from "../../utils/supabase";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data: post, error } = await supabase
        .from("posts")
        .select()
        .match({ id: router.query.id })
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(post);
      }
    };

    fetchPost();
  }, [router.query.id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{router.query.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

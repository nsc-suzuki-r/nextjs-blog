import Layout from '../components/layout';
import Posts from '../components/posts';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <Posts></Posts>
      </section>
    </Layout>
  );
}
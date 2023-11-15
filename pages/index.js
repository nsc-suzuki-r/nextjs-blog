import Layout from '../components/layout';
import Posts from '../components/posts';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <Posts home></Posts>
      </section>
    </Layout>
  );
}
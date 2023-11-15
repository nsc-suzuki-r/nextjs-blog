import Layout from '../../components/layout';
import Posts from '../../components/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Post() {
  return (
    <Layout children>
      <section className={utilStyles.headingMd}>
        <Posts children></Posts>
      </section>
    </Layout >
  )
}

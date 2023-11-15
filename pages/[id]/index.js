import Layout from '../../components/layout';
import Post from '../../components/posts/post';
import utilStyles from '../../styles/utils.module.css';

export default function Children() {
  return (
    <Layout children>
      <section className={utilStyles.headingMd}>
        <Post></Post>
      </section>
    </Layout >
  )
}

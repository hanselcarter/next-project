import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage = ({ post }) => {
  return (
    <>
      <main>
        <h1>{post.title}</h1>
        <article
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        ></article>
      </main>
    </>
  );
};

export default PostPage;

import { Fragment } from 'react';
import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All my posts</title>
        <meta name="description" content="List of all programming related tutorials and posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
  
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1000,
  };
}

export default AllPostsPage;

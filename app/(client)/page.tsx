import Header from "../components/Header";
import { client } from "@/sanity/lib/client";
import { Post } from "../components/utils/interface";
import PostComponent from "../components/PostComponent";
async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");
  return (
    <div>
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}

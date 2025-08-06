import { useEffect, useState } from "react";
import { getAllBlogPost } from "../api/blogPost";
import BlogCard from "../components/common/BlogCard";
import { Header } from "../components/common/Header";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
      try {
        const data = await getAllBlogPost();
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div>
      <Header/>
      <div className="max-w-5xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts 📝</h1>
      <div className="flex flex-col mb-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
      </div>
  );
}
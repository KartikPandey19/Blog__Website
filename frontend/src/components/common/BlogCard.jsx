export default function BlogCard({ post }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition-all">
      <div className="flex gap-4">
        <div className="flex-1">
            <img src="https://sderay.com/wp-content/uploads/2025/03/reddit.jpg" className="rounded-lg"></img>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">{post.title}</h2>
      <p className="text-gray-700 text-sm">{post.content.slice(0, 120)}...</p>
      <p className="text-xs text-gray-400 mt-2">By {post.author?.name || "Unknown"} | {new Date(post.date).toLocaleDateString()}</p>
      </div>
      </div>
    </div>
  );
}
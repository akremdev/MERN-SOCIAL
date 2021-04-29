import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6089fa42a4bf4c2115d3c732")
      setPosts(res.data)
    };
    fetchPosts();
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
import Image from "next/image";
import styles from "./page.module.css";
import { homePosts } from "./halperFunctions/Helpers";
import PostCard from "./components/PostCard";

export default function Home() {
  const posts = homePosts;
  return <PostCard {...posts[0]} />;
}

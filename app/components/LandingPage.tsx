"use client";

import { useEffect, useState } from "react";
import { Post } from "../types/cardTypes";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";

export default function LandingPage({ posts }: { posts: Post[] }) {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pagePosts, setPagePosts] = useState<Post[]>([]);

  const getNextPosts = async () => {
    if (pagePosts) {
      const nextPosts: Post[] = posts.slice(
        pagePosts.length,
        pagePosts.length + 5
      );
      setPagePosts((pagePosts) => [...pagePosts!, ...nextPosts]);
    }
  };

  useEffect(() => {
    if (!pagePosts || pagePosts.length < 1) {
      setPagePosts(posts.slice(0, 3));
    } else {
      setPagePosts(posts.slice(0, pagePosts.length));
    }
  }, [posts]);

  useEffect(() => {
    if (pagePosts) {
      setHasMore(posts.length > pagePosts.length);
    }
  }, [pagePosts]);

  return (
    <InfiniteScroll
      hasMore={hasMore}
      loader={undefined}
      next={getNextPosts}
      key="landingPageScroll"
      dataLength={pagePosts.length}
      style={{ overflow: "hidden" }}
    >
      {pagePosts.map((post, idx) => (
        <PostCard key={`#${idx}`} {...post} />
      ))}
    </InfiniteScroll>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Post } from "../types/cardTypes";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import { useWindowSize } from "../hooks/windowSizeHook";
import { constants } from "../types/constants";

export default function LandingPage({ posts }: { posts: Post[] }) {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pagePosts, setPagePosts] = useState<Post[]>([]);
  const windowSize = useWindowSize();

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
      style={{
        overflow: "hidden",
        marginTop: windowSize > constants.window.maxMobileWindowSize ? "8%" : 0,
        marginBottom:
          windowSize <= constants.window.maxMobileWindowSize ? "10%" : 0,
      }}
    >
      {pagePosts.map((post, idx) => (
        <PostCard key={`#${idx}`} {...post} />
      ))}
    </InfiniteScroll>
  );
}

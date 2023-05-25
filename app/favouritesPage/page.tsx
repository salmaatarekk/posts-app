"use client";

import EmptyStateCard from "../components/EmptyStateCard";
import LandingPage from "../components/LandingPage";
import { useAppContext } from "../context/postsContext";

export default function FavouritesPage() {
  const { likedPosts } = useAppContext();

  return (
    <main>
      {likedPosts.length > 0 ? (
        <LandingPage posts={likedPosts} />
      ) : (
        <EmptyStateCard />
      )}
    </main>
  );
}

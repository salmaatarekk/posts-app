"use client";

import LandingPage from "../components/LandingPage";
import { useAppContext } from "../context/postsContext";

export default function FavouritesPage() {
  const { likedPosts } = useAppContext();

  return (
    <main>
      <LandingPage posts={likedPosts} />
    </main>
  );
}

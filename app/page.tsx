"use client";

import { useAppContext } from "./context/postsContext";
import LandingPage from "./components/LandingPage";
import { useEffect } from "react";

export default function Home() {
  const { homePosts } = useAppContext();

  return (
    <main>
      <LandingPage posts={homePosts} />
    </main>
  );
}

"use client";

import LandingPage from "./components/LandingPage";
import { useAppContext } from "./context/postsContext";
import Loading from "./loading";

export default function Home() {
  const { homePosts } = useAppContext();

  return (
    <main>
      {homePosts.length == 0 ? <Loading /> : <LandingPage posts={homePosts} />}
    </main>
  );
}

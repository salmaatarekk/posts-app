"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Post } from "../types/cardTypes";
import { constants } from "../types/constants";
import { homePosts } from "../halperFunctions/Helpers";

type ApplicationContextType = {
  homePosts: Post[];
  likedPosts: Post[];
  likePost: (id: string) => void;
  dislikePost: (id: string) => void;
};

const defaultAppContextType: ApplicationContextType = {
  homePosts: [],
  likedPosts: [],
  likePost: () => {},
  dislikePost: () => {},
};

export const ApplicationContext = createContext<ApplicationContextType>(
  defaultAppContextType
);

export const useAppContext = () => useContext(ApplicationContext);

export function ApplicationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [homePostsList, setHomePostsList] = useState<Post[]>([]);
  const [likedPostsList, setLikedPostsList] = useState<Post[]>([]);

  const setDataFromToStorage = () => {
    if (typeof window === "undefined") {
      return;
    }

    // to save liked posts between reloads
    if (localStorage.getItem(constants.localStorage.posts)) {
      return;
    }

    localStorage.setItem(
      constants.localStorage.posts,
      JSON.stringify(homePosts)
    );
    setHomePostsList(homePosts);
  };

  useEffect(() => {
    setDataFromToStorage();

    const homeStoredPosts = localStorage.getItem(constants.localStorage.posts);
    setHomePostsList(homeStoredPosts ? JSON.parse(homeStoredPosts) : []);

    const favStoredPosts = localStorage.getItem(
      constants.localStorage.likedPosts
    );
    setLikedPostsList(favStoredPosts ? JSON.parse(favStoredPosts) : []);
  }, [homePosts]);

  useEffect(() => {
    localStorage.setItem(
      constants.localStorage.posts,
      JSON.stringify(homePostsList)
    );
    localStorage.setItem(
      constants.localStorage.likedPosts,
      JSON.stringify(likedPostsList)
    );
  }, [homePostsList, likedPostsList]);

  const likePost = (id: string) => {
    const post = homePostsList.find((p) => {
      if (p.postId === id) {
        p.isFavorite = true;
        p.postLikes++;
        return true;
      }
      return false;
    });

    if (post) {
      setLikedPostsList([post, ...likedPostsList]);
      setHomePostsList(homePostsList);
    }
  };

  const dislikePost = (id: string) => {
    const likedPosts = likedPostsList.filter((p) => p.postId !== id);

    homePostsList.forEach((p) => {
      if (p.postId === id) {
        p.isFavorite = false;
        p.postLikes--;
      }
    });
    setLikedPostsList(likedPosts);
    setHomePostsList(homePostsList);
  };

  const contextValue: ApplicationContextType = {
    likePost,
    dislikePost,
    homePosts: homePostsList,
    likedPosts: likedPostsList,
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
}

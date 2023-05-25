import Image from "next/image";
import { Post } from "../types/cardTypes";
import { AiFillHeart } from "react-icons/ai";
import styles from "../styles/post-card.module.scss";

type PostCardType = {};

export default function PostCard(props: Post) {
  const {
    postId,
    postTags,
    postLikes,
    authorName,
    imageTitle,
    isFavorite,
    postImageUrl,
    authorImageUrl,
    postDescription,
    imageDescription,
    postCommentsNumber,
  } = props;

  const { layout } = styles;

  const getImage = (image: string) => {
    return () => image;
  };

  return (
    <div className={styles.layout}>
      <main className={styles.card}>
        <header className={styles.header}>
          <Image
            // loader={getImage(authorImageUrl)}
            alt={authorName}
            width={50}
            height={50}
            src={authorImageUrl}
          />

          <h4>{authorName}</h4>
        </header>

        <section className={styles.body}>
          <Image
            // loader={getImage(postImageUrl)}
            src={postImageUrl}
            alt={imageTitle}
            width={500}
            height={500}
          />
          <div className={styles.imgFooter}>
            <div>
              <p>{imageDescription}</p>
              <h4>{imageTitle}</h4>
            </div>

            <AiFillHeart />
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.likes}>
            <AiFillHeart />
            <span>{postLikes} likes</span>
          </div>

          <div className={styles.caption}>
            <p>{postDescription}</p>
          </div>

          <div className={styles.tags}>
            {postTags?.map((tag) => (
              <span>#{tag}</span>
            ))}
          </div>

          <div className={styles.comments}>
            <span> View {postCommentsNumber} comments </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
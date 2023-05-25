import styles from "../styles/emptystate.module.scss";

export default function EmptyStateCard() {
  return (
    <div className={styles.emptystatecard}>
      <div className={`${styles.cardbody} text-center`}>
        <h5 className={styles.cardtitle}>No posts Found</h5>
        <p className={styles.cardtext}>There are no posts to display.</p>
      </div>
    </div>
  );
}

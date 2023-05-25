import styles from "./styles/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}

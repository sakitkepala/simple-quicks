import * as styles from "./app.css";
import { clsx } from "clsx";

function App() {
  return (
    <div className={clsx(styles.vars, styles.shell)}>
      <div className={styles.sideBar}></div>
      <div className={styles.mainPanel}>
        <div className={styles.searchBar}>{/* TODO: icon search */}</div>
        <div></div>
      </div>
    </div>
  );
}

export default App;

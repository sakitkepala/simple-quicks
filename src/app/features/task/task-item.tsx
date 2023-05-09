import { Checkbox } from "../../components/checkbox";

import ChevronDown from "../../icons/chevron-down";
import Dots from "../../icons/dots";

import * as styles from "./task-item.css";

function TaskItem({ item }: { item: string }) {
  return (
    <div className={styles.task}>
      <div className={styles.checkboxCol}>
        <Checkbox />
      </div>

      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            Mantap {item}: Title dengan teks panjang sampai wrapping uhuy
          </div>
          <div className={styles.toolbar}>
            {parseInt(item) < 4 && <div className={styles.date}>2 Days Left</div>}
            <div>12/06/2021</div>
            <div>
              <ChevronDown size="20" />
            </div>
            <div>
              <Dots size="14" />
            </div>
          </div>
        </div>

        {/* TODO: radix ui's collapsible */}
        <div>collapsible</div>
      </div>
    </div>
  );
}

export { TaskItem };

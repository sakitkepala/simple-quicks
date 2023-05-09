import * as React from "react";
import { Checkbox } from "../../components/checkbox";

import ChevronDown from "../../icons/chevron-down";
import ChevronUp from "../../icons/chevron-up";
import Dots from "../../icons/dots";
import Clock from "../../icons/clock";
import Edit from "../../icons/edit";

import * as styles from "./task-item.css";

function TaskItem({ item }: { item: string }) {
  const [isOpen, setOpen] = React.useState(true);
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

            <div onClick={() => setOpen((open) => !open)}>
              {isOpen ? <ChevronUp size="20" /> : <ChevronDown size="20" />}
            </div>

            <div>
              <Dots size="14" />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <Clock size="1rem" />
              </div>
              <div className={styles.detailContent}>12/06/2020</div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <Edit size="1rem" />
              </div>
              <div className={styles.detailContent}>
                Closing off this case since this application has been cancelled. No one really
                understand how this case could possibly be cancelled. The options and the documents
                within this document were totally a guaranteed for a success!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { TaskItem };

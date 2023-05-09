import * as React from "react";

import { ScrollArea } from "../../components/scrollarea";
import { Divider } from "../../components/divider";
import { TaskItem } from "./task-item";

import * as styles from "./task.css";

function Task() {
  const tasks = [...new Array(20)].map((_, i) => i + 1);
  return (
    <div className={styles.layout}>
      <div className={styles.toolbar}>
        <div>
          {/* TODO: radix ui's select */}
          <div className={styles.select}>My Task</div>
        </div>
        <div>
          <button className={styles.actionButton}>New Task</button>
        </div>
      </div>

      <div className={styles.taskList}>
        <ScrollArea>
          <div>
            {tasks.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <Divider />}
                <TaskItem item={item.toString()} />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export { Task };

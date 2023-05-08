import * as React from "react";
import * as styles from "./quick-menus.css";
import { clsx } from "clsx";

const menus: {
  id: string;
  label: string;
  optionIcon: React.ReactElement;
  content: React.ReactElement;
}[] = [
  {
    id: "task",
    label: "Task",
    optionIcon: <span>itask</span>,
    content: (
      <div className={styles.menuPanel}>
        <h2>Task</h2>
      </div>
    ),
  },
  {
    id: "inbox",
    label: "Inbox",
    optionIcon: <span>iinbox</span>,
    content: (
      <div className={styles.menuPanel}>
        <h2>Inbox</h2>
      </div>
    ),
  },
];

function QuickMenus() {
  const [isOpen, setOpen] = React.useState(false);
  const [openTab, setOpenTab] = React.useState<undefined | string>();

  const availableMenuOptions = menus.filter((menu) => menu.id !== openTab);
  const openedPanel = menus.find((menu) => menu.id === openTab) || null;

  return (
    <div className={styles.menuContainer}>
      {openedPanel && (
        <div key={openedPanel.id} className={styles.menuPanelContainer}>
          {openedPanel.content}
        </div>
      )}

      <div
        className={clsx(styles.container, {
          [styles.containerOpen]: Boolean(openTab),
        })}
      >
        {isOpen && (
          <div className={styles.menuOptions}>
            {availableMenuOptions.map((menu) => (
              <button
                key={menu.id}
                className={styles.menuTrigger}
                onClick={() => setOpenTab(menu.id)}
              >
                {!openTab && <span className={styles.menuTriggerLabel}>{menu.label}</span>}
                <span>{menu.optionIcon}</span>
              </button>
            ))}
          </div>
        )}

        <div>
          <button
            className={styles.quickTrigger}
            onClick={() =>
              setOpen((o) => {
                const next = !o;
                if (next === false) {
                  setOpenTab(undefined);
                }
                return next;
              })
            }
          >
            {isOpen && openedPanel ? openedPanel.label : <>Quick</>}
          </button>
        </div>
      </div>
    </div>
  );
}

export { QuickMenus };

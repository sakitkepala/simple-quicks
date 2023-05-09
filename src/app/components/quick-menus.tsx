import * as React from "react";
import { Inbox } from "../features/inbox";
import { Task } from "../features/task";

import IconRead from "../icons/read";
import IconQna from "../icons/qna";
import IconLightning from "../icons/lightning";

import * as styles from "./quick-menus.css";
import { clsx } from "clsx";

const menus: {
  id: string;
  label: string;
  optionIcon: React.ReactElement;
  optionColor: "orange" | "purple";
  content: React.ReactElement;
}[] = [
  {
    id: "task",
    label: "Task",
    optionIcon: <IconRead size="32" />,
    optionColor: "orange",
    content: <Task />,
  },
  {
    id: "inbox",
    label: "Inbox",
    optionIcon: <IconQna size="32" />,
    optionColor: "purple",
    content: <Inbox />,
  },
];

function QuickMenus() {
  const [isOpen, setOpen] = React.useState(false);
  const [openTab, setOpenTab] = React.useState<undefined | string>();

  const menuOptions = menus.filter((menu) => menu.id !== openTab);
  const openedPanel = menus.find((menu) => menu.id === openTab) || null;

  return (
    <div className={styles.quickMenu}>
      {openedPanel && (
        <div key={openedPanel.id} className={styles.menuPanel}>
          {openedPanel.content}
        </div>
      )}

      <div
        className={clsx(styles.optionContainer, {
          [styles.optionContainerOpen]: Boolean(openTab),
        })}
      >
        {isOpen && (
          <div className={styles.options}>
            {menuOptions.map((menu) => (
              <button
                key={menu.id}
                className={styles.optionButton[menu.optionColor]}
                onClick={() => setOpenTab(menu.id)}
              >
                {!openTab && <span className={styles.optionButtonLabel}>{menu.label}</span>}
                <span>{menu.optionIcon}</span>
              </button>
            ))}
          </div>
        )}

        <div>
          <button
            className={styles.quickButton[openedPanel?.optionColor || "base"]}
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
            {isOpen && openedPanel ? openedPanel.optionIcon : <IconLightning size="56" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export { QuickMenus };

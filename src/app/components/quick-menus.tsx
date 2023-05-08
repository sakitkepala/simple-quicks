import * as React from "react";

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
    content: (
      <div>
        <h2>Task</h2>
        {/* DUMMY */}
        <ul>
          {[...new Array(200)]
            .map((_, i) => i + 1)
            .map((item) => (
              <li key={item}>mantap</li>
            ))}
        </ul>
      </div>
    ),
  },
  {
    id: "inbox",
    label: "Inbox",
    optionIcon: <IconQna size="32" />,
    optionColor: "purple",
    content: (
      <div>
        <h2>Inbox</h2>
      </div>
    ),
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
        <div key={openedPanel.id} className={styles.menuPanelContainer}>
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

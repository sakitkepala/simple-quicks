import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const variantsPanel = {
  open: { y: 0, opacity: 1 },
  closed: { y: 40, opacity: 0 },
};

const variantsOptions = {
  open: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsOptionItem = {
  open: { x: 0, opacity: 1 },
  closed: { x: 50, opacity: 0 },
};

function QuickMenus() {
  const [isOpen, setOpen] = React.useState(false);
  const [openTab, setOpenTab] = React.useState<undefined | string>();

  const menuOptions = menus.filter((menu) => menu.id !== openTab);
  const openedPanel = menus.find((menu) => menu.id === openTab) || null;

  return (
    <div className={styles.quickMenu}>
      <AnimatePresence>
        {openedPanel && (
          <motion.div
            className={styles.menuPanel}
            variants={variantsPanel}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {openedPanel.content}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={clsx(styles.optionContainer, {
          [styles.optionContainerOpen]: Boolean(openTab),
        })}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.options}
              variants={variantsOptions}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuOptions.map((menu) => (
                <motion.button
                  key={menu.id}
                  className={styles.optionButton[menu.optionColor]}
                  onClick={() => setOpenTab(menu.id)}
                  variants={variantsOptionItem}
                  whileHover={{ y: -3 }}
                >
                  {!openTab && <span className={styles.optionButtonLabel}>{menu.label}</span>}
                  <span>{menu.optionIcon}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

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

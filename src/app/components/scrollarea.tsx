import * as React from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { Scrollbar } from "./scrollbar";

import * as styles from "./scrollarea.css";

function ScrollArea({ children }: React.PropsWithChildren) {
  return (
    <RadixScrollArea.Root className={styles.root}>
      <RadixScrollArea.Viewport className={styles.viewport}>{children}</RadixScrollArea.Viewport>
      <Scrollbar />
    </RadixScrollArea.Root>
  );
}

export { ScrollArea };

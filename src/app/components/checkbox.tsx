import * as RadixCheckbox from "@radix-ui/react-checkbox";
import Check from "../icons/check";
import * as styles from "./checkbox.css";

function Checkbox() {
  return (
    <RadixCheckbox.Root className={styles.root}>
      <RadixCheckbox.Indicator className={styles.indicator}>
        <Check size="18" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

export { Checkbox };

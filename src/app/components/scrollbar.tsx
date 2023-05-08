import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as styles from './scrollbar.css';

function Scrollbar({
  orientation = 'vertical',
}: {
  orientation?: 'vertical' | 'horizontal';
}) {
  return (
    <ScrollArea.Scrollbar
      orientation={orientation}
      className={styles.scrollbar}
    >
      <ScrollArea.Thumb className={styles.thumb} />
    </ScrollArea.Scrollbar>
  );
}

export { Scrollbar };

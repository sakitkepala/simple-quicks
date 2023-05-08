import * as styles from "./conversation.css";
import IconPerson from "../../icons/person";

function ConversationItem({
  title,
  date,
  name,
  content,
  isUnread = false,
}: {
  title: string;
  date: string;
  name: string;
  content: string;
  isUnread?: boolean;
}) {
  return (
    <div className={styles.conversationItem}>
      <div className={styles.mediaIcon}>
        <div className={styles.personIconWrapper}>
          <span className={styles.personIcon["gray"]}>
            <IconPerson size="18" />
          </span>
          <span className={styles.personIcon["blue"]}>
            <IconPerson size="18" />
          </span>
        </div>
      </div>

      <div className={styles.mediaContent}>
        {isUnread && <span className={styles.unreadIndicator} />}
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
        </div>

        <div className={styles.preview}>
          <div className={styles.name}>{name} :</div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export { ConversationItem };

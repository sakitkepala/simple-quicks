import * as React from "react";

import { ScrollArea } from "../../components/scrollarea";
import { ConversationItem } from "./conversation";

import IconSearch from "../../icons/search";

import * as styles from "./inbox.css";

function Inbox() {
  const convs = [...new Array(20)].map((_, i) => ({
    id: i + 1,
    title: "Teks dummy agak panjang biar kelihatan kalau wrapping ke baris berikutnya.",
    date: "02/06/2021 10:45",
    name: "Mary Jane",
    content: "Ini adalah preview konten",
    isUnread: i === 0,
  }));
  return (
    <div className={styles.layout}>
      <div className={styles.searchBar}>
        <div className={styles.field}>
          <input type="text" className={styles.searchBox} placeholder="Search" />
          <span className={styles.searchIcon}>
            <IconSearch size="12" />
          </span>
        </div>
      </div>

      <div className={styles.conversationList}>
        <ScrollArea>
          {convs.map((item, i) => (
            <React.Fragment key={item.id}>
              {i > 0 && <hr className={styles.divider} />}
              <ConversationItem
                title={item.title}
                date={item.date}
                name={item.name}
                content={item.content}
                isUnread={item.isUnread}
              />
            </React.Fragment>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}

export { Inbox };

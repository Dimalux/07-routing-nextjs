// файл components/ TagsMenu / TagsMenu.tsx 

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import css from "@/components/TagsMenu/TagsMenu.module.css";

const TAGS = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleTagClick = (tag: string) => {
    if (tag === "All") {
      router.push(`/notes/filter/all`);
    } else {
      router.push(`/notes/filter/${tag}`);
    }
    setIsOpen(false);
  };

  return (
    <div className={css.menuContainer}>
      <button 
        className={css.menuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {TAGS.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <button
                className={css.menuLink}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
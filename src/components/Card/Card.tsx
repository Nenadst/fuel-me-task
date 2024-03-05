import { FC, useState } from "react";
import styles from "./Card.module.css";
import { BlogCardProps } from "./Card.types";
import closeIcon from "../../assets/close-icon.svg";

const BlogCard: FC<BlogCardProps> = ({ blog, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.blogCardWrapper}>
      <div className={styles.blogCard}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title} title={blog.title}>
            {blog.title}
          </h2>
          <button className={styles.deleteButton} onClick={onDelete}>
            {" "}
            <img src={closeIcon} alt="Close" className={styles.icon} />
          </button>
        </div>
        <p className={styles.text}>
          {expanded ? blog.text : blog.text.slice(0, 100)}
          {blog.text.length > 100 && (
            <button className={styles.readMoreButton} onClick={toggleExpanded}>
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
        <p className={styles.author}>Posted by {blog.author}</p>
      </div>
    </div>
  );
};

export default BlogCard;

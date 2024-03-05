import { FC } from "react";
import styles from "./BlogForm.module.css";
import InputGroup from "../InputGroup/InputGroup";
import { BlogFormProps } from "./BlogForm.types";

const BlogForm: FC<BlogFormProps> = ({
  title,
  setTitle,
  text,
  setText,
  author,
  setAuthor,
  handleSubmit,
}) => {
  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className={styles.inputGroup}>
        <InputGroup label="Title" value={title} onChange={setTitle} />
        <InputGroup label="Blog Text" value={text} onChange={setText} />
        <InputGroup label="Author" value={author} onChange={setAuthor} />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BlogForm;

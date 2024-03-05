import { FC, useState } from "react";
import styles from "./styles.module.css";
import BlogCard from "./components/Card/Card";
import BlogForm from "./components/BlogForm/BlogForm";
import { Blog } from "./App.types";

const App: FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [storedBlogs, setStoredBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    if (title && text && author) {
      const newBlog: Blog = { title, text, author };
      if (blogs.length < 4) {
        setBlogs([...blogs, newBlog]);
      } else {
        setStoredBlogs([...storedBlogs, newBlog]);
      }
      setTitle("");
      setText("");
      setAuthor("");
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleDelete = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);

    if (storedBlogs.length > 0) {
      const [nextBlog, ...remainingStoredBlogs] = storedBlogs;
      setBlogs([...updatedBlogs, nextBlog]);
      setStoredBlogs(remainingStoredBlogs);
    }
  };

  return (
    <div className={styles.container}>
      <h1>My Blog</h1>
      <div style={{ padding: "20px", width: "100%" }}>
        <BlogForm
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
          author={author}
          setAuthor={setAuthor}
          handleSubmit={handleSubmit}
        />
      </div>
      {blogs.length === 0 && <p>No blogs available</p>}
      <div className={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

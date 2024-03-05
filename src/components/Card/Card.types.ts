export interface BlogCardProps {
  blog: {
    title: string;
    text: string;
    author: string;
  };
  onDelete: () => void;
}

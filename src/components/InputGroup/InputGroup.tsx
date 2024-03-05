import { FC } from "react";
import styles from "./InputGroup.module.css";
import { InputGroupProps } from "./InputGroup.types";

const InputGroup: FC<InputGroupProps> = ({ label, value, onChange }) => {
  return (
    <div className={styles.labelAndInput}>
      <label>{label}</label>
      <input
        type="text"
        className={styles.inputField}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;

import { FunctionComponent } from "react";
import styles from "./Submit.module.css";

type SubmitType = {
  submit?: string;
};

const Submit: FunctionComponent<SubmitType> = ({ submit }) => {
  return <div className={styles.submit}>{submit}</div>;
};

export default Submit;

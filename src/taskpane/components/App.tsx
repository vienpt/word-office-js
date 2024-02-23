import * as React from "react";
import TextInsertion from "./TextInsertion";
import { makeStyles } from "@fluentui/react-components";
import CommentList from "./CommentList.tsx";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
  },
});

const App = (props: AppProps) => {
  const styles = useStyles();
  const { title } = props;

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <TextInsertion />
      <CommentList />
    </div>
  );
};

export default App;

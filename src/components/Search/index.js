import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

const Search = ({ setSearch, updatePageNumber }) => {

  return (
    <form
      className={classNames(styles.search, `d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`)}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
    </form>
  );
};

export default Search;
import React, { useState } from "react";
import Tab from "../tab/Tab";
import htmlValues from "../../htmlValues";
import styles from './Tabs.module.css'

function Tabs({ setCurrentTab }) {
  const categories = [
    "Python",
    "Excel",
    "Web Development",
    "JavaScript",
    "Data Science",
    "AWS Certification",
    "Drawing",
  ];

  const tabs = [...categories];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <fieldset className={styles.coursesRadio}>
        {tabs.map((category, idx) => {
          return (
            <Tab
              key={idx}
              idx={idx}
              category={category}
              htmlValue={htmlValues[idx]}
              setSelectedIndex={setSelectedIndex}
              setCurrentTab={setCurrentTab}
              checked={idx === selectedIndex}
            />
          );
        })}
      </fieldset>
    </>
  );
}

export default Tabs;

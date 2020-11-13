import Link from "next/link";
import React from "react";

import styles from "./Footer.module.css";
import mediumLogo from "./medium.svg";
import githubLogo from "./github.svg";
import LeetCodeLogo from "./LeetCode.svg";
import linkedinLogo from "./linkedin.svg";

const Footer = ({ noBorder }) => (
  <footer>
    <div className={noBorder ? styles.containerNoBorder : styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@victor.bona"
            >
              <img src={mediumLogo} alt="Victor on medium" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vicotrbb"
            >
              <img src={githubLogo} alt="Victor on github" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/vicotrbb/"
            >
              <img src={LeetCodeLogo} alt="Victor on Leetcode" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/victorbona/"
            >
              <img src={linkedinLogo} alt="Victor on linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;

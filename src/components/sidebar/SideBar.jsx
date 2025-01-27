import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { list } = useSelector((state) => state.categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>
        <nav>
          <ul className={styles.menu}>
            {list.map(({ id, name }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                  to={`/categories/${id}`}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.footer}>
          <a
            href={"/help"}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Help
          </a>
          <a
            href={"/terms"}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            style={{ textDecoration: "underline" }}
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBar;

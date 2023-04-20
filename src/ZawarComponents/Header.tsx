import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Header.module.css";

type HeaderType = {
  houseLine?: string;
  hamburgerMenu?: string;

  /** Style props */
  topContainerHeight?: Property.Height;
};

const Header: FunctionComponent<HeaderType> = ({
  houseLine,
  hamburgerMenu,
  topContainerHeight,
}) => {
  const topHeaderStyle: CSS.Properties = useMemo(() => {
    return {
      height: topContainerHeight,
    };
  }, [topContainerHeight]);

  return (
    <header className={styles.topHeader} style={topHeaderStyle}>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <img className={styles.houselineIcon} alt="" src={houseLine} />
          <div className={styles.name}>
            <div className={styles.reis}>REIS</div>
            <div className={styles.realState}>Real State</div>
          </div>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigation}>
            <div className={styles.home}>HOME</div>
            <div className={styles.home}>ABOUT US</div>
            <div className={styles.home}>OUR AGENTS</div>
            <div className={styles.properties}>PROPERTIES</div>
            <div className={styles.home}>GALLERY</div>
            <div className={styles.home}>BLOG</div>
            <div className={styles.home}>CONTACT US</div>
            <div className={styles.home}>SEARCH</div>
          </div>
          <button className={styles.hamburger}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src={hamburgerMenu}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HomeContainer.module.css";

type HomeContainerType = {
  icon?: string;
  sellYourHome?: string;

  /** Style props */
  propPadding?: Property.Padding;
  propWidth?: Property.Width;
  propFlexShrink?: Property.FlexShrink;
};

const HomeContainer: FunctionComponent<HomeContainerType> = ({
  icon,
  sellYourHome,
  propPadding,
  propWidth,
  propFlexShrink,
}) => {
  const sellYourHomeStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propPadding, propWidth, propFlexShrink]);

  return (
    <div className={styles.sellYourHome} style={sellYourHomeStyle}>
      <div className={styles.contents}>
        <img className={styles.icon} alt="" src={icon} />
        <div className={styles.contents}>
          <div className={styles.sellYourHome1}>{sellYourHome}</div>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className={styles.readMore}>Read more</div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

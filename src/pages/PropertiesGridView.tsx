import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Header from "../ZawarComponents/Header";
import styles from "./PropertiesGridView.module.css";
const PropertiesGridView: FunctionComponent = () => {
  return (
    <div className={styles.propertiesGridView}>
      <Header
        houseLine="/houseline2.svg"
        hamburgerMenu="/notification1.svg"
        topContainerHeight="98px"
      />
      <div className={styles.category}>
        <div className={styles.properties}>
          <div className={styles.properties1}>Properties</div>
          <div className={styles.homePropertiesContainer}>
            <span>{`Home / `}</span>
            <span className={styles.properties2}>Properties</span>
          </div>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.container}>
          <div className={styles.sortBy}>
            <div className={styles.options}>
              <img
                className={styles.listbulletsIcon}
                alt=""
                src="/listbullets.svg"
              />
              <img
                className={styles.listbulletsIcon}
                alt=""
                src="/squaresfour.svg"
              />
            </div>
            <div className={styles.text}>Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {(
                    [
                      { value: "Popular properties" },
                      { value: "Latest properties" },
                      { value: "Recommended properties" },
                    ] as any
                  ).map((option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardsPart1}>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc4@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car4.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub4.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout7.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork6.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart6.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc5@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car4.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub4.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout7.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork7.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart6.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus7.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardsPart1}>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc6@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car5.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub5.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout8.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork8.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart6.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus8.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc7@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car5.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub5.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout8.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork8.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart6.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus8.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contents1}>
        <div className={styles.cards1}>
          <div className={styles.cardsPart1}>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc8@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car6.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub6.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout9.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-15@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork9.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/myHeart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus9.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc9@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car6.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub6.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout9.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-15@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork10.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/myHeart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus10.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardsPart1}>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc10@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car7.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub7.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout10.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-15@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork11.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/myHeart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/unsplashrlwe8f8anoc11@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car7.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub7.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img
                    className={styles.carIcon}
                    alt=""
                    src="/mySVG/arrowsout10.svg"
                  />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-15@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork11.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/myHeart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.backArrow}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/mySVG/arrowleft1.svg"
            />
          </div>
          <div className={styles.div24}>
            <div className={styles.div25}>1</div>
          </div>
          <div className={styles.div26}>
            <div className={styles.div25}>2</div>
          </div>
          <div className={styles.div26}>
            <div className={styles.div25}>3</div>
          </div>
          <div className={styles.div26}>
            <div className={styles.div25}>...</div>
          </div>
          <div className={styles.div26}>
            <div className={styles.div25}>54</div>
          </div>
          <div className={styles.forwardArrow}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/mySVG/arrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <footer className={styles.footer}>
          <div className={styles.contactUs}>
            <div className={styles.logo}>
              <img
                className={styles.houselineIcon}
                alt=""
                src="/houseline3.svg"
              />
              <div className={styles.reisParent}>
                <div className={styles.reis}>REIS</div>
                <div className={styles.realState}>Real State</div>
              </div>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactUs1}>Contact Us</div>
              <div className={styles.text}>Call : +123 400 123</div>
              <div className={styles.praesentNullaMassa}>
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className={styles.emailExamplemailcom}>
                Email: example@mail.com
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo}
                  alt=""
                  src="/social-media-logo10.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo11.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo12.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo13.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo14.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.teamAndPolicies}>Features</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.text}>Home</div>
              <div className={styles.text}>Become a Host</div>
              <div className={styles.text}>Pricing</div>
              <div className={styles.text}>Blog</div>
              <div className={styles.text}>Contact</div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.teamAndPolicies}>Company</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.text}>About Us</div>
              <div className={styles.text}>Press</div>
              <div className={styles.text}>Contact</div>
              <div className={styles.text}>Careers</div>
              <div className={styles.text}>Blog</div>
            </div>
          </div>
          <div className={styles.termsAndPolicies}>
            <div className={styles.teamAndPolicies}>Team and policies</div>
            <div className={styles.termsAndPoliciesSubcategori}>
              <div className={styles.text}>Terms of servies</div>
              <div className={styles.text}>Privacy Policy</div>
              <div className={styles.text}>Security</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PropertiesGridView;

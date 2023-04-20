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
import styles from "./PropertiesListView.module.css";
const PropertiesListView: FunctionComponent = () => {
  return (
    <div className={styles.propertiesListView}>
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
          <div className={styles.card1}>
            <div className={styles.text1}>
              <div className={styles.topSection}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-14@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork4.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart4.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
                <div className={styles.vestibulumAnteIpsum}>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Proin sodales ultrices nulla
                  blandit volutpat.
                </div>
                <div className={styles.vestibulumAnteIpsum}>
                  <span>{`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... `}</span>
                  <span className={styles.readmore}>readmore.</span>
                </div>
              </div>
              <div className={styles.div}>$ 590,693</div>
            </div>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <div className={styles.text1}>
              <div className={styles.topSection}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-14@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork5.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart5.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
                <div className={styles.vestibulumAnteIpsum}>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Proin sodales ultrices nulla
                  blandit volutpat.
                </div>
                <div className={styles.vestibulumAnteIpsum}>
                  <span>{`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... `}</span>
                  <span className={styles.readmore}>readmore.</span>
                </div>
              </div>
              <div className={styles.div}>$ 590,693</div>
            </div>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.backArrow}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/mySVG/arrowleft.svg"
            />
          </div>
          <div className={styles.div2}>
            <div className={styles.div3}>1</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.div3}>2</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.div3}>3</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.div3}>...</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.div3}>54</div>
          </div>
          <div className={styles.forwardArrow}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/mySVG/arrowright.svg"
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
                src="/houseline2.svg"
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
                  src="/social-media-logo5.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo6.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo7.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo8.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo9.svg"
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

export default PropertiesListView;

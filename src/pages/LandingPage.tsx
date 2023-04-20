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
import Card1 from "../Newcomponents/Card1";
import Card3 from "../ZawarComponents/Card3";
import Card5 from "../ZawarComponents/Card5";
import HomeContainer from "../ZawarComponents/HomeContainer";
import Card11 from "../Newcomponents/Card11";
import Card31 from "../Newcomponents/Card31";
import Submit from "../ZawarComponents/Submit";
import styles from "./LandingPage.module.css";
const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <Header
        houseLine="/houseline.svg"
        hamburgerMenu="/notification.svg"
        topContainerHeight="117px"
      />
      <div className={styles.heroSection}>
        <div className={styles.heroSectionContents}>
          <div className={styles.text}>
            <div className={styles.findYourDream}>Find Your Dream Home</div>
            <div className={styles.vestibulumAnteIpsum}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.rentsale}>
            <div className={styles.tabs}>
              <div className={styles.rent}>
                <div className={styles.lahore}>Rent</div>
              </div>
              <div className={styles.sale}>
                <div className={styles.lahore}>Sale</div>
              </div>
            </div>
            <div className={styles.formcontainer}>
              <div className={styles.locations}>
                <div className={styles.locations1}>Locations</div>
                <Dropdown
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "New York" },
                          { value: "Los Angeles" },
                          { value: "Chicago" },
                          { value: "Houston" },
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
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className={styles.propertyType}>
                <div className={styles.propertyType1}>Property Type</div>
                <Dropdown
                  className={styles.dropdownlink}
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
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
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className={styles.rentRange}>
                <div className={styles.propertyType1}>Rent Range</div>
                <Dropdown
                  className={styles.dropdownlink}
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
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
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <button className={styles.searchCta}>
                <div className={styles.search}>Search</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.propertiesByAreaImagesSect}>
        <div className={styles.description}>
          <div className={styles.propertiesByLocation}>
            Properties by Location
          </div>
          <div className={styles.areaSubtitle}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.row1}>
            <Card1 newYprk="New Jersey" />
            <div className={styles.card2}>
              <div className={styles.text1}>
                <div className={styles.losAngeles}>Los Angeles</div>
                <div className={styles.listings}>25 listings</div>
              </div>
            </div>
            <Card3 />
          </div>
          <div className={styles.row2}>
            <Card5
              card5BackgroundImage={`url("/card-4@3x.png")`}
              nevada="Alaska"
            />
            <Card5 nevada="Nevada" />
          </div>
        </div>
      </div>
      <div className={styles.propertiesByAreaFeatureCar}>
        <div className={styles.areaContent}>
          <div className={styles.areaLabels}>
            <div className={styles.propertiesByLocation}>
              Properties by Area
            </div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.propertiesRow}>
            <HomeContainer icon="/icon.svg" sellYourHome="Sell your home" />
            <HomeContainer
              icon="/icon1.svg"
              sellYourHome="Rent your home"
              propPadding="var(--padding-3xl) var(--padding-base)"
              propWidth="312px"
              propFlexShrink="0"
            />
            <HomeContainer
              icon="/icon2.svg"
              sellYourHome="Buy a home"
              propPadding="22px 80px"
              propWidth="unset"
              propFlexShrink="unset"
            />
            <HomeContainer
              icon="/icon3.svg"
              sellYourHome="Free marketing"
              propPadding="var(--padding-3xl) var(--padding-xl)"
              propWidth="312px"
              propFlexShrink="0"
            />
          </div>
        </div>
      </div>
      <div className={styles.latestPropertiesOfRentCard}>
        <div className={styles.contents}>
          <div className={styles.text2}>
            <div className={styles.propertiesByLocation}>
              Latest Properties of Rent
            </div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardsRow}>
            <div className={styles.cardsPart1}>
              <Card11
                propertyImage="/unsplashrlwe8f8anoc@2x.png"
                car="/car.svg"
                bathtub="/bathtub.svg"
                arrowsOut="/mySVG/arrowsout.svg"
                ellipse1="/ellipse-1@2x.png"
                shareNetwork="/sharenetwork.svg"
                heart="/heart.svg"
                plus="/plus.svg"
              />
              <Card11
                propertyImage="/unsplashrlwe8f8anoc1@2x.png"
                car="/car1.svg"
                bathtub="/bathtub1.svg"
                arrowsOut="/mySVG/arrowsout1.svg"
                ellipse1="/ellipse-11@2x.png"
                shareNetwork="/sharenetwork1.svg"
                heart="/heart1.svg"
                plus="/plus1.svg"
              />
            </div>
            <div className={styles.cardsPart1}>
              <Card31
                propertyImage="/unsplashrlwe8f8anoc2@2x.png"
                car="/car2.svg"
                bathtub="/bathtub2.svg"
                arrowsOut="/mySVG/arrowsout2.svg"
                ellipse1="/ellipse-12@2x.png"
                shareNetwork="/sharenetwork2.svg"
                heart="/heart2.svg"
                plus="/plus2.svg"
              />
              <Card31
                propertyImage="/unsplashrlwe8f8anoc3@2x.png"
                car="/car3.svg"
                bathtub="/bathtub3.svg"
                arrowsOut="/mySVG/arrowsout3.svg"
                ellipse1="/ellipse-13@2x.png"
                shareNetwork="/sharenetwork3.svg"
                heart="/heart3.svg"
                plus="/plus3.svg"
              />
            </div>
          </div>
        </div>
        <button className={styles.cta}>
          <div className={styles.search}>Load more listing</div>
        </button>
      </div>
      <div className={styles.latestPropertiesOfRentCard}>
        <div className={styles.contents}>
          <div className={styles.text2}>
            <div className={styles.propertiesByLocation}>
              Latest Properties of Rent
            </div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardRow}>
            <div className={styles.card1}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.lahore}>Lahore</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/mySVG/arrowsout4.svg"
                  />
                  <div className={styles.lahore}>12000</div>
                </div>
              </div>
            </div>
            <div className={styles.card21}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/mappin1.svg"
                  />
                  <div className={styles.lahore}>Murree</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/mySVG/arrowsout5.svg"
                  />
                  <div className={styles.lahore}>12000</div>
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/mappin2.svg"
                  />
                  <div className={styles.lahore}>Islamabad</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/mySVG/arrowsout6.svg"
                  />
                  <div className={styles.lahore}>12000</div>
                </div>
              </div>
            </div>
            <div className={styles.card4}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/mappin1.svg"
                  />
                  <div className={styles.lahore}>Karachi</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/mySVG/arrowsout5.svg"
                  />
                  <div className={styles.lahore}>12000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.cta}>
          <div className={styles.search}>Load more listing</div>
        </button>
      </div>
      <div className={styles.latestPropertiesOfRentCard2}>
        <div className={styles.contents2}>
          <div className={styles.text2}>
            <div className={styles.propertiesByLocation}>Contact us</div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formText}>
              <b className={styles.enquiryForm}>Enquiry Form</b>
              <div className={styles.areYouLooking}>
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.inputRow}>
                <div className={styles.input}>
                  <div className={styles.firstName}>First name</div>
                </div>
                <div className={styles.input1}>
                  <div className={styles.firstName}>Last name</div>
                </div>
              </div>
              <div className={styles.destinationNameInput}>
                <div className={styles.firstName}>Email id</div>
              </div>
              <div className={styles.input2}>
                <div className={styles.firstName}>Comments or questions</div>
              </div>
              <button className={styles.formSubmitButton}>
                <Submit submit="Submit Details" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.footerSection}>
        <footer className={styles.footer}>
          <div className={styles.contactUs1}>
            <div className={styles.logo}>
              <img
                className={styles.houselineIcon}
                alt=""
                src="/houseline1.svg"
              />
              <div className={styles.reisParent}>
                <div className={styles.reis}>REIS</div>
                <div className={styles.realState}>Real State</div>
              </div>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactUs2}>Contact Us</div>
              <div className={styles.home}>Call : +123 400 123</div>
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
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo1.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo2.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo3.svg"
                />
              </div>
              <button className={styles.socialMediaCard4}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo4.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.losAngeles}>Features</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>Become a Host</div>
              <div className={styles.home}>Pricing</div>
              <div className={styles.home}>Blog</div>
              <div className={styles.home}>Contact</div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.losAngeles}>Company</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.home}>About Us</div>
              <div className={styles.home}>Press</div>
              <div className={styles.home}>Contact</div>
              <div className={styles.home}>Careers</div>
              <div className={styles.home}>Blog</div>
            </div>
          </div>
          <div className={styles.termsAndPolicies}>
            <div className={styles.losAngeles}>Team and policies</div>
            <div className={styles.termsAndPoliciesSubcategori}>
              <div className={styles.home}>Terms of servies</div>
              <div className={styles.home}>Privacy Policy</div>
              <div className={styles.home}>Security</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;

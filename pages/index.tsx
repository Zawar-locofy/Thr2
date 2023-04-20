import type { NextPage } from "next";
import styles from "./index.module.css";
const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.right} />
      <img className={styles.homeChild} alt="" src="/rectangle-1@2x.png" />
      <div className={styles.heroBg} />
      <div className={styles.heroHeadline}>
        <b className={styles.dontMissOur}>
          Don’t miss our daily amazing deals.
        </b>
        <div className={styles.saveUpTo}>
          Save up to 60% off on your first order
        </div>
      </div>
      <div className={styles.subscribeFormz}>
        <div className={styles.newsletterForm}>
          <img className={styles.lisendIcon} alt="" src="/lisend.svg" />
          <div className={styles.enterYourEmailAddressWrapper}>
            <div className={styles.enterYourEmail}>
              Enter your email address
            </div>
          </div>
        </div>
        <div className={styles.subscribeBtn}>
          <div className={styles.subscribe}>Subscribe</div>
        </div>
      </div>
      <img className={styles.hreoImgIcon} alt="" src="/hreoimg@2x.png" />
      <div className={styles.indicators}>
        <img className={styles.indicatorsChild} alt="" src="/ellipse-3.svg" />
        <img className={styles.indicatorsChild} alt="" src="/ellipse-4.svg" />
      </div>
      <div className={styles.exploreCategories}>Explore Categories</div>
      <div className={styles.right1}>
        <img
          className={styles.liarrowRightIcon}
          alt=""
          src="/liarrowright.svg"
        />
      </div>
      <div className={styles.left}>
        <img
          className={styles.liarrowRightIcon}
          alt=""
          src="/liarrowright1.svg"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.peachParent}>
            <div className={styles.subscribe}>Peach</div>
            <div className={styles.items}>20 Items</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.peachParent}>
            <div className={styles.subscribe}>Vegetables</div>
            <div className={styles.items}>220 Items</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-4@2x.png" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.peachParent}>
            <div className={styles.subscribe}>strawberry</div>
            <div className={styles.items}>10 Items</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-5@2x.png" />
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameWrapper}>
          <div className={styles.peachParent}>
            <div className={styles.subscribe}>Apple</div>
            <div className={styles.items}>40 Items</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-6@2x.png" />
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.frameWrapper2}>
          <div className={styles.peachParent}>
            <div className={styles.subscribe}>Orange</div>
            <div className={styles.items}>23 Items</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-7@2x.png" />
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.frameWrapper3}>
          <div className={styles.peachParent}>
            <div className={styles.subscribe}>Potato</div>
            <div className={styles.items}>3 Items</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-8@2x.png" />
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.frameWrapper4}>
          <div className={styles.peachParent}>
            <div className={styles.subscribe}>Carrot</div>
            <div className={styles.items}>9 Items</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-9@2x.png" />
      </div>
      <div className={styles.tapbar}>
        <b className={styles.all}>All</b>
        <div className={styles.enterYourEmail}>Vegetables</div>
        <div className={styles.enterYourEmail}>Fruits</div>
        <div className={styles.enterYourEmail}>{`Coffe & teas`}</div>
        <div className={styles.enterYourEmail}>Meat</div>
      </div>
      <img className={styles.homeItem} alt="" src="/rectangle-13@2x.png" />
      <img className={styles.homeInner} alt="" src="/rectangle-13@2x.png" />
      <div className={styles.offer2}>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent6}>
            <div className={styles.offWrapper}>
              <div className={styles.off}>60% off</div>
            </div>
            <div className={styles.organicFoodParent}>
              <div className={styles.subscribe}>Organic Food</div>
              <div className={styles.shop50Product}>
                Save up to 60% off on your first order
              </div>
            </div>
          </div>
          <div className={styles.shopBtn}>
            <div className={styles.subscribe}>Order Now</div>
            <img
              className={styles.lisendIcon}
              alt=""
              src="/liarrowright2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.offer1}>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent8}>
            <div className={styles.freeDeliveryWrapper}>
              <div className={styles.off}>Free delivery</div>
            </div>
            <div className={styles.organicFoodParent}>
              <div
                className={styles.subscribe}
              >{`Free delivery over $50 `}</div>
              <div className={styles.shop50Product}>
                Shop $50 product and get free delivery anywhre.
              </div>
            </div>
          </div>
          <div className={styles.shopBtn}>
            <div className={styles.subscribe}>Shop Now</div>
            <img
              className={styles.lisendIcon}
              alt=""
              src="/liarrowright2.svg"
            />
          </div>
        </div>
      </div>
      <img className={styles.offer2ImgIcon} alt="" src="/offer2img@2x.png" />
      <img className={styles.offer1ImgIcon} alt="" src="/offer1img@2x.png" />
      <div className={styles.tapbar1}>
        <div className={styles.enterYourEmail}>All</div>
        <div className={styles.featured}>Vegetables</div>
        <div className={styles.enterYourEmail}>Fruits</div>
        <div className={styles.enterYourEmail}>{`Coffe & teas`}</div>
        <div className={styles.enterYourEmail}>Meat</div>
      </div>
      <div className={styles.featuredProducts}>Featured Products</div>
      <img
        className={styles.liarrowRightIcon4}
        alt=""
        src="/liarrowright.svg"
      />
      <div className={styles.left1}>
        <img
          className={styles.liarrowRightIcon}
          alt=""
          src="/liarrowright1.svg"
        />
      </div>
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <img className={styles.cardChild} alt="" src="/rectangle-19@2x.png" />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.groceyish}>Vegetables</div>
              <div className={styles.redish500g}>Redish 500g</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar1.svg"
                  />
                </div>
                <div className={styles.enterYourEmail}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.subscribe}>$2</div>
                <div className={styles.div2}>$3.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.enterYourEmail}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardChild}
            alt=""
            src="/rectangle-191@2x.png"
          />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.groceyish}>Vegetables</div>
              <div className={styles.redish500g}>Potatos 1kg</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar1.svg"
                  />
                </div>
                <div className={styles.enterYourEmail}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.subscribe}>$1</div>
                <div className={styles.div2}>$1.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.enterYourEmail}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardChild}
            alt=""
            src="/rectangle-192@2x.png"
          />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.groceyish}>Fruits</div>
              <div className={styles.redish500g}>Tomatos 200g</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar3.svg"
                  />
                </div>
                <div className={styles.enterYourEmail}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.subscribe}>$0.30</div>
                <div className={styles.div2}>$0.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.enterYourEmail}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardChild}
            alt=""
            src="/rectangle-193@2x.png"
          />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.groceyish}>Vegetables</div>
              <div className={styles.redish500g}>Broccoli 1kg</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar3.svg"
                  />
                </div>
                <div className={styles.enterYourEmail}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.subscribe}>$1.50</div>
                <div className={styles.div2}>$2.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.enterYourEmail}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardChild}
            alt=""
            src="/rectangle-194@2x.png"
          />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.groceyish}>Vegetables</div>
              <div className={styles.redish500g}>Green Beans 250g</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar2.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar3.svg"
                  />
                </div>
                <div className={styles.enterYourEmail}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.subscribe}>$1</div>
                <div className={styles.div2}>$1.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.enterYourEmail}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tapbar2}>
        <div className={styles.featured}>Featured</div>
        <div className={styles.enterYourEmail}>Popular</div>
        <div className={styles.enterYourEmail}>New</div>
      </div>
      <div className={styles.dailyBestSells}>Daily Best Sells</div>
      <div className={styles.card5}>
        <img className={styles.cardChild2} alt="" src="/rectangle-195@2x.png" />
        <div className={styles.cardInfo5}>
          <div className={styles.info5}>
            <div className={styles.groceyish}>{`Coffe & teas`}</div>
            <div className={styles.redish500g}>Coffe 1kg</div>
          </div>
          <div className={styles.ratingParent}>
            <div className={styles.rating}>
              <div className={styles.iconlyboldstarParent}>
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar5.svg"
                />
              </div>
              <div className={styles.enterYourEmail}>(4)</div>
            </div>
            <div className={styles.seller}>
              <span>{`By `}</span>
              <span className={styles.mrfood}>Mr.food</span>
            </div>
          </div>
          <div className={styles.cardInfoChild} />
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.frameParent10}>
            <div className={styles.priceParent3}>
              <div className={styles.price5}>
                <div className={styles.subscribe}>$20</div>
                <div className={styles.div2}>$25</div>
              </div>
              <div className={styles.progressbar}>
                <div className={styles.progressbarInner}>
                  <div className={styles.frameChild} />
                </div>
              </div>
            </div>
            <div className={styles.sold2050}>Sold: 20/50</div>
          </div>
          <div className={styles.cartBtn5}>
            <img
              className={styles.lishoppingCartIcon}
              alt=""
              src="/lishoppingcart1.svg"
            />
            <div className={styles.enterYourEmail}>{`Add to cart `}</div>
          </div>
        </div>
      </div>
      <div className={styles.card6}>
        <img className={styles.cardChild2} alt="" src="/rectangle-196@2x.png" />
        <div className={styles.cardInfo5}>
          <div className={styles.info5}>
            <div className={styles.groceyish}>Meat</div>
            <div className={styles.redish500g}>Halal Sausage 350g</div>
          </div>
          <div className={styles.ratingParent}>
            <div className={styles.rating}>
              <div className={styles.iconlyboldstarParent}>
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar5.svg"
                />
              </div>
              <div className={styles.enterYourEmail}>(4)</div>
            </div>
            <div className={styles.seller}>
              <span>{`By `}</span>
              <span className={styles.mrfood}>Mr.food</span>
            </div>
          </div>
          <div className={styles.cardInfoChild} />
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.frameParent10}>
            <div className={styles.priceParent3}>
              <div className={styles.price5}>
                <div className={styles.subscribe}>$4</div>
                <div className={styles.div2}>$10</div>
              </div>
              <div className={styles.progressbar}>
                <div className={styles.progressbarInner}>
                  <div className={styles.frameItem} />
                </div>
              </div>
            </div>
            <div className={styles.sold2050}>Sold: 7/20</div>
          </div>
          <div className={styles.cartBtn5}>
            <img
              className={styles.lishoppingCartIcon}
              alt=""
              src="/lishoppingcart1.svg"
            />
            <div className={styles.enterYourEmail}>{`Add to cart `}</div>
          </div>
        </div>
      </div>
      <div className={styles.card7}>
        <img className={styles.cardChild2} alt="" src="/rectangle-197@2x.png" />
        <div className={styles.cardInfo5}>
          <div className={styles.info5}>
            <div className={styles.groceyish}>{`Coffe & Teas`}</div>
            <div className={styles.redish500g}>Green Tea 250g</div>
          </div>
          <div className={styles.ratingParent}>
            <div className={styles.rating}>
              <div className={styles.iconlyboldstarParent}>
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar4.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar6.svg"
                />
              </div>
              <div className={styles.enterYourEmail}>(4)</div>
            </div>
            <div className={styles.seller}>
              <span>{`By `}</span>
              <span className={styles.mrfood}>Mr.food</span>
            </div>
          </div>
          <div className={styles.cardInfoChild} />
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.frameParent10}>
            <div className={styles.priceParent3}>
              <div className={styles.price5}>
                <div className={styles.subscribe}>$3</div>
                <div className={styles.div2}>$7</div>
              </div>
              <div className={styles.progressbar}>
                <div className={styles.progressbarInner}>
                  <div className={styles.frameInner} />
                </div>
              </div>
            </div>
            <div className={styles.sold2050}>Sold: 32/50</div>
          </div>
          <div className={styles.cartBtn5}>
            <img
              className={styles.lishoppingCartIcon}
              alt=""
              src="/lishoppingcart1.svg"
            />
            <div className={styles.enterYourEmail}>{`Add to cart `}</div>
          </div>
        </div>
      </div>
      <div className={styles.card8}>
        <img className={styles.cardChild2} alt="" src="/rectangle-198@2x.png" />
        <div className={styles.cardInfo5}>
          <div className={styles.info5}>
            <div className={styles.groceyish}>Vegetables</div>
            <div className={styles.redish500g}>Onion 1kg</div>
          </div>
          <div className={styles.ratingParent}>
            <div className={styles.rating}>
              <div className={styles.iconlyboldstarParent}>
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar7.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar7.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar7.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar7.svg"
                />
                <img
                  className={styles.iconlyboldstar}
                  alt=""
                  src="/iconlyboldstar6.svg"
                />
              </div>
              <div className={styles.enterYourEmail}>(4)</div>
            </div>
            <div className={styles.seller}>
              <span>{`By `}</span>
              <span className={styles.mrfood}>Mr.food</span>
            </div>
          </div>
          <div className={styles.cardInfoChild} />
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.frameParent10}>
            <div className={styles.priceParent3}>
              <div className={styles.price5}>
                <div className={styles.subscribe}>$0.50</div>
                <div className={styles.div2}>$2</div>
              </div>
              <div className={styles.progressbar}>
                <div className={styles.progressbarInner}>
                  <div className={styles.frameChild1} />
                </div>
              </div>
            </div>
            <div className={styles.sold2050}>Sold: 2/10</div>
          </div>
          <div className={styles.cartBtn5}>
            <img
              className={styles.lishoppingCartIcon}
              alt=""
              src="/lishoppingcart1.svg"
            />
            <div className={styles.enterYourEmail}>{`Add to cart `}</div>
          </div>
        </div>
      </div>
      <div className={styles.save}>
        <div className={styles.enterYourEmail}>Save 10%</div>
      </div>
      <div className={styles.save1}>
        <div className={styles.enterYourEmail}>Best deal</div>
      </div>
      <div className={styles.save2}>
        <div className={styles.enterYourEmail}>Save 4%</div>
      </div>
      <div className={styles.save3}>
        <div className={styles.enterYourEmail}>Save 8%</div>
      </div>
      <img className={styles.homeChild1} alt="" src="/rectangle-21@2x.png" />
      <div className={styles.formContainer} />
      <div className={styles.offParent}>
        <b className={styles.groceyish}>10% OFF</b>
        <div className={styles.forNewMember}>
          For new member sign up at the first time
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.enterYourEmail}>
          <span>Email address</span>
          <span className={styles.span}>*</span>
        </div>
        <div className={styles.emailform}>
          <img className={styles.lisendIcon} alt="" src="/limail.svg" />
          <div className={styles.enterYourEmailAddressWrapper}>
            <div className={styles.enterYourEmail}>johndoe@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.passwordInput}>
        <div className={styles.enterYourEmail}>
          <span>Password</span>
          <span className={styles.span}>*</span>
        </div>
        <div className={styles.emailform}>
          <img className={styles.lisendIcon} alt="" src="/likey.svg" />
          <div className={styles.enterYourEmailAddressWrapper}>
            <div className={styles.enterYourEmail}>Maximum 8 characters</div>
          </div>
        </div>
      </div>
      <div className={styles.registerBtn}>
        <div className={styles.subscribe}>Register Now</div>
      </div>
      <div className={styles.leftParent}>
        <div className={styles.left2}>
          <img
            className={styles.liarrowRightIcon}
            alt=""
            src="/liarrowright1.svg"
          />
        </div>
        <div className={styles.right2}>
          <img
            className={styles.liarrowRightIcon}
            alt=""
            src="/liarrowright.svg"
          />
        </div>
      </div>
      <div className={styles.expire}>
        <div className={styles.enterYourEmail}>Expires in: 10 : 56 : 21</div>
      </div>
      <img className={styles.polygonIcon} alt="" src="/polygon-40.svg" />
      <div className={styles.topSells}>Top Sells</div>
      <div className={styles.items7}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar9.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-121@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar5.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-122@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar9.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trendingItems}>Trending Items</div>
      <div className={styles.items8}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-123@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar11.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-124@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar6.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar11.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topRated}>Top Rated</div>
      <div className={styles.items9}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-125@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar9.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-121@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar4.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar5.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-126@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar8.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar9.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recentlyAdded}>Recently Added</div>
      <div className={styles.items10}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-126@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar11.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-127@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar7.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar6.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.image12Icon}
              alt=""
              src="/image-122@2x.png"
            />
          </div>
          <div className={styles.frameParent17}>
            <div className={styles.infoParent}>
              <div className={styles.info9}>
                <div className={styles.subscribe}>Orange 1kg</div>
              </div>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar10.svg"
                    />
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="/iconlyboldstar11.svg"
                    />
                  </div>
                  <div className={styles.enterYourEmail}>(4)</div>
                </div>
              </div>
            </div>
            <div className={styles.price9}>
              <div className={styles.subscribe}>$2</div>
              <div className={styles.div2}>$3.99</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group-10.svg" />
      <img className={styles.homeChild2} alt="" src="/group-10.svg" />
      <img className={styles.homeChild3} alt="" src="/group-10.svg" />
      <img className={styles.homeChild4} alt="" src="/group-10.svg" />
      <img className={styles.homeChild5} alt="" src="/rectangle-11@2x.png" />
      <div className={styles.heroBg1} />
      <div className={styles.app}>
        <img
          className={styles.iphone11ProX1}
          alt=""
          src="/iphone-11-pro--x--1@2x.png"
        />
        <div className={styles.iphone11ProX3} />
        <img
          className={styles.iphone11ProX2}
          alt=""
          src="/iphone-11-pro--x--2@2x.png"
        />
      </div>
      <div className={styles.headline}>
        <b className={styles.dontMissOur}>Shop Faster With Groceyish App</b>
        <div
          className={styles.saveUpTo}
        >{`Available on both IOS & Android`}</div>
      </div>
      <div className={styles.download}>
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
        <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      </div>
      <div className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <div className={styles.svgexport621Parent}>
            <img
              className={styles.svgexport621}
              alt=""
              src="/svgexport6-2-1.svg"
            />
            <div className={styles.bestPricesDealsParent}>
              <div className={styles.bestPrices}>{`Best Prices & Deals`}</div>
              <div className={styles.ifYourItems}>
                Don’t miss our daily amazing deals and prices
              </div>
            </div>
          </div>
        </div>
        <div className={styles.benefitsChild}>
          <div className={styles.svgexport631Parent}>
            <img
              className={styles.svgexport621}
              alt=""
              src="/svgexport6-3-1.svg"
            />
            <div className={styles.frameWrapper5}>
              <div className={styles.bestPricesDealsParent}>
                <div className={styles.refundable}>{`Refundable `}</div>
                <div className={styles.ifYourItems}>
                  If your items have damage we agree to refund it
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.benefitsInner1}>
          <div className={styles.svgexport621Parent}>
            <img
              className={styles.svgexport621}
              alt=""
              src="/svgexport7-1-2.svg"
            />
            <div className={styles.frameWrapper6}>
              <div className={styles.bestPricesDealsParent}>
                <div className={styles.refundable}>Free delivery</div>
                <div className={styles.ifYourItems}>
                  Do purchase over $50 and get free delivery anywhere
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
      <img className={styles.homeChild6} alt="" src="/vector-4.svg" />
      <div className={styles.footer}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.svgexport61Icon}
              alt=""
              src="/svgexport6-1.svg"
            />
            <div className={styles.groceyishParent}>
              <b className={styles.groceyish}>Groceyish</b>
              <div className={styles.items}>GROCERY</div>
            </div>
          </div>
          <div className={styles.groupParent11}>
            <div className={styles.frameParent29}>
              <div className={styles.limapPinParent}>
                <img className={styles.lisendIcon} alt="" src="/limappin.svg" />
                <div className={styles.subscribe}>Address:</div>
              </div>
              <div className={styles.schoolHouseRoad}>
                1762 School House Road
              </div>
            </div>
            <div className={styles.frameParent30}>
              <div className={styles.limapPinParent}>
                <img className={styles.lisendIcon} alt="" src="/liphone.svg" />
                <div className={styles.subscribe}>Call Us:</div>
              </div>
              <div className={styles.div63}>1233-777</div>
            </div>
            <div className={styles.frameParent31}>
              <div className={styles.limapPinParent}>
                <img className={styles.lisendIcon} alt="" src="/limail1.svg" />
                <div className={styles.subscribe}>Email:</div>
              </div>
              <div className={styles.groceyishcontactcom}>
                groceyish@contact.com
              </div>
            </div>
            <div className={styles.frameParent32}>
              <div className={styles.limapPinParent}>
                <img className={styles.lisendIcon} alt="" src="/liclock9.svg" />
                <div className={styles.subscribe}>Work hours:</div>
              </div>
              <div className={styles.sundayThursday}>
                8:00 - 20:00, Sunday - Thursday
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accountParent}>
          <div className={styles.subscribe}>Account</div>
          <div className={styles.wishlistParent}>
            <div className={styles.enterYourEmail}>Wishlist</div>
            <div className={styles.enterYourEmail}>Cart</div>
            <div className={styles.enterYourEmail}>Track Order</div>
            <div className={styles.enterYourEmail}>Shipping Details</div>
          </div>
        </div>
        <div className={styles.usefulLinksParent}>
          <div className={styles.subscribe}>Useful links</div>
          <div className={styles.aboutUsParent}>
            <div className={styles.enterYourEmail}>About Us</div>
            <div className={styles.enterYourEmail}>Conact</div>
            <div className={styles.enterYourEmail}>Hot deals</div>
            <div className={styles.enterYourEmail}>Promotions</div>
            <div className={styles.enterYourEmail}>New products</div>
          </div>
        </div>
        <div className={styles.helpCenterParent}>
          <div className={styles.subscribe}>Help Center</div>
          <div className={styles.paymentsParent}>
            <div className={styles.enterYourEmail}>Payments</div>
            <div className={styles.enterYourEmail}>Refund</div>
            <div className={styles.enterYourEmail}>Checkout</div>
            <div className={styles.enterYourEmail}>Shipping</div>
            <div className={styles.enterYourEmail}>{`Q&A`}</div>
            <div className={styles.enterYourEmail}>Privacy Policy</div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.enterYourEmail}>© 2022, All rights reserved</div>
        <img className={styles.paymentIcon} alt="" src="/payment@2x.png" />
        <div className={styles.socialmediaIcons}>
          <img
            className={styles.socialmediaIconsChild}
            alt=""
            src="/group-21.svg"
          />
          <img
            className={styles.socialmediaIconsChild}
            alt=""
            src="/group-20.svg"
          />
          <img
            className={styles.socialmediaIconsChild}
            alt=""
            src="/group-18.svg"
          />
          <img
            className={styles.socialmediaIconsChild}
            alt=""
            src="/group-19.svg"
          />
        </div>
      </div>
      <div className={styles.topbar}>
        <div className={styles.logo1}>
          <img
            className={styles.svgexport61Icon1}
            alt=""
            src="/svgexport6-11.svg"
          />
          <div className={styles.groceyishParent}>
            <b className={styles.groceyish}>Groceyish</b>
            <div className={styles.items}>GROCERY</div>
          </div>
        </div>
        <div className={styles.searchbar}>
          <div className={styles.search}>
            <div className={styles.allCategoriesParent}>
              <div className={styles.subscribe}>All Categories</div>
              <img
                className={styles.lisendIcon}
                alt=""
                src="/lichevrondown.svg"
              />
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.frameChild2} alt="" src="/vector-1.svg" />
              <div className={styles.enterYourEmail}>Search for items...</div>
            </div>
          </div>
          <div className={styles.searchBtn}>
            <img
              className={styles.liarrowRightIcon}
              alt=""
              src="/lisearch.svg"
            />
          </div>
        </div>
        <div className={styles.wishlistGroup}>
          <div className={styles.wishlist1}>
            <div className={styles.liheartParent}>
              <img className={styles.liheartIcon} alt="" src="/liheart.svg" />
              <img className={styles.ellipseIcon} alt="" src="/ellipse-1.svg" />
              <div className={styles.div64}>4</div>
            </div>
            <div className={styles.wishlist2}>Wishlist</div>
          </div>
          <div className={styles.wishlist1}>
            <div className={styles.lishoppingCartParent}>
              <img
                className={styles.lishoppingCartIcon9}
                alt=""
                src="/lishoppingcart2.svg"
              />
              <img
                className={styles.groupChild9}
                alt=""
                src="/ellipse-11.svg"
              />
              <div className={styles.div65}>1</div>
            </div>
            <div className={styles.frameParent33}>
              <div className={styles.myCartParent}>
                <div className={styles.enterYourEmail}>My cart</div>
                <div className={styles.div66}>$21</div>
              </div>
              <img
                className={styles.lisendIcon}
                alt=""
                src="/lichevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <img className={styles.profileChild} alt="" src="/ellipse-2@2x.png" />
          <div className={styles.subscribe}>Ramzi Cherif</div>
          <img className={styles.lisendIcon} alt="" src="/lichevrondown1.svg" />
        </div>
      </div>
      <div className={styles.topbar1}>
        <div className={styles.categoriesBtn}>
          <img
            className={styles.liarrowRightIcon}
            alt=""
            src="/lilayoutgrid.svg"
          />
          <div className={styles.subscribe}>Brows All Categories</div>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.frameParent34}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <div className={styles.enterYourEmail}>Home</div>
          </div>
          <div className={styles.hotDeals1Parent}>
            <img className={styles.hotDeals1} alt="" src="/hot-deals-1.svg" />
            <div className={styles.enterYourEmail}>Hot deals</div>
          </div>
          <div className={styles.hotDeals1Parent}>
            <img className={styles.frameIcon} alt="" src="/lipercent.svg" />
            <div className={styles.enterYourEmail}>Promotions</div>
          </div>
          <div className={styles.hotDeals1Parent}>
            <img className={styles.frameIcon} alt="" src="/limegaphone.svg" />
            <div className={styles.enterYourEmail}>New products</div>
          </div>
        </div>
        <div className={styles.support}>
          <img
            className={styles.iconlylightOutlinecall}
            alt=""
            src="/iconlylightoutlinecall.svg"
          />
          <div className={styles.subscribe}>1233-7777</div>
          <div className={styles.supportCenter}>24/7 support center</div>
        </div>
      </div>
      <img className={styles.homeChild7} alt="" src="/vector-3.svg" />
      <img className={styles.homeChild8} alt="" src="/vector-2.svg" />
    </div>
  );
};

export default Home;

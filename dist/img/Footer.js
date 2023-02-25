import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import AppContext from "../../AppContext";
// import icons
import { ReactComponent as WhiteLogo } from "/Users/tobyntt/projects/doordash/src/Icons/doordash-white-logo.svg";
import { ReactComponent as Merchants } from "../../Icons/merchants.svg";
// social network icons
import { ReactComponent as Twitter } from "../../Icons/Twitter.svg";
import { ReactComponent as Facebook } from "../../Icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../Icons/Instagram.svg";
import { ReactComponent as LinkedIn } from "../../Icons/LinkedIn.svg";

function Footer() {
  const { IsSignupOpen, setIsSignupOpen } = useContext(AppContext);
  const [IsSelectActive, SetIsSelectActive] = useState(false);
  const selectRef = useClickOutside(() => SetIsSelectActive(false));

  return (
    <footer className="footer">
      <section className="footer__banner">
        <div className="banner-container">
          <WhiteLogo className="banner-container__logo" />
          <button
            className="banner-container__modal-button"
            onClick={() => {
              setIsSignupOpen(!IsSignupOpen);
            }}
          >
            Become a Dasher
          </button>
          {/* Will need to build a OpenModal Button here */}
        </div>
      </section>
      <section className="footer__content">
        <article className="main-content">
          <Merchants className="merchants-logo" />

          {/*  navigate links <<< */}
          <nav className="nav">
            <div className="nav__earning">
              <h1 className="title">earning</h1>
              <ul>
                <li>
                  <Link to="/payment">Pay</Link>
                </li>
                <li>
                  <Link to="/discounts">Discounts</Link>
                </li>
              </ul>
            </div>

            <div className="nav__ways-to-dash">
              <h1 className="title">ways to dash</h1>
              <ul>
                <li>
                  <Link to="/shop-delivery">Shop & Deliver</Link>
                </li>
              </ul>
            </div>

            <div className="nav__community">
              <h1 className="title">community</h1>
              <ul>
                <li>
                  <Link to="/spotlights">Dasher Spotlights</Link>
                </li>
              </ul>
            </div>

            <div className="nav__resources">
              <h1 className="title">resourses</h1>
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/*  navigate links >>> */}

          {/* mobile apps and social network <<< */}
          <div className="mobile-and-network">
            <ul className="social-network">
              <li>
                <a href="https://twitter.com/doordash" target="blank">
                  <Twitter className="social-icons" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/DoorDash" target="blank">
                  <Facebook className="social-icons" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/doordash" target="blank">
                  <Instagram className="social-icons" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/doordash"
                  target="blank"
                >
                  <LinkedIn className="social-icons" />
                </a>
              </li>
            </ul>
            <ul className="mobile-apps">
              <li>
                <a
                  href="https://apps.apple.com/au/app/doordash-dasher/id1451754591"
                  target="blank"
                >
                  <img
                    src="https://img.cdn4dd.com/s/media/merchant/web/en/app-store-badge.svg"
                    className="apple-store applications"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.doordash.driverapp&hl=en&pli=1"
                  target="blank"
                >
                  <img
                    src="https://img.cdn4dd.com/s/media/merchant/web/en/google-play-badge.svg"
                    className="google-play applications"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* mobile apps and social network >>> */}
        </article>

        {/* footer bar <<< */}
        <article className="footer-bar">
          <div
            className={`select-wrapper ${
              IsSelectActive ? "select-active" : ""
            }`}
            ref={selectRef}
            onClick={() => SetIsSelectActive(true)}
          >
            <select name="language" id="language" className="language">
              <option value="US">English (US)</option>
              <option value="US">Español (US)</option>
              <option value="CA">English (CA)</option>
              <option value="CA">Français (CA)</option>
              <option value="AU" selected>
                English (AU)
              </option>
              <option value="NZ">English (NZ)</option>
            </select>
          </div>

          <div className="terms-and-privacy">
            <a href="#">Terms</a>
            <span>|</span>
            <a href="#">Privacy</a>
          </div>

          <div className="copyright">© 2022 DoorDash</div>
        </article>
        {/* footer bar >>> */}
      </section>
    </footer>
  );
}

export default Footer;

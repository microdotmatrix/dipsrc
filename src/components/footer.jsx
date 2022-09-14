import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Image from './image'

import dipBlack from "../assets/images/dip/dip_black.png";

import styles from "./footer.module.scss";
import { iconSize } from "../utils/elements";

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <div id="sock" className="container">
        <section className={styles.links}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/labels">Labels</Link>
          </nav>
        </section>
        <section className={styles.extras}>
          <ul>
            <li>
              <a href="https://facebook.com/dipdevices" target="_blank">
                <Icon
                  icon="mdi:facebook"
                  width={iconSize.w}
                  height={iconSize.h}
                />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/dipdevices" target="_blank">
                <Icon
                  icon="mdi:instagram"
                  width={iconSize.w}
                  height={iconSize.h}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dipdevices" target="_blank">
                <Icon
                  icon="mdi:twitter"
                  width={iconSize.w}
                  height={iconSize.h}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCQpX1jS1L2QQEF82vae8miw"
                target="_blank"
              >
                <Icon
                  icon="mdi:youtube"
                  width={iconSize.w}
                  height={iconSize.h}
                />
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.colophon}>
          <a href="https://dipdevices.com" target="_blank">
            <Image src={dipBlack} height="70" width="410" alt="DipDevices.com" />
          </a>
          <p className="text-small text-center">&copy; JP 2022</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

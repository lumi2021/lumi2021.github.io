import React, { type ReactNode } from "react";
import { FaGithub, FaFileAlt, FaNewspaper } from "react-icons/fa";
import {
    splitNavbarItems,
    useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import NavbarColorModeToggle from "../ColorModeToggle";
import clsx from "clsx";

export default function NavbarContent(): ReactNode {
    const mobileSidebar = useNavbarMobileSidebar();

    return (
        <div className={styles.navbar_content}>

            <div className={clsx(styles.items_container, styles.items_left)}>
                
                <Link to="/" className={clsx(styles.nav_link, styles.nav_home)}>
                </Link>

            </div>

            <div className={clsx(styles.items_container, styles.items_center)}>
        
                <Link to="/posts" className={clsx(styles.nav_link, styles.nav_app)}>
                    <FaFileAlt size={35} /> Posts
                </Link>

                <Link to="/blog" className={clsx(styles.nav_link, styles.nav_app)}>
                    <FaNewspaper size={35} /> Blog
                </Link>

            </div>

            <div className={clsx(styles.items_container, styles.items_right)}>
                <Link
                    to="https://github.com/lumi2021"
                    className={clsx(styles.nav_link, styles.nav_dock)}
                >
                    <FaGithub size={35} />
                </Link>
                <NavbarColorModeToggle className={clsx(styles.nav_dock)} />
            </div>

        </div>
    );
}

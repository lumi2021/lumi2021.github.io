import React, { type ComponentProps, type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames, useThemeConfig } from "@docusaurus/theme-common";
import {
    useHideableNavbar,
    useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import type { Props } from "@theme/Navbar/Layout";

import styles from "./styles.module.css";

function NavbarBackdrop(props: ComponentProps<"div">) {
    return (
        <div
            role="presentation"
            {...props}
            className={clsx("navbar-sidebar__backdrop", props.className)}
        />
    );
}

export default function NavbarLayout({ children }: Props): ReactNode {
    const {
        navbar: { hideOnScroll, style },
    } = useThemeConfig();
    const mobileSidebar = useNavbarMobileSidebar();
    const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
    return (
        <nav
            ref={navbarRef}
            
            aria-label={translate({
                id: "theme.NavBar.navAriaLabel",
                message: "Main",
                description: "The ARIA label for the main navigation",
            })}

            className={clsx(
                {
                    "navbar--dark": style === "dark",
                    "navbar--primary": style === "primary",
                    "navbar-sidebar--show": mobileSidebar.shown,
                },
                styles.navbar
            )}
        >
            <div className={styles.navbar_backdrop}></div>
            <div className={styles.navbar_content}>{children}</div>
            
            <NavbarBackdrop onClick={mobileSidebar.toggle} />
            <NavbarMobileSidebar />
        </nav>
    );
}

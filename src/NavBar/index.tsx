import React, { CSSProperties, PureComponent } from "react";
import classNames from "classnames";
import NavBarContainer, { NavBarContainerProps } from "./NavBarContainer";
import NavBarToggler, { NavBarTogglerProps } from "./NavBarToggler";
import NavBarBrand, { NavBarBrandProps } from "./NavBarBrand";
import NavBarCollapse from "./NavBarCollapse";
import NavBarMenu, { NavBarMenuProps } from "./NavBarMenu";
import NavBarMenuItem, { NavBarMenuItemProps } from "./NavBarMenuItem";
import NavBarDropdown, { NavBarDropdownProps } from "./NavBarDropdown";
import NavBarDropdownItem, {
  NavBarDropdownItemProps,
} from "./NavBarDropdownItem";
import type { BsBreakpoint } from "../common/types";

export type NavBarContainerType = React.ReactElement<NavBarContainerProps>;

export interface NavBarProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  theme?: "light" | "dark";
  expand?: BsBreakpoint;
  children: NavBarContainerType;
}

class NavBar extends PureComponent<NavBarProps> {
  public static Container: typeof NavBarContainer;
  public static Brand: typeof NavBarBrand;
  public static Toggler: typeof NavBarToggler;
  public static Collapse: typeof NavBarCollapse;
  public static Menu: typeof NavBarMenu;
  public static defaultProps: { expand: string; theme: string };
  public static MenuItem: typeof NavBarMenuItem;
  public static Dropdown: typeof NavBarDropdown;
  public static DropdownItem: typeof NavBarDropdownItem;
  render() {
    const { id, style, expand, theme, className, children } = this.props;
    return (
      <nav
        id={id}
        style={style}
        className={classNames(
          "rs-navbar navbar",
          `navbar-expand-${expand}`,
          `navbar-${theme}`,
          className
        )}
      >
        {children}
      </nav>
    );
  }
}

NavBar.Container = NavBarContainer;
NavBar.Brand = NavBarBrand;
NavBar.Toggler = NavBarToggler;
NavBar.Collapse = NavBarCollapse;
NavBar.Menu = NavBarMenu;
NavBar.MenuItem = NavBarMenuItem;
NavBar.Dropdown = NavBarDropdown;
NavBar.DropdownItem = NavBarDropdownItem;

NavBar.defaultProps = {
  expand: "xl",
  theme: "light",
};

export {
  NavBarContainer,
  NavBarBrand,
  NavBarToggler,
  NavBarMenu,
  NavBarMenuItem,
  NavBarDropdown,
  NavBarDropdownItem,
};
export type {
  NavBarContainerProps,
  NavBarBrandProps,
  NavBarTogglerProps,
  NavBarMenuProps,
  NavBarMenuItemProps,
  NavBarDropdownProps,
  NavBarDropdownItemProps,
};

export default NavBar;

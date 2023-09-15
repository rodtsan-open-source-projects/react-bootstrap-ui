import classNames from "classnames";
import React, { CSSProperties, PureComponent } from "react";
import { NavBarMenuProps } from "./NavBarMenu";
import { NavBarDropdownProps } from "./NavBarDropdown";

export type NavBarMenuType =
  | React.ReactElement<NavBarMenuProps>
  | React.ReactElement<NavBarDropdownProps>;

export interface NavBarCollapseProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  navbarCollapseId?: string;
  collapseRef?: (node: HTMLDivElement) => void;
  children: NavBarMenuType | NavBarMenuType[];
  priority?: number;
}

class NavBarCollapse extends PureComponent<NavBarCollapseProps> {
  public static defaultProps: { navbarCollapseId: string; priority: number };
  render() {
    const { style, collapseRef, navbarCollapseId, className, children } =
      this.props;
    return (
      <div
        id={navbarCollapseId}
        style={style}
        ref={collapseRef}
        className={classNames(
          "rs-navbar-collapse navbar-collapse collapse",
          className
        )}
      >
        {children}
      </div>
    );
  }
}

NavBarCollapse.defaultProps = {
  navbarCollapseId: "navbarSupportedContent",
  priority: 3,
};

export default NavBarCollapse;

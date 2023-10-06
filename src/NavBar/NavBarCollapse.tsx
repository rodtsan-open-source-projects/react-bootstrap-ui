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
  justifyContent?: "space-between" | "right" | "left";
  collapseRef?: (node: HTMLDivElement) => void;
  children: NavBarMenuType | NavBarMenuType[];
  priority?: number;
}

class NavBarCollapse extends PureComponent<NavBarCollapseProps> {
  public static defaultProps: {
    navbarCollapseId: string;
    justityContent: string;
    priority: number;
  };
  render() {
    const {
      style,
      collapseRef,
      navbarCollapseId,
      justifyContent,
      className,
      children,
    } = this.props;
    const justityContentClassName = `justify-${justifyContent}`;
    return (
      <div
        id={navbarCollapseId}
        style={style}
        ref={collapseRef}
        className={classNames(
          "rs-navbar-collapse navbar-collapse collapse",
          justityContentClassName,
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
  justityContent: "left",
  priority: 3,
};

export default NavBarCollapse;

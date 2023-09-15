import React, { CSSProperties, PureComponent } from "react";
import classNames from "classnames";
import { NavBarBrandProps } from "./NavBarBrand";
import { NavBarTogglerProps } from "./NavBarToggler";
import { NavBarCollapseProps } from "./NavBarCollapse";
import type { BsBreakpoint } from "../common/types";

export type NavBarBrandType = React.ReactElement<NavBarBrandProps>;
export type NavBarTogglerType = React.ReactElement<NavBarTogglerProps>;
export type NavBarCollapseType = React.ReactElement<NavBarCollapseProps>;

export type ContainerBreakpoint = BsBreakpoint | "fluid";

export type NavBarItemType =
  | NavBarBrandType
  | NavBarTogglerType
  | NavBarCollapseType;

export interface NavBarContainerProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: NavBarItemType[] | [];
  breakpoint?: ContainerBreakpoint;
}
class NavBarContainer extends PureComponent<NavBarContainerProps> {
  public static defaultProps: { breakpoint: string };
  render() {
    const { id, style, className, breakpoint, children } = this.props;
    const breakpointClassName = breakpoint
      ? `container-${breakpoint}`
      : "container";
    return (
      <div
        id={id}
        style={style}
        className={classNames(
          "rs-navbar-container navbar-container",
          breakpointClassName,
          className
        )}
      >
        {React.Children.map(children, (child: NavBarItemType, key: number) =>
          React.cloneElement(child, { key })
        ).sort(
          (a, b) => Number(a.props["priority"]) - Number(b.props["priority"])
        )}
      </div>
    );
  }
}

export default NavBarContainer;

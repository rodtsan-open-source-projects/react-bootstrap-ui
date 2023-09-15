import React, { CSSProperties, PureComponent, ReactNode } from "react";
import classNames from "classnames";

export interface NavItemProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

class NavItem extends PureComponent<NavItemProps> {
  render() {
    const { id, className, children } = this.props;
    return (
      <li id={id} className={classNames("rs-nav-item nav-item", className)}>
        {children}
      </li>
    );
  }
}

export { NavItem };

export type NavItemType = React.ReactElement<NavItemProps>;

export interface NavProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: NavItemType | NavItemType[] | [];
  /*
  * @type {"horizontal" | "vertical"} flex direction

  */
  orientation: "horizontal" | "vertical";
}

class Nav extends PureComponent<NavProps> {
  public static defaultProps: { direction: string };
  public static Item: typeof NavItem;
  render() {
    const flexOptions = {
      horizontal: "nav-pills",
      vertical: "flex-column",
    };
    const { id, style, orientation, className, children } = this.props;
    return (
      <ul
        id={id}
        style={style}
        className={classNames(
          "rs-nav nav",
          flexOptions[orientation],
          className
        )}
      >
        {children}
      </ul>
    );
  }
}

Nav.Item = NavItem;

Nav.defaultProps = {
  direction: "vertical",
};

export default Nav;

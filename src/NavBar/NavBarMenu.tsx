import React, { CSSProperties, PureComponent } from "react";
import classNames from "classnames";
import { NavBarMenuItemProps } from "./NavBarMenuItem";

export type NavBarMenuItemType = React.ReactElement<NavBarMenuItemProps>;

export interface NavBarMenuProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: NavBarMenuItemType | NavBarMenuItemType[] | [];
}

class NavBarMenu extends PureComponent<NavBarMenuProps> {
  public static defaultProps: {
    children: NavBarMenuItemType | NavBarMenuItemType[];
  };
  render() {
    const children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];
    const { id, style, className } = this.props;
    return (
      <ul
        id={id}
        style={style}
        className={classNames(
          "rs-navbar-nav navbar-nav mb-2 mb-lg-0",
          className
        )}
      >
        {React.Children.map(
          children,
          (child: NavBarMenuItemType, key: number) =>
            React.cloneElement(child, { key })
        )}
      </ul>
    );
  }
}

NavBarMenu.defaultProps = {
  children: [],
};

export default NavBarMenu;

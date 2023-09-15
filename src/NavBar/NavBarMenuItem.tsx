import classNames from "classnames";
import React, { CSSProperties, PureComponent } from "react";

export type Link = React.ReactElement<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
>;

export interface NavBarMenuItemProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  path?: string;
  active?: boolean;
  linkClassName?: string;
  children?: string | Link;
}

class NavBarMenuItem extends PureComponent<NavBarMenuItemProps> {
  public static defaultProps: { navbarMenuId: string; priority: number };
  render() {
    const { active, path, className, linkClassName, children } = this.props;
    return (
      <li
        className={classNames("nav-item", className, {
          active: active,
        })}
      >
        {React.isValidElement(children) ? (
          React.cloneElement(children, {
            "aria-current": "page",
            className: classNames("nav-link", linkClassName, {
              active: active,
            }),
          })
        ) : (
          <a
            href={path}
            className={classNames("nav-link", linkClassName, {
              active: active,
            })}
            aria-current="page"
          >
            {children}
          </a>
        )}
      </li>
    );
  }
}

export default NavBarMenuItem;

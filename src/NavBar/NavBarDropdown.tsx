import classNames from "classnames";
import React, { CSSProperties, PureComponent } from "react";
import { NavBarDropdownItemProps } from "./NavBarDropdownItem";

export type DropdownItemType = React.ReactElement<NavBarDropdownItemProps>;

export interface NavBarDropdownProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  path?: string;
  active?: boolean;
  toggleClassName?: string;
  toggleText?: string;
  children?: DropdownItemType | DropdownItemType[] | [];
}

class NavBarDropdown extends PureComponent<NavBarDropdownProps> {
  public static defaultProps: {
    navBarDropdownId: string;
  };
  render() {
    const { active, className, toggleText, toggleClassName, children } =
      this.props;
    return (
      <li
        className={classNames("nav-item dropdown", className, {
          active: active,
        })}
      >
        <span
          role="button"
          className={classNames(
            "dropdown-button dropdown-toggle",
            toggleClassName
          )}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {toggleText}
        </span>
        <ul className="dropdown-menu">{children}</ul>
      </li>
    );
  }
}

export default NavBarDropdown;

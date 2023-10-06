import React, { CSSProperties, Fragment, PureComponent } from "react";
import classNames from "classnames";

export interface NavBarBrandProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  href?: string;
  priority?: number;
}

class NavBarBrand extends PureComponent<NavBarBrandProps> {
  public static defaultProps: { href: string; priority: number };
  render() {
    const { children, className, href } = this.props;
    return (
      <a
        className={classNames("rs-navbar-brand navbar-brand", className)}
        href={href}
      >
        {children ?? (
          <Fragment>
            <span className="fa fa-brands fa-codepen" />
            <span className="_spacer" />
            <h4 className="navbar-brand-text navbar-brand--bold">
              Website Demo
            </h4>
          </Fragment>
        )}
      </a>
    );
  }
}

NavBarBrand.defaultProps = {
  href: "/",
  priority: 1,
};

export default NavBarBrand;

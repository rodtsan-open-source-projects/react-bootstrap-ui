import classNames from "classnames";
import React, { CSSProperties, PureComponent } from "react";

export interface NavBarTogglerProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  toggle?: string;
  target?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaLabel?: string;
  priority?: number;
}

class NavBarToggler extends PureComponent<NavBarTogglerProps> {
  public static defaultProps: {
    toggle: string;
    target: string;
    ariaControls: string;
    ariaExpanded: boolean;
    ariaLabel: string;
    priority: number;
  };
  render() {
    const {
      id,
      style,
      className,
      toggle,
      target,
      ariaControls,
      ariaExpanded,
      ariaLabel,
    } = this.props;
    return (
      <button
        id={id}
        style={style}
        className={classNames("rs-navbar-toggler navbar-toggler", className)}
        type="button"
        data-bs-toggle={toggle}
        data-bs-target={target}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={ariaLabel}
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    );
  }
}

NavBarToggler.defaultProps = {
  toggle: "collapse",
  target: "#navbarSupportedContent",
  ariaControls: "navbarSupportedContent",
  ariaExpanded: false,
  ariaLabel: "Toggle navigation",
  priority: 2,
};

export default NavBarToggler;

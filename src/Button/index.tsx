import React, { CSSProperties, PureComponent, ReactNode } from "react";
import classNames from "classnames";
import type { BsVariant } from "../common/types";

export interface ButtonProps {
  /**
   * Button Id
   */
  id?: string;
   /**
   * What type should the button be?
   */
  className?: string;
   /**
   * Add class to button
   */
  style?: CSSProperties;
  /**
   * What type should the button be?
   */
  type?: "button" | "submit" | "reset";
  /**
   * Whether the button is disabled or not.
   */
  disabled?: boolean;
  /**
   * Predefined button styles
   */
  variant?: BsVariant;
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 */
class Button extends PureComponent<ButtonProps> {
  public static defaultProps: { type: string; variant: string };
  render() {
    const { id, className, style, type, variant, disabled, children, onClick } =
      this.props;
    return (
      <button
        id={id}
        style={style}
        type={type}
        className={classNames("rs-btn btn", `btn-${variant}`, className)}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  type: "button",
  variant: "default",
};

export default Button;

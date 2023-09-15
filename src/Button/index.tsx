import React, { CSSProperties, PureComponent, ReactNode } from "react";
import classNames from "classnames";
import type { BsVariant } from "../common/types";

export interface ButtonProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: BsVariant;
  children: ReactNode;
}

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

import React, { CSSProperties, PureComponent } from "react";
import classNames from "classnames";

export interface VisiblePasswordProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  name?: string;
  isShow?: boolean;
  showLink?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

class VisiblePassword extends PureComponent<VisiblePasswordProps> {
  public static defaultProps: { name: string };
  render() {
    const { id, style, name, showLink, isShow, onClick, className } =
      this.props;
    const nameOrId = id || name;
    return (
      <div
        id={nameOrId}
        style={style}
        className={classNames("rs-visible-password", className)}
      >
        <label htmlFor={nameOrId} className="form-label">
          Password
        </label>
        <span className="visible-password">
          {showLink && (
            <button type="button" onClick={onClick}>
              <span>{isShow ? "Hide" : "Show"}</span>
            </button>
          )}
        </span>
      </div>
    );
  }
}

VisiblePassword.defaultProps = {
  name: "password",
};

export default VisiblePassword;

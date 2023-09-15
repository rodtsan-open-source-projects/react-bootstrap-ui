import React, { CSSProperties, PureComponent, ReactNode } from "react";
import classNames from "classnames";


export interface FormPlaceHolderProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  type?: "header" | "footer" | "placeholder";
}

class FormPlaceHolder extends PureComponent<FormPlaceHolderProps> {
  public static defaultProps: { type: string };
  render() {
    const { id, type, style, className, children } = this.props;
    return (
      <div
        id={id}
        style={style}
        className={classNames(
          "rs-form-group form-group",
          `rs-form-group-${type}`,
          className
        )}
      >
        {children}
      </div>
    );
  }
}

FormPlaceHolder.defaultProps = {
  type: "placeholder",
};

export default FormPlaceHolder;

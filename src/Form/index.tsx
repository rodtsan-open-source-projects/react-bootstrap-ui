import React, { CSSProperties, PureComponent, ReactNode } from "react";
import classNames from "classnames";
import { FormGroup, FormControl, FormPlaceHolder } from "..";

export interface FormProps {
  id?: string;
  className?: string;
  wrapperId?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
  noValidate?: boolean;
  children: ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

class Form extends PureComponent<FormProps> {
  public static Group: typeof FormGroup;
  public static Control: typeof FormControl;
  public static PlaceHolder: typeof FormPlaceHolder;

  render() {
    const {
      id,
      wrapperId,
      style,
      className,
      wrapperClassName,
      children,
      noValidate,
      onSubmit,
    } = this.props;
    return (
      <div
        id={wrapperId}
        className={classNames("rs-form-wrapper container", wrapperClassName)}
      >
        <form
          id={id}
          style={style}
          className={classNames("rs-form form-horizontal", className)}
          onSubmit={onSubmit}
          noValidate={noValidate}
        >
          {children}
        </form>
      </div>
    );
  }
}

Form.PlaceHolder = FormPlaceHolder;
Form.Group = FormGroup;
Form.Control = FormControl;

export default Form;

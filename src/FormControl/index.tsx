import React, {
  CSSProperties,
  Fragment,
  PureComponent,
  ReactNode,
} from "react";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";
import classNames from "classnames";
import type { BsBreakpoint } from "../common/types";

export type Option = React.ReactElement<
  React.OptionHTMLAttributes<HTMLOptionElement>
>;

export interface FormControlProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  name?: string;
  value?: string;
  label?: string | ReactNode;
  placeholder?: string;
  defaultValue?: string;
  tabIndex?: number;
  breakpoint?: BsBreakpoint;
  required?: boolean;
  isInvalid?: boolean;
  showErrorMessage?: boolean;
  errorMessage?: string;
  maxLength?: number;
  type?: "text" | "password" | "textarea" | "select";
  readOnly?: boolean;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  children?: Option[] | Option | [];
  // @property: textarea number of rows
  /**
   * @type {number} textarea rows
   */
  rows?: number;
}

class FormControl extends PureComponent<FormControlProps> {
  public static defaultProps: {
    type: string;
    readOnly: boolean;
    showErrorMessage: boolean;
    maxLength: number;
    rows: number;
  };
  render() {
    const controlProps = omit(this.props, [
      "tabIndex",
      "required",
      "isInvalid",
      "label",
      "showErrorMessage",
      "errorMessage",
      "readOnly",
      "children",
      "breakpoint",
    ]);
    const {
      id,
      name,
      label,
      isInvalid,
      children,
      showErrorMessage,
      errorMessage,
      breakpoint,
    } = this.props;
    const isReactNode = React.isValidElement(label);
    const hasError = !isEmpty(errorMessage);
    const nameOrId = name || id;
    const nameProps = {
      id: nameOrId,
      name: nameOrId,
    };
    const breakpointClassName = breakpoint ? `form-control-${breakpoint}` : "";
    return (
      <Fragment>
        {isReactNode ? (
          <Fragment>{label}</Fragment>
        ) : (
          <label
            htmlFor={controlProps?.id}
            className="rs-form-label form-label"
          >
            {label} {isInvalid && <span className="text-danger">*</span>}
          </label>
        )}
        {(() => {
          switch (controlProps?.type) {
            case "select":
              return (
                <select
                  {...controlProps}
                  className={classNames(
                    "rs-form-control form-control",
                    breakpointClassName,
                    {
                      invalid: hasError && isInvalid,
                    }
                  )}
                >
                  {children}
                </select>
              );
            case "textarea":
              return (
                <textarea
                  {...controlProps}
                  className={classNames("rs-form-control form-control", {
                    invalid: hasError && isInvalid,
                  })}
                />
              );
            default:
              return (
                <input
                  type="text"
                  className={classNames("rs-form-control form-control", {
                    invalid: hasError && isInvalid,
                  })}
                  {...controlProps}
                  {...nameProps}
                />
              );
          }
        })()}
        {showErrorMessage && hasError && (
          <div className="text-danger">{errorMessage}</div>
        )}
      </Fragment>
    );
  }
}

FormControl.defaultProps = {
  type: "text",
  readOnly: false,
  showErrorMessage: true,
  maxLength: 225,
  rows: 3,
};

export default FormControl;

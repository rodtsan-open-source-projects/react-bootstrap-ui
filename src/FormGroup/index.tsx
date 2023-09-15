import React, { CSSProperties, Component, ReactNode } from "react";
import classNames from "classnames";
import FormControl, { FormControlProps } from "../FormControl";
import type { BsBreakpoint } from "../common/types";

type FormControlType = React.ReactElement<FormControlProps>;

export interface FormGroupProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  // @property: textarea number of rows
  /**
   * @type {Breakpoint} grid options
   */
  breakpoint?: BsBreakpoint;
  children: FormControlType | FormControlType[] | ReactNode | ReactNode[] | [];
}

class FormGroup extends Component<FormGroupProps> {
  static Control: typeof FormControl;
  static defaultProps: { children: [] };

  render() {
    const { id, style, className, children, breakpoint } = this.props;
    const formControls: FormControlType[] | ReactNode[] | [] = Array.isArray(
      children
    )
      ? children
      : [children];

    const col = 12 / formControls.length;
    const formGroupClassName = breakpoint ? `form-group-${breakpoint}` : "";
    return (
      <div
        id={id}
        style={style}
        className={classNames(
          "rs-form-group form-group",
          formGroupClassName,
          className
        )}
      >
        {React.Children.map(
          children,
          (child: FormControlType | ReactNode, key: number) => {
            return (
              <div
                className={classNames("col ", `col-${col}`, `col-${col}-lg`)}
              >
                {React.isValidElement(child)
                  ? React.cloneElement(child, { key })
                  : child}
              </div>
            );
          }
        )}
      </div>
    );
  }
}

FormGroup.defaultProps = {
  children: [],
};

FormGroup.Control = FormControl;

export default FormGroup;

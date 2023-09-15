import { CSSProperties, PureComponent, ReactNode } from "react";
import classNames from "classnames";
import React from "react";

/* Custom form container according to page theme */
/* Will be able to set element appearance and responsiveness from here */

export interface ColSpan {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

interface ColProps {
  id?: string;
  style?: CSSProperties;
  children: ReactNode | ReactNode[];
  className?: string;
  span: ColSpan;
}

class Col extends PureComponent<ColProps> {
  public static defaultProps: { span?: ColSpan };
  render() {
    const { id, style, span, className, children } = this.props;

    const columnClassNames = Object.keys(span)
      .filter((k: string) => span[k as keyof ColSpan] !== undefined)
      .map((k) => {
        if (k === "xs") {
          return `col-${span[k]}`;
        }
        return `col-${k}-${span[k as keyof ColSpan]}`;
      });
    return (
      <div
        id={id}
        style={style}
        className={classNames("rs-col", columnClassNames, className)}
      >
        {children}
      </div>
    );
  }
}

Col.defaultProps = {
  span: {},
};

export type { ColProps };

export { Col };

export interface RowProps {
  id?: string;
  style?: CSSProperties;
  children: ReactNode | ReactNode[];
  className?: string;
}

class Row extends PureComponent<RowProps> {
  public static Col: typeof Col;
  render() {
    const { id, style, className, children } = this.props;
    return (
      <div
        id={id}
        style={style}
        className={classNames("rs-row row", className)}
      >
        {children}
      </div>
    );
  }
}

Row.Col = Col;

export default Row;

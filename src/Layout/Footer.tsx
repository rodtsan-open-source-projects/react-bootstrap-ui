import React, { CSSProperties } from "react";
import classNames from "classnames";




export interface LayoutFooterProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

class LayoutFooter extends React.PureComponent<LayoutFooterProps> {
  render() {
    const { id, style, className, children } = this.props;
    return (
      <footer
        id={id}
        style={style}
        className={classNames("rs-layout-footer layout-footer", className)}
      >
        {children}
      </footer>
    );
  }
}

export default LayoutFooter;

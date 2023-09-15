import classNames from "classnames";
import React, { CSSProperties } from "react";

export interface LayoutHeaderProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

class LayoutHeader extends React.PureComponent<LayoutHeaderProps> {
  render() {
    const { id, style, className, children } = this.props;
    return (
      <header
        id={id}
        style={style}
        className={classNames("rs-layout-header layout-header", className)}
      >
        {children}
      </header>
    );
  }
}

export default LayoutHeader;

import React, { CSSProperties } from "react";
import classNames from "classnames";



export interface LayoutContentProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

class LayoutContent extends React.PureComponent<LayoutContentProps> {
  render() {
    const { id, style, className, children } = this.props;
    return (
      <main
        id={id}
        style={style}
        className={classNames("rs-layout-content layout-content", className)}
      >
        {children}
      </main>
    );
  }
}

export default LayoutContent;

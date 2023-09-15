import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import LayoutFooter, { LayoutFooterProps } from "./Footer";
import LayoutHeader, { LayoutHeaderProps } from "./Header";
import LayoutContent, { LayoutContentProps } from "./Content";

export interface LayoutProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

class Layout extends React.PureComponent<LayoutProps> {
  public static Header: typeof LayoutHeader;
  public static Content: typeof LayoutContent;
  public static Footer: typeof LayoutFooter;
  render() {
    const { id, style, className, children } = this.props;
    return (
      <div
        id={id}
        style={style}
        className={classNames("rs-layout layout", className)}
      >
        {children}
      </div>
    );
  }
}

Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;

export type { LayoutHeaderProps, LayoutContentProps, LayoutFooterProps };

export type { LayoutHeader, LayoutContent, LayoutFooter };

export default Layout;

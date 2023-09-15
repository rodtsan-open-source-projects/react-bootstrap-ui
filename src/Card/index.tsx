import React, { CSSProperties } from "react";
import { PureComponent, ReactNode } from "react";
import classNames from "classnames";

/* Custom form container according to page theme */
/* Will be able to set element appearance and responsiveness from here */

export interface CardContentProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export class CardHeader extends PureComponent<CardContentProps> {
  render() {
    const { id, style, className, children } = this.props;
    return (
      <div
        id={id}
        style={style}
        className={classNames("rs-card-header card-header", className)}
      >
        {children}
      </div>
    );
  }
}

export class CardBody extends PureComponent<CardContentProps> {
  render() {
    const { id, style, className, children } = this.props;
    return (
      <div
        id={id}
        style={style}
        className={classNames("rs-card-body card-body", className)}
      >
        {children}
      </div>
    );
  }
}

export class CardFooter extends PureComponent<CardContentProps> {
  render() {
    const { id, style, className, children } = this.props;
    return (
      <div
        id={id}
        style={style}
        className={classNames("rs-card-footer card-footer", className)}
      >
        {children}
      </div>
    );
  }
}

export type CardContentType = React.ReactElement<CardContentProps>;

export interface CardProps {
  children: CardContentType | CardContentType[];
  className?: string;
}

class Card extends PureComponent<CardProps> {
  static Header: typeof CardHeader;
  static Body: typeof CardBody;
  static Footer: typeof CardFooter;
  render() {
    const { className, children } = this.props;
    return (
      <div className={classNames("rs-card card", className)}>{children}</div>
    );
  }
}

Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Body = CardBody;

export default Card;

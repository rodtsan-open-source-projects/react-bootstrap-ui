import { CSSProperties, PureComponent, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import React from "react";

/* Custom form container according to page theme */
/* Will be able to set element appearance and responsiveness from here */

export type ReactNodeType = React.ReactElement<
  React.HTMLAttributes<HTMLElement>
>;

export interface FlexProps {
  id?: string;
  style?: CSSProperties;
  children: ReactNodeType[] | [];
  className?: string;
  display?: "inline" | "flex";
  flexDirection?: "row" | "column";
  verticalAlignItems?: "center" | "start" | "end" | "normal";
  horizontalAlignItems?: "center" | "start" | "end" | "normal";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "normal";
}

class Flex extends PureComponent<FlexProps> {
  public static defaultProps: {
    flexDirection?: string;
    verticalAlignItems: string;
    horizontalAlignItems: string;
    justifyContent: string;
  };
  render() {
    const {
      id,
      style,
      flexDirection = "row",
      verticalAlignItems = "normal",
      horizontalAlignItems = "normal",
      justifyContent = "normal",
      className,
      children,
    } = this.props;
    const flexDirections = {
      row: "flex-direction-row",
      column: "flex-direction-column",
    };
    const verticalAlignOptions = {
      center: "vertical-center",
      start: "vertical-start",
      end: "vertical-end",
      normal: "",
    };
    const horizontalAlignOptions = {
      center: "horizontal-center",
      start: "horizontal-start",
      end: "horizontal-end",
      normal: "",
    };
    const justifyContentOptions = {
      start: "justify-content-start",
      center: "justify-content-center",
      "space-between": "justify-content-space-between",
      "space-around": "justify-content-space-around",
      "space-evenly": "justify-content-space-evenly",
      normal: "",
    };
    const mapChildren = Array.isArray(children) ? children : [children];
    return (
      <div
        id={id}
        style={style}
        className={classNames(
          "rs-flex-container flex-container",
          flexDirections[flexDirection],
          verticalAlignOptions[verticalAlignItems],
          horizontalAlignOptions[horizontalAlignItems],
          justifyContentOptions[justifyContent],
          className
        )}
      >
        {React.Children.map(
          mapChildren,
          (child: ReactNodeType, key: number) => {
            return React.cloneElement(child, {
              key,
              className: classNames("flex-item", child.props.className),
            });
          }
        )}
      </div>
    );
  }
}

Flex.defaultProps = {
  flexDirection: "row",
  verticalAlignItems: "normal",
  horizontalAlignItems: "normal",
  justifyContent: "normal",
};

export default Flex;

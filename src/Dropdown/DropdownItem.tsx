import React, { PureComponent, ReactNode } from "react";
import classNames from "classnames";

export interface ItemOption {
  value?: string;
  text?: ReactNode | string;
}

export interface DropdownItemProps {
  key?: React.Key;
  selected?: boolean;
  value?: string;
  tabIndex?: number;
  children?: ReactNode | string;
  onCancel?: () => void;
  onClick?: (option: ItemOption) => void;
}

class DropdownItem extends PureComponent<DropdownItemProps> {
  handleClick =
    (option: ItemOption) =>
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const parent: HTMLUListElement = event.currentTarget
        .parentElement as HTMLUListElement;
      parent.classList.remove("show");
      parent.ariaExpanded = "false";
      parent.previousElementSibling?.classList.remove("show");
      this.props.onClick!(option);
      event.preventDefault();
      event.stopPropagation();
    };

  public static defaultProps: {
    selected: boolean;
    value: string;
    children: React.JSX.Element;
  };

  render() {
    const { key, value, tabIndex, children } = this.props;
    return (
      <li
        className="rs-dropdown-option"
        key={key}
        onClick={this.handleClick({
          value: value!,
          text: children,
        })}
        tabIndex={tabIndex}
        role="option"
      >
        <a
          className={classNames("rs-dropdown-item dropdown-item", {
            active: this.props.selected,
          })}
          href="#"
          role="link"
        >
          {children}
        </a>
      </li>
    );
  }
}

DropdownItem.defaultProps = {
  selected: false,
  value: "",
  children: <></>,
};

export default DropdownItem;

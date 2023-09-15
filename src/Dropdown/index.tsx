import React, { CSSProperties, PureComponent } from "react";
import DropdownItem, { DropdownItemProps, ItemOption } from "./DropdownItem";
import classNames from "classnames";


export type DropdownItemType = React.ReactElement<DropdownItemProps>;
export interface DropdownProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  name?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  showSearch?: boolean;
  // @property: font-awesome icons
  /**
   * @type {string} font-awesome icon i.e search, flag.
   */
  icon?: "search" | string | undefined;
  children: DropdownItemType | DropdownItemType[] | [];
  tabIndex?: number;
  onValueChange?: (value: string) => void;
  onChange?: (option: ItemOption) => void;
}

export interface DropdownState {
  open: boolean;
  selectedValue?: string;
}

class Dropdown extends PureComponent<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      open: false,
      selectedValue: props.value || props.defaultValue,
    };
  }

  static Item: typeof DropdownItem;
  static defaultProps: { children: [] };

  handleClick = (option: ItemOption) => {
    this.setState({ selectedValue: option.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(option);
      }
      if (this.props.onValueChange) {
        this.props.onValueChange(option.value!);
      }
    });
  };

  render() {
    const { selectedValue } = this.state;
    const children: DropdownItemType[] = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];
    const itemProps = children
      .map((child: DropdownItemType) => ({
        text: child.props.children,
        value: child.props.value?.toLowerCase(),
      }))
      .find((item) => item.value === selectedValue) || {
      text: children[0]?.props.children,
      value: children[0]?.props.value,
    };
    const { id, style, className, icon } = this.props;
    return (
      <div
        id={id}
        style={style}
        className={classNames("rs-dropdown dropdown", className)}
      >
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {icon && (
            <span className={classNames(`dropdown-icon fa fa-${icon}`)} />
          )}
          {itemProps.text}
        </button>
        <ul className="dropdown-menu">
          {React.Children.map(
            children,
            (child: DropdownItemType, key: number) => {
              const childProps = {
                tabIndex: key,
                selected: itemProps.value?.includes(child.props.value!),
                onClick: this.handleClick,
              };
              return React.cloneElement(child, {
                key,
                ...childProps,
              });
            }
          )}
        </ul>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  children: [],
};

Dropdown.Item = DropdownItem;

export default Dropdown;

import React, { CSSProperties, PureComponent, ReactNode } from "react";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";

export interface ModalProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  title: string;
  okText?: string;
  cancelText?: string;
  dialogClassName?: string;
  dialogStyle?: CSSProperties;
  visible?: boolean;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLElement>;
  children: ReactNode;
}

class Modal extends PureComponent<ModalProps> {
  public static defaultProps: {
    visible: boolean;
    title: string;
    cancelText: string;
    okText: string;
  };
  render() {
    const {
      id,
      title,
      okText,
      cancelText,
      className,
      dialogClassName,
      style,
      dialogStyle,
      visible,
      onOk,
      onCancel,
      children,
    } = this.props;
    return (
      visible && (
        <div
          id={id}
          style={style}
          className={classNames("rs-modal modal", className, {
            show: visible,
          })}
          tabIndex={-1}
        >
          <div
            style={dialogStyle}
            className={classNames(
              "rs-modal-dialog modal-dialog",
              dialogClassName
            )}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={onCancel}
                ></button>
              </div>
              <div className="modal-body">{children}</div>
              {(!isEmpty(okText) || !isEmpty(cancelText)) && (
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={onCancel}
                  >
                    {cancelText}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onOk}
                  >
                    {okText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    );
  }
}

Modal.defaultProps = {
  visible: false,
  title: "Modal title",
  cancelText: "Close",
  okText: "Save Changes",
};

export default Modal;

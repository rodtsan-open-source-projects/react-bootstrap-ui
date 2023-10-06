import React, { PureComponent, ReactNode } from "react";
import classNames from "classnames";

interface CarouselItemProps {
  src: string;
  alt?: string;
  active?: boolean;
  children?: ReactNode;
}

class CarouselItem extends PureComponent<CarouselItemProps> {
  public static defaultProps: { active: boolean };
  render() {
    const { src, alt, active, children } = this.props;
    return (
      <div className={classNames("rs-carousel-item carousel-item", { active })}>
        <img src={src} className="d-block w-100" alt={alt} />
        {React.isValidElement(children) && (
          <div className="carousel-caption d-none d-md-block">{children}</div>
        )}
      </div>
    );
  }
}

CarouselItem.defaultProps = {
  active: false,
};

export { CarouselItem };

export type CarouselItemType = React.ReactElement<CarouselItemProps>;

interface CarouselProps {
  id?: string;
  withIndicators?: boolean;
  withCaptions?: boolean;
  children: CarouselItemType | CarouselItemType[];
}

class Carousel extends PureComponent<CarouselProps> {
  public static Item: typeof CarouselItem;
  public static defaultProps: { id: string; withIndicators: boolean };
  render() {
    const children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];
    const { id, withIndicators = false } = this.props;
    const carouselId = `#${id}`;
    return (
      <div
        id={id}
        className="rs-carousel carousel slide"
        data-bs-ride="carousel"
      >
        {withIndicators && (
          <div className="carousel-indicators">
            {React.Children.map(
              children,
              (child: CarouselItemType, key: number) => (
                <button
                  key={key}
                  type="button"
                  data-bs-target={carouselId}
                  data-bs-slide-to={key}
                  className={classNames({
                    active: child.props.active,
                  })}
                  aria-current={child.props.active}
                  aria-label={`Slide ${key + 1}`}
                ></button>
              )
            )}
          </div>
        )}
        <div className="carousel-inner">{children}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={carouselId}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={carouselId}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export type { CarouselProps, CarouselItemProps };

Carousel.Item = CarouselItem;
Carousel.defaultProps = {
  id: "carouselExampleIndicators",
  withIndicators: false,
};

export default Carousel;

import classNames from "classnames";
import React from "react";
import { statusStyle } from "../../helpers";
import styles from "./index.module.scss";

const Card = ({ result }) => {
  const { image, name, status, location } = result;
  return (
    <div className={classNames('col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark')}>
      <div
        className={classNames(styles.card, `d-flex flex-column justify-content-center`)}
      >
        <img className={classNames(styles.img, `img-fluid`)} src={image} alt="" />
        <div className={styles.content}>
          <div className="fs-5 fw-bold mb-4">{name}</div>
          <div className="">
            <div className="fs-6 fw-normal">Last Location</div>
            <div className="fs-5">{location.name}</div>
            <div
              className={classNames(styles.badge, `position-absolute badge`, statusStyle(status))}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

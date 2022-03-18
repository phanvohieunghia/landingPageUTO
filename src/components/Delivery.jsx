import React from "react";
import DeliveryImg from "../assets/img/delivery/xe.png";
import { HiCheckCircle } from "react-icons/hi";
import ParadigmImg from "../assets/img/delivery/mohinh1.png";

const Delivery = () => {
  return (
    <section className="delivery">
      <div className="delivery-empty"></div>
      <div className="delivery-main">
        <div className="delivery-container">
          <div className="delivery-container__wrapper">
            <img
              className="delivery-container__img1"
              src={DeliveryImg}
              alt="dont show"
            />
            <div className="delivery-container__content">
              <div className="delivery-container__title">
                CỔNG VẬN CHUYỂN VÀ THU TIỀN HỘ TOÀN QUỐC
              </div>
              <div className="delivery-container__item">
                <HiCheckCircle className="delivery-container__item-icon" />
                <span className="delivery-container__item-text">
                  Lấy hàng tận nhà, phát hàng toàn quốc
                </span>
              </div>
              <div className="delivery-container__item">
                <HiCheckCircle className="delivery-container__item-icon" />
                <span className="delivery-container__item-text">
                  Chi phí tối ưu, chiết khấu cao
                </span>
              </div>
              <div className="delivery-container__item">
                <HiCheckCircle className="delivery-container__item-icon" />
                <span className="delivery-container__item-text">
                  Nhận tiền COD hằng ngày
                </span>
              </div>
              <div className="delivery-container__item">
                <HiCheckCircle className="delivery-container__item-icon" />
                <span className="delivery-container__item-text">
                  Hỗ trợ xử lý khiếu nại
                </span>
              </div>
              <div className="delivery-container__item">
                <HiCheckCircle className="delivery-container__item-icon" />
                <span className="delivery-container__item-text yellow-color">
                  MIỄN PHÍ CHUYỂN HÀNG VỀ
                </span>
              </div>
            </div>
          </div>
          <img className="delivery-container__img2" src={ParadigmImg} alt="dont show" />
        </div>
      </div>
    </section>
  );
};

export default Delivery;

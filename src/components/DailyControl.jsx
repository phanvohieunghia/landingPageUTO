import React from "react";
import { ImCheckmark } from "react-icons/im";
import DailyControlImg1 from "../assets/img/dailyControl/laptop.png";
import DailyControlImg2 from "../assets/img/dailyControl/doisoat.png";

const DailyControl = () => {
  return (
    <section className="daily-control">
      <div className="daily-control__container">
        <div className="daily-control__row1">
          <div className="daily-control__row1-left">
            <div className="daily-control__row1-left__content">
              <div className="daily-control__row1-left__title">
                ĐỐI SOÁT HẰNG NGÀY
              </div>
              <div className="daily-control__row1-left__item">
                <ImCheckmark className="daily-control__row1-left__icon" />
                <div className="daily-control__row1-left__text">
                  Nhận tiền thu hộ COD hằng ngày không lo đọng vốn qua trực tiếp
                  tài khoản ngân hàng
                </div>
              </div>
              <div className="daily-control__row1-left__item">
                <ImCheckmark className="daily-control__row1-left__icon" />
                <div className="daily-control__row1-left__text">
                  Bảng kê chi tiết các lần thanh toán rõ ràng
                </div>
              </div>
              <div className="daily-control__row1-left__item">
                <ImCheckmark className="daily-control__row1-left__icon" />
                <div className="daily-control__row1-left__text">
                  Dễ dàng kiểm tra tình trạng thanh toán của từng đơn hàng
                </div>
              </div>
              <div className="daily-control__row1-left__item">
                <ImCheckmark className="daily-control__row1-left__icon" />
                <div className="daily-control__row1-left__text">
                  Chiết khấu cước vận chuyển theo tổng đơn hàng tháng
                </div>
              </div>
            </div>
          </div>
          <div className="daily-control__row1-right">
            <img
              src={DailyControlImg1}
              alt="dont show"
              className="daily-control__row1-right__img"
            />
          </div>
        </div>
        <div className="daily-control__row2">
          <img
            src={DailyControlImg2}
            alt="dont show"
            className="daily-control__row2__img"
          />
        </div>
      </div>
    </section>
  );
};

export default DailyControl;

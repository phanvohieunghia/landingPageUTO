import React from "react";
import { ImCheckmark } from "react-icons/im";
import InfoBoardImg from "../assets/img/benefit/bangthongtin.png";
import SearchAtImg from "../assets/img/benefit/tracuu.png";

const Benefit = () => {
  return (
    <section className="benefit">
      <div className="benefit-container">
        <div className="benefit-container__content">
          <div className="benefit-container__title">
            TRA CƯỚC DỄ DÀNG,
            <br />
            TỐI ƯU CHI PHÍ
          </div>
          <div className="benefit-container__item">
            <ImCheckmark className="benefit-container__icon" />
            <span className="benefit-container__text">
              Cam kết giá tốt, minh bạch và đơn giản
            </span>
          </div>
          <div className="benefit-container__item">
            <ImCheckmark className="benefit-container__icon" />
            <span className="benefit-container__text">
              Chi phí tối ưu, chiết khấu cao
            </span>
          </div>
          <div className="benefit-container__item">
            <ImCheckmark className="benefit-container__icon" />
            <span className="benefit-container__text">
              Nhận tiền COD hằng ngày
            </span>
          </div>
          <div className="benefit-container__item">
            <ImCheckmark className="benefit-container__icon" />
            <span className="benefit-container__text">
              Hỗ trợ xử lý khiếu nại
            </span>
          </div>
          <div className="benefit-container__item">
            <ImCheckmark className="benefit-container__icon" />
            <span className="benefit-container__text">
              Sử dụng dịch vụ ngay sau khi đăng ký
            </span>
          </div>
          <div className="benefit-container__item">
            <ImCheckmark className="benefit-container__icon" />
            <span className="benefit-container__text">
              Sử dụng linh hoạt
              <br />
              cùng lúc nhiều đơn vị
              <br />
              vận chuyển để tiết
              <br />
              kiệm chi phí
            </span>
          </div>
          <img
            src={SearchAtImg}
            alt="dont show"
            className="benefit-container__background1"
          />
          <img
            src={InfoBoardImg}
            alt="dont show"
            className="benefit-container__background2"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefit;

import React from "react";
import OrderManagementImg from "../assets/img/orderManagement/background.png";
import { ImCheckmark } from "react-icons/im";

const OrderManagement = () => {
  return (
    <section className="order-management">
      <div className="order-management-container">
        <div className="order-management-left">
          <img
            src={OrderManagementImg}
            alt="dont show"
            className="order-management-left__img"
          />
        </div>
        <div className="order-management-right">
          <h4 className="order-management-right__title">
            QUẢN LÝ ĐƠN HÀNG TẬP TRUNG
          </h4>
          <div className="order-management-right__item">
            <ImCheckmark className="order-management-right__icon" />
            <div className="order-management-right__text">
              Cam kết giá tốt, mình bạch và đôn giản
            </div>
          </div>
          <div className="order-management-right__item">
            <ImCheckmark className="order-management-right__icon" />
            <div className="order-management-right__text">
              Chi phí tối ưu, chiết khấu cao
            </div>
          </div>
          <div className="order-management-right__item">
            <ImCheckmark className="order-management-right__icon" />
            <div className="order-management-right__text">
              Nhận tiền COD hằng ngày
            </div>
          </div>
          <div className="order-management-right__item">
            <ImCheckmark className="order-management-right__icon" />
            <div className="order-management-right__text">
              Hỗ trợ xử lý khiếu nại
            </div>
          </div>
          <div className="order-management-right__item">
            <ImCheckmark className="order-management-right__icon" />
            <div className="order-management-right__text">
              Sử dụng dịch vụ ngay sau khi đăng ký
            </div>
          </div>
          <div className="order-management-right__item">
            <ImCheckmark className="order-management-right__icon" />
            <div className="order-management-right__text">
              Sử dụng linh hoạt cùng lúc nhiều đơn vị vận chuyển để tiết kiệm
              chi phí
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderManagement;

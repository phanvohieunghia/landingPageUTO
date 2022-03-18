import React from "react";
import ComplainImg from "../assets/img/complain/support.png";

const dataImg = [
  {
    text: "Chuyển hàng",
  },
  {
    text: "Chậm phát hàng",
  },
  {
    text: "Huỷ đơn",
  },
  {
    text: "Lưu kho",
  },
  {
    text: "Đền bù khi mất hàng",
  },
  {
    text: "Chậm lấY hàng",
  },
  {
    text: "Không liên lạc được khách hàng",
  },
  {
    text: "Kiểm tra lịch trình vận đơn",
  },
  {
    text: "Hoàn hàng về",
  },
];
const Complain = () => {
  return (
    <section className="complain">
      <div className="complain-container">
        <div className="complain-left">
          <h3 className="complain-left__title">HỖ TRỢ KHIẾU NẠI</h3>
          <div className="complain-left__content">
            <div className="complain-left__content-left">
              {dataImg.map((data, i) => {
                if (i < 5) {
                  return (
                    <div className="complain-left__content-item">
                      <img
                        src={require(`../assets/img/complain/ic${String(
                          i + 1
                        )}.png`)}
                        alt="dont show"
                        className="complain-left__content-icon"
                      />
                      <span className="complain-left__content-text">
                        {data.text}
                      </span>
                    </div>
                  );
                }
                return <></>;
              })}
            </div>
            <div className="complain-left__content-right">
              {dataImg.map((data, i) => {
                if (i >= 5) {
                  return (
                    <div className="complain-left__content-item">
                      <img
                        src={require(`../assets/img/complain/ic${String(i+ 1)}.png`)}
                        alt="dont show"
                        className="complain-left__content-icon"
                      />
                      <span className="complain-left__content-text">
                        {data.text}
                      </span>
                    </div>
                  );
                }
                return <></>;
              })}
            </div>
          </div>
          <div className="complain-left__footer">
            <div className="complain-left__footer-contact">
              Liên hệ: cskh@uto.vn
            </div>
          </div>
        </div>
        <div className="complain-right">
          <img src={ComplainImg} alt="dont show" className="complain-right__img" />
        </div>
      </div>
    </section>
  );
};

export default Complain;

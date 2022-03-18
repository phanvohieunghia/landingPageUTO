import React from 'react'
import WorryImg from '../assets/img/suynghi.png'

const Worry = () => {
  return (
    <section className="worry">
      <div className="worry-container">
        <div className="worry-left">
          <img src={WorryImg} alt="dont show" className="worry-left__img" />
        </div>
        <div className="worry-right">
          <div className="worry-right__idea worry-right__idea1">
            Chi phí vận chuyển tháng này cao quá
          </div>
          <div className="worry-right__idea worry-right__idea2">
            Đã bị "Boom" hàng giờ còn phải chịu thêm chi phí chuyển hàng
          </div>
          <div className="worry-right__idea worry-right__idea3">
            Làm sao để giao hàng nhanh đây
          </div>
        </div>
      </div>
      <div className="worry-footer">
        Thấu hiểu được nỗi lo của khách hàng, UTO cho ra mắt thị trường dịch vụ liên kết U-Post giúp tối ưu hóa chi phí vận chuyển và tăng trải nghiệm mới cho khách hàng.
      </div>
    </section>
  )
}

export default Worry
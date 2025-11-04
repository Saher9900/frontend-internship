import "./Footer.style.css";

import { Link } from "react-router-dom";

// icons
import { BsEnvelopeFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

// images
import Underline from "../../assets/images/smallicon.png";
import Payment from "../../assets/images/payment.png"
import Frame from "../../assets/images/Frame 28.png"

function Footer() {
  return (
    <div className="Footer text-end">
        {/* top */}
        <div className="cus-top container d-flex flex-row-reverse justify-content-between">
          {/* logo */}
          <div className="cus-logo d-flex flex-column justify-content-between">
            <div className="">
              <div className="h4">Logo</div>
              <p>
                انضم الينا و اكتشف كنوز الطبيعة من خلال كتبنا المختارة بعناية
              </p>
            </div>
            <div>
              <p>أخر الأخبار</p>
              {/* email-field */}
              <div className="cus-text-field d-flex justify-content-center align-items-center gap-2 p-3">
                <button className="">!سجل الأن</button>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <div className="cus-envelope">
                  <BsEnvelopeFill />
                </div>
              </div>
            </div>
          </div>
          {/* website */}
          <div>
            <div className="mb-2">
              <div className="h4 m-0">الموقع</div>
              <img src={Underline} alt="-----" />
            </div>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">الرئيسية</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">جميع الكتب</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">منتجات جديدة</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">المذكرات</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">المراجعات</div>
              </div>
            </div>
          </div>
          {/* policies */}
          <div>
            <div className="mb-2">
              <div className="h4 m-0">سياسة الموقع</div>
              <img src={Underline} alt="-----" />
            </div>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">الشروط و الاحكام</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">سياسة الشحن</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse">
                <MdKeyboardArrowLeft
                  style={{ color: "var(--primary-color)" }}
                />
                <div className="">الخصوصية</div>
              </div>
            </div>
          </div>
          {/* contact us */}
          <div>
            <div className="mb-2">
              <div className="h4 m-0">تواصل معنا</div>
              <img src={Underline} alt="-----" />
            </div>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center flex-row-reverse gap-2">
                <MdLocationPin
                  style={{ color: "var(--primary-color)", fontSize: "20px" }}
                />
                <div className="">44 Danwers, NY City, USA, 70-102</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse gap-2">
                <BsEnvelopeFill style={{ color: "var(--primary-color)" }} />
                <div className="">Info.Roma@Gmail.Com</div>
              </div>
              <div className="d-flex align-items-center flex-row-reverse gap-2">
                <FaPhoneVolume style={{ color: "var(--primary-color)" }} />
                <div className="">91+585-656-658</div>
              </div>
            </div>
          </div>
        </div>
        {/* middel */}
        <div className="cus-middle container d-flex justify-content-between align-items-center">
          {/* payment methods */}
          <div>
            <img src={Payment} alt="Payment Methods" />
          </div>
          {/* icons */}
          <div className="d-flex gap-4">
            <div className="cus-contact-icons">
              <FaInstagram />
            </div>
            <div className="cus-contact-icons">
              <FaTwitter />
            </div>
            <div className="cus-contact-icons">
              <FaYoutube />
            </div>
            <div className="cus-contact-icons">
              <FaFacebookF />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="d-flex justify-content-center align-items-center" style={{
          height: "83px",
          backgroundImage: `url(${Frame})`
        }}>
          &copy; جميع الحقوق محفوظة 2025
        </div>
    </div>
  );
}

export default Footer;

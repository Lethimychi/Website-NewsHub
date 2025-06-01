import "./Body.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function FirstContent() {
  return (
    <>
      <div className="main-content">
        <div className="first-content">
          <button className="btn-trending">
            <b>TRENDING NOW</b>
          </button>
          <div className="marquee-wrapper">
            <div className="marquee-one">
              <span>
                War Shrinks Wealth Market Affected by the Economic Slash and
                Unstable Investments — War Shrinks Wealth Market Affected by the
                Economic Slash and Unstable Investments —
              </span>
            </div>
            <div className="marquee-two">
              <p></p>
            </div>
          </div>
          <div className="btn-arrow">
            <button className="btn btn-arrowleft">
              <FaChevronLeft />
            </button>
            <button className="btn btn-arrowleft">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

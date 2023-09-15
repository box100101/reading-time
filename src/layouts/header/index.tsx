import "./styles.scss";
import { AiOutlineDown } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";

const Header: React.FC<{}> = () => {
    return (
        <>
            <header className="header__wrapper">
                <div className="header__container">
                    <img
                        src="https://reading-time.co.kr/themes/readingtime/img/header-logo.png"
                        alt=""
                        className="header__logo"
                    />
                    <div className="header__nav">
                        <div className="item">
                            리딩타임이란
                            <AiOutlineDown />
                        </div>
                        <div className="item">수업후기</div>
                        <div className="item bold">무료체험 신청</div>
                        <div className="item">이용권 구매</div>
                        <div className="item">
                            고객센터
                            <AiOutlineDown />
                        </div>
                    </div>
                    <div className="header__btns">
                        <button className="btn outline">Login</button>
                        <button className="btn fill">Join us</button>
                    </div>
                    <div className="header__toggle-menu">
                        <RiMenu3Line />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

import "./styles.scss";
import { BsFillPlayFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Carousel, {
    slidesToShowPlugin,
    arrowsPlugin,
    autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";
import { AiOutlinePause } from "react-icons/ai";
import BannerItem, { BannerItemProps } from "../banner-item";

const listBanner = [
    {
        img: "https://reading-time.co.kr/resources/img/main/vis1.jpg",
        children: (
            <>
                <h1
                    style={{ fontSize: "32px", fontWeight: "700", color: "#f4a5c7" }}
                >
                    리딩타임에서 준비한 새로운 상품!
                </h1>
                <h1 style={{ fontSize: "55px", color: "#fff" }}>
                    주5회, 주3회, 주2회
                </h1>
                <h1 style={{ fontSize: "55px", color: "#fff" }}>
                    이제 선택해서 수업하세요!
                </h1>
                <p
                    style={{
                        fontSize: "19px",
                        color: "#fff",
                        marginBottom: "35px",
                        marginTop: "35px",
                    }}
                >
                    외국인 선생님과 영어독서습관 만들기
                </p>
            </>
        ),
        titleBtn: "리딩타임 소개 바로가기",
    },
    {
        img: "https://reading-time.co.kr/resources/img/main/vis4_210906.jpg",
        children: (
            <>
                <h1 style={{ fontSize: "55px", fontWeight: "700", color: "#fff" }}>
                    우리 아이 독서습관 기르기
                </h1>
                <h1
                    style={{ fontSize: "55px", color: "#fff", marginBottom: "65px" }}
                >
                    화상 영어 독서 수업, 리딩타임
                </h1>
            </>
        ),
        titleBtn: "리딩타임 소개 바로가기",
    },
    {
        img: "https://reading-time.co.kr/resources/img/main/vis2.jpg",
        children: (
            <>
                <h1 style={{ fontSize: "55px", fontWeight: "700", color: "#fff" }}>
                    매일 25분 외국인 선생님과
                </h1>
                <h1 style={{ fontSize: "55px", color: "#fff" }}>
                    화상 영어독서, 리딩타임
                </h1>
                <div style={{ fontSize: "22px", color: "#fff" }}>
                    하루 한 권, 한달 20권, 일년 240권의 영어책 읽기!
                </div>
                <div style={{ fontSize: "22px", color: "#fff" }}>
                    아이들의 미래를 든든하게 만드는 영어 독서 습관
                </div>
                <p style={{ fontSize: "19px", color: "#fff", marginBottom: "30px" }}>
                    ＊평일 5일, 한달 평균 20일 기준
                </p>
            </>
        ),
        titleBtn: "리딩타임 소개 바로가기",
    },
];

const Banner: React.FC<{}> = () => {
    const [indexBanner, setIndexBanner] = useState<number>(0);
    const [isPlay, setIsPlay] = useState<boolean>(true);

    const handleOnChange = (index: number) => {
        setIndexBanner(index);
    };

    const handleOnTogglePlay = () => {
        setIsPlay(!isPlay);
    };
    return (
        <>
            <div className="banner__wrapper">
                <button className="btn__play" onClick={handleOnTogglePlay}>
                    <span>{isPlay ? <BsFillPlayFill /> : <AiOutlinePause />}</span>
                </button>
                <Carousel
                    animationSpeed={1000}
                    onChange={handleOnChange}
                    value={indexBanner}
                    plugins={
                        !isPlay
                            ? [
                                  "infinite",
                                  "centered",
                                  {
                                      resolve: slidesToShowPlugin,
                                      options: {
                                          numberOfSlides: 1.5,
                                      },
                                  },
                                  {
                                      resolve: arrowsPlugin,
                                      options: {
                                          arrowLeft: (
                                              <button className="btn-control left">
                                                  <BsChevronLeft />
                                              </button>
                                          ),
                                          arrowRight: (
                                              <button className="btn-control right">
                                                  <BsChevronRight />
                                              </button>
                                          ),
                                          addArrowClickHandler: true,
                                      },
                                  },
                              ]
                            : [
                                  "infinite",
                                  "centered",
                                  {
                                      resolve: slidesToShowPlugin,
                                      options: {
                                          numberOfSlides: 1.5,
                                      },
                                  },
                                  {
                                      resolve: arrowsPlugin,
                                      options: {
                                          arrowLeft: (
                                              <button className="btn-control left">
                                                  <BsChevronLeft />
                                              </button>
                                          ),
                                          arrowRight: (
                                              <button className="btn-control right">
                                                  <BsChevronRight />
                                              </button>
                                          ),
                                          addArrowClickHandler: true,
                                      },
                                  },
                                  {
                                      resolve: autoplayPlugin,
                                      options: {
                                          interval: 1000,
                                      },
                                  },
                              ]
                    }
                >
                    {listBanner.map((element, i) => {
                        return (
                            <BannerItem
                                key={i}
                                img={element?.img}
                                titleBtn={element?.titleBtn}
                            >
                                {element?.children}
                            </BannerItem>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Banner;

import { url } from "inspector";
import "./styles.scss";

export type BannerItemProps = {
    img: string;
    children: JSX.Element;
    titleBtn: string;
};

const BannerItem: React.FC<BannerItemProps> = ({ children, img, titleBtn }) => {
    console.log("🚀 ~ file: index.tsx:10 ~ img:", img);
    return (
        <>
            <div
                className="banner-item__wrapper"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div>
                    {children}
                    <ButtonCustom title={titleBtn} />
                </div>
            </div>
        </>
    );
};

export default BannerItem;

const ButtonCustom: React.FC<{ title: string }> = ({ title }) => {
    return <button className="btn-custom">{title}</button>;
};

import Banner from "../../components/banner";
import "./styles.scss";

const HomePage: React.FC<{}> = () => {
    return (
        <>
            <div className="homepage__wrapper">
                <Banner />
            </div>
        </>
    );
};

export default HomePage;

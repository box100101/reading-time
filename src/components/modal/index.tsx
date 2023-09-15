import "./styles.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

type ModalProps = {};

const Modal: React.FC<ModalProps> = () => {
    const [open, setOpen] = useState<boolean>(true);
    return (
        <>
            <div
                className="modal__wrapper"
                style={{ display: open ? "flex" : "none" }}
            >
                <img
                    className="modal__img"
                    src="https://reading-time.co.kr/uploads/20230112/Jpl6kGz9E5Llf1F.png"
                    alt=""
                />
                <img
                    className="modal__img"
                    src="https://reading-time.co.kr/uploads/20230909/q8QDOxYHL869itF.png"
                    alt=""
                />
                <div onClick={() => setOpen(false)} className="modal__icon-close">
                    <AiOutlineClose />
                </div>
            </div>
        </>
    );
};

export default Modal;

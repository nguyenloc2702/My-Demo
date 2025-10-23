import {Button} from "devextreme-react/button";
import {useState} from "react";
import CoSoNuoiYenForm from "./CoSoNuoiYenForm.tsx";

export const CoSoNuoiYenPage = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Button
                text="Thêm mới"
                type="default"
                onClick={() => {
                    setOpenModal(true)
                }}
            />
            <CoSoNuoiYenForm openModal={openModal} setOpenModal={setOpenModal}/>
        </>
    );
};
// export default CoSoNuoiYenPage

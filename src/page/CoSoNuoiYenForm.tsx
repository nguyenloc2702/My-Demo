import {useState} from "react";
import "devextreme/dist/css/dx.light.css";
import "../style/CoSoNuoiYenForm.css";
import {Form, GroupItem, SimpleItem} from "devextreme-react/form";
import {Button} from "devextreme-react/button";
import {Accordion} from "devextreme-react/accordion";
import {Popup} from "devextreme-react/popup";
import {Map, Marker} from "devextreme-react/map";
import {DataGridComponent} from "../DataGridComponent/DataGridComponent.tsx";

const users = [
    {
        id: 1,
        loaiGiayChungNhan: "Giấy chứng nhận VSATTP",
        soGiayChungNhan: "GCN-001",
        ngayCap: "2023-01-10",
        ngayHetHan: "2026-01-10",
        coQuanCap: "348",
        hinhThuc: "358",
        dinhKem: "file1.pdf"
    },
    {
        id: 2,
        loaiGiayChungNhan: "Giấy kiểm dịch",
        soGiayChungNhan: "GCN-002",
        ngayCap: "2022-09-01",
        ngayHetHan: "2025-09-01",
        coQuanCap: "619",
        hinhThuc: "81",
        dinhKem: "file2.pdf"
    },
    {
        id: 3,
        loaiGiayChungNhan: "Giấy chứng nhận chất lượng",
        soGiayChungNhan: "GCN-003",
        ngayCap: "2022-05-20",
        ngayHetHan: "2025-05-20",
        coQuanCap: "752",
        hinhThuc: "728",
        dinhKem: "file3.pdf"
    },
    {
        id: 4,
        loaiGiayChungNhan: "Giấy đăng ký kinh doanh",
        soGiayChungNhan: "GCN-004",
        ngayCap: "2021-03-15",
        ngayHetHan: "2031-03-15",
        coQuanCap: "737",
        hinhThuc: "81",
        dinhKem: "file4.pdf"
    },
    {
        id: 5,
        loaiGiayChungNhan: "Giấy chứng nhận nguồn gốc",
        soGiayChungNhan: "GCN-005",
        ngayCap: "2023-07-01",
        ngayHetHan: "2028-07-01",
        coQuanCap: "465",
        hinhThuc: "692",
        dinhKem: "file5.pdf"
    },
    {
        id: 6,
        loaiGiayChungNhan: "Giấy kiểm nghiệm sản phẩm",
        soGiayChungNhan: "GCN-006",
        ngayCap: "2023-02-22",
        ngayHetHan: "2024-02-22",
        coQuanCap: "75",
        hinhThuc: "358",
        dinhKem: "file6.pdf"
    },
    {
        id: 7,
        loaiGiayChungNhan: "Giấy hợp chuẩn",
        soGiayChungNhan: "GCN-007",
        ngayCap: "2021-12-10",
        ngayHetHan: "2026-12-10",
        coQuanCap: "496",
        hinhThuc: "358",
        dinhKem: "file7.pdf"
    },
];

export default function CoSoNuoiYenForm({openModal, setOpenModal}: { openModal: boolean, setOpenModal: any }) {
    // const [visible, setVisible] = useState(initVisible);
    const [formData, setFormData] = useState({
        tenChuCoSo: "",
        soCmnd: "",
        soDienThoai: "",
        soGiayPhep: "",
        tinhThanh: "",
        xaPhuong: "",
        thonAp: "",
        diaChi: "",
        maCoSo: "",
        tenCoSo: "",
        ngayCapGiayPhep: null,
        tongSoNhaYen: "",
        tongDienTich: "",
        sanLuong: "",
        ghiChu: "",
        phuongDiaDiem: "",
        diaChiDiaDiem: "",
        viDo: 10.786793622305948, // default
        kinhDo: 106.69344513965149, // default
    });

    const renderThongTinChung = () => (
        <Form formData={formData} labelLocation="top" showColonAfterLabel={false}>
            <GroupItem colCount={4}>
                <SimpleItem
                    dataField="tenChuCoSo"
                    label={{text: "Tên chủ cơ sở (*)"}}
                    isRequired={true}
                    validationRules={[
                        {type: "required", message: "Đây là trường bắt buộc!"},
                    ]}
                />
                <SimpleItem dataField="soCmnd" label={{text: "Số CMND/CCCD"}}/>
                <SimpleItem
                    dataField="soDienThoai"
                    label={{text: "Số điện thoại"}}
                    validationRules={[
                        {
                            type: "pattern",
                            pattern: /^[0-9]{9,11}$/,
                            message: "Số điện thoại không hợp lệ!",
                        },
                    ]}
                />
                <SimpleItem
                    dataField="soGiayPhep"
                    label={{text: "Số giấy phép kinh doanh"}}
                />
            </GroupItem>

            <GroupItem colCount={4}>
                <SimpleItem
                    dataField="tinhThanh"
                    editorType="dxSelectBox"
                    label={{text: "Tỉnh/Thành phố"}}
                    editorOptions={{
                        items: ["Hà Nội", "TP.HCM", "Đà Nẵng"],
                        placeholder: "Chọn Tỉnh/Thành phố",
                    }}
                />
                <SimpleItem
                    dataField="xaPhuong"
                    editorType="dxSelectBox"
                    label={{text: "Xã/Phường"}}
                    editorOptions={{
                        items: ["Phường 1", "Phường 2"],
                        placeholder: "Chọn Xã/Phường",
                    }}
                />
                <SimpleItem
                    dataField="thonAp"
                    editorType="dxSelectBox"
                    label={{text: "Thôn/Ấp"}}
                    editorOptions={{
                        items: ["Ấp Bắc", "Ấp Nam"],
                        placeholder: "Chọn Thôn/Ấp",
                    }}
                />
                <SimpleItem dataField="diaChi" label={{text: "Địa chỉ thường trú"}}/>
            </GroupItem>

            <GroupItem colCount={4}>
                <SimpleItem
                    dataField="maCoSo"
                    label={{text: "Mã cơ sở nuôi chim yến"}}
                />
                <SimpleItem
                    dataField="tenCoSo"
                    label={{text: "Tên cơ sở nuôi chim yến"}}
                />
                <SimpleItem
                    dataField="ngayCapGiayPhep"
                    editorType="dxDateBox"
                    label={{text: "Ngày cấp giấy phép kinh doanh"}}
                />
                <SimpleItem
                    dataField="tongSoNhaYen"
                    label={{text: "Tổng số nhà yến"}}
                    editorOptions={{readOnly: true}}
                />
            </GroupItem>

            <GroupItem colCount={4}>
                <SimpleItem
                    dataField="tongDienTich"
                    label={{text: "Tổng diện tích sàn (m²)"}}
                />
                <SimpleItem
                    dataField="sanLuong"
                    label={{text: "Sản lượng (kg)"}}
                    editorOptions={{readOnly: true}}
                />
            </GroupItem>

            <SimpleItem
                dataField="ghiChu"
                label={{text: "Ghi chú"}}
                editorOptions={{
                    height: 60,
                }}
            />
        </Form>
    );

    const renderDiaDiemNuoiYen = () => (
        <Form formData={formData} labelLocation="top" showColonAfterLabel={false}>
            <GroupItem colCount={3}>
                <GroupItem colSpan={1}>
                    <SimpleItem
                        dataField="phuongDiaDiem"
                        editorType="dxSelectBox"
                        label={{text: "Phường/Xã"}}
                        editorOptions={{
                            items: ["Phường 1", "Phường 2", "Phường 3"],
                            placeholder: "Chọn Phường/Xã",
                        }}
                    />
                    <SimpleItem
                        dataField="diaChiDiaDiem"
                        label={{text: "Địa chỉ"}}
                        validationRules={[
                            {type: "required", message: "Vui lòng nhập địa chỉ!"},
                        ]}
                    />
                    <SimpleItem dataField="viDo" label={{text: "Vĩ độ"}}/>
                    <SimpleItem dataField="kinhDo" label={{text: "Kinh độ"}}/>
                </GroupItem>
                <GroupItem colSpan={2}>
                    <Map
                        defaultZoom={20}
                        controls={true}
                        defaultCenter={{lat: formData.viDo, lng: formData.kinhDo}}
                        height={300}
                        width={"100%"}
                        onClick={handleMapClick}
                    >
                        <Marker location={{lat: formData.viDo, lng: formData.kinhDo}}/>
                    </Map>
                </GroupItem>
            </GroupItem>
        </Form>
    );

    const renderGiayChungNhan = () => (
        <>
            <DataGridComponent dataTable={users}/>
        </>
    )

    const handleMapClick = (e) => {
        const coords = e.j.event.latLng;
        setFormData({
            ...formData,
            viDo: coords.lat(),
            kinhDo: coords.lng(),
        });
    };

    return (
        <div>
            <Popup
                visible={openModal}
                onHiding={() => setOpenModal(false)}
                wrapperAttr={{class: "custom-popup"}}
                width="90%"
                height="90%"
                showCloseButton={true}
                titleRender={() => (
                    <div className="popup-header">
                        <span>Thêm mới cơ sở nuôi yến</span>
                        <span
                            style={{cursor: "pointer"}}
                            onClick={() => setOpenModal(false)}
                        >
              ✕
            </span>
                    </div>
                )}
                contentRender={() => (
                    <div className="accordion-wrapper">
                        <Accordion
                            items={[
                                {
                                    title: (
                                        <span
                                            style={{
                                                color: "#77F271",
                                                fontWeight: "bold",
                                                fontSize: 16,
                                            }}
                                        >
                      Thông tin chung
                    </span>
                                    ),
                                    render: renderThongTinChung,
                                },
                                {
                                    title: (
                                        <span
                                            style={{
                                                color: "#77F271",
                                                fontWeight: "bold",
                                                fontSize: 16,
                                            }}
                                        >
                      Địa chỉ địa điểm nuôi yến
                    </span>
                                    ),
                                    render: renderDiaDiemNuoiYen,
                                },
                                {
                                    title: (
                                        <span
                                            style={{
                                                color: "#77F271",
                                                fontWeight: "bold",
                                                fontSize: 16,
                                            }}
                                        >
                      Giấy chứng nhận
                    </span>
                                    ),
                                    render: renderGiayChungNhan,
                                },
                            ]}
                            itemTitleRender={(item) => item.title}
                            itemRender={(item) => item.render()}
                            collapsible={true}
                            multiple={true}
                            animationDuration={200}
                        />
                        <div className="btn-group">
                            <Button text="Lưu" type="success"/>
                            <Button text="Hủy" onClick={() => setVisible(false)}/>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}

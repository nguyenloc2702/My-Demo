import './App.css'
import 'devextreme/dist/css/dx.light.css';

import {DataGridComponent} from "./DataGridComponent/DataGridComponent.tsx";
import {FileUploader} from "devextreme-react";

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

function App() {

    return (
        <>
            <DataGridComponent dataTable={users}/>
        </>
    )
}

export default App

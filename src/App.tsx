import './App.css'
import 'devextreme/dist/css/dx.light.css';

import {DataGridComponent} from "./DataGridComponent/DataGridComponent.tsx";

const users = [
    {
        id: 1,
        loaiGiayChungNhan: "Giấy chứng nhận VSATTP",
        soGiayChungNhan: "GCN-001",
        ngayCap: "2023-01-10",
        ngayHetHan: "2026-01-10",
        coQuanCap: "Sở Y Tế TP.HCM",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file1.pdf"
    },
    {
        id: 2,
        loaiGiayChungNhan: "Giấy kiểm dịch",
        soGiayChungNhan: "GCN-002",
        ngayCap: "2022-09-01",
        ngayHetHan: "2025-09-01",
        coQuanCap: "Chi cục Thú Y",
        hinhThuc: "Cấp lại",
        dinhKem: "file2.pdf"
    },
    {
        id: 3,
        loaiGiayChungNhan: "Giấy chứng nhận chất lượng",
        soGiayChungNhan: "GCN-003",
        ngayCap: "2022-05-20",
        ngayHetHan: "2025-05-20",
        coQuanCap: "Sở Công Thương",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file3.pdf"
    },
    {
        id: 4,
        loaiGiayChungNhan: "Giấy đăng ký kinh doanh",
        soGiayChungNhan: "GCN-004",
        ngayCap: "2021-03-15",
        ngayHetHan: "2031-03-15",
        coQuanCap: "Sở KH & ĐT",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file4.pdf"
    },
    {
        id: 5,
        loaiGiayChungNhan: "Giấy chứng nhận nguồn gốc",
        soGiayChungNhan: "GCN-005",
        ngayCap: "2023-07-01",
        ngayHetHan: "2028-07-01",
        coQuanCap: "Cục Trồng Trọt",
        hinhThuc: "Cấp lại",
        dinhKem: "file5.pdf"
    },
    {
        id: 6,
        loaiGiayChungNhan: "Giấy kiểm nghiệm sản phẩm",
        soGiayChungNhan: "GCN-006",
        ngayCap: "2023-02-22",
        ngayHetHan: "2024-02-22",
        coQuanCap: "Trung tâm Kỹ Thuật 3",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file6.pdf"
    },
    {
        id: 7,
        loaiGiayChungNhan: "Giấy hợp chuẩn",
        soGiayChungNhan: "GCN-007",
        ngayCap: "2021-12-10",
        ngayHetHan: "2026-12-10",
        coQuanCap: "Tổng cục Tiêu chuẩn ĐLCL",
        hinhThuc: "Gia hạn",
        dinhKem: "file7.pdf"
    },
    {
        id: 8,
        loaiGiayChungNhan: "Giấy kiểm dịch thực vật",
        soGiayChungNhan: "GCN-008",
        ngayCap: "2023-05-12",
        ngayHetHan: "2024-05-12",
        coQuanCap: "Chi cục BVTV",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file8.pdf"
    },
    {
        id: 9,
        loaiGiayChungNhan: "Giấy chứng nhận kiểm định",
        soGiayChungNhan: "GCN-009",
        ngayCap: "2020-08-30",
        ngayHetHan: "2025-08-30",
        coQuanCap: "Trung tâm kiểm định",
        hinhThuc: "Gia hạn",
        dinhKem: "file9.pdf"
    },
    {
        id: 10,
        loaiGiayChungNhan: "Giấy chứng nhận xuất xứ",
        soGiayChungNhan: "GCN-010",
        ngayCap: "2022-04-01",
        ngayHetHan: "2027-04-01",
        coQuanCap: "Phòng Thương Mại",
        hinhThuc: "Cấp lần đầu",
        dinhKem: "file10.pdf"
    }
];

function App() {

    return (
        <>
            <DataGridComponent dataTable={users}/>
        </>
    )
}

export default App

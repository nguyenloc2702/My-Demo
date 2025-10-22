import BaseDataGrid from "../components/BaseDataGrid.tsx";

export const DataGridComponent = ({dataTable}: { dataTable: any }) => {
    const columns = [
        {dataField: "loaiGiayChungNhan", caption: "Loại giấy chứng nhận"},
        {dataField: "soGiayChungNhan", caption: "Số giấy chứng nhận"},
        {dataField: "ngayCap", caption: "Ngày cấp"},
        {dataField: "ngayHetHan", caption: "Ngày hết hạn"},
        {dataField: "coQuanCap", caption: "Cơ quan cấp"},
        {dataField: "hinhThuc", caption: "Hình thức"},
        {dataField: "dinhKem", caption: "Đính kèm"},
    ];
    return (
        <BaseDataGrid
            dataSource={dataTable}
            columns={columns}
            selectionMode="single"
            onRowClick={(e) => console.log("Clicked:", e.data)}
            toolbarExtra={<button onClick={() => alert("Add User")}>Add</button>}
        />
    );
};

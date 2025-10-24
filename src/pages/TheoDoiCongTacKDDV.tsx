// import { DynamicTable } from "../components";
import "../assets/styles/TheoDoiCongTacKDDV.css";
import DynamicTable from "../components/DynamicTable";

export default function TheoDoiCongTacKDDV({
  runQuery,
  model,
  updateModel,
}: {
  runQuery: (query: any) => void;
  model: Record<string, any>;
  updateModel?: (payload: { body: Record<string, any> }) => void;
}) {
  const loaiDongVatData = [
    { id: 1, name: "Heo" },
    { id: 2, name: "Gà" },
    { id: 3, name: "Bò" },
    { id: 4, name: "Trâu" },
  ];

  const loaiMauData = [
    { id: 1, name: "Mẫu 1" },
    { id: 2, name: "Mẫu 2" },
    { id: 3, name: "Mẫu 3" },
    { id: 2, name: "Mẫu 4" },
  ];

  const handleSave = () => runQuery(model.query);

  return (
    <div>
      <form>
        <DynamicTable
          title="Danh sách mẫu kiểm dịch"
          model={model}
          fieldName="kiemDich"
          updateModel={updateModel}
          addLabel="Thêm mẫu"
          columns={[
            {
              dataField: "loaiDongVat",
              caption: "Loại động vật (*)",
              type: "select",
              dataSource: loaiDongVatData,
            },
            {
              dataField: "loaiMau",
              caption: "Loại mẫu (*)",
              type: "select",
              dataSource: loaiMauData,
            },
            { dataField: "soLuong", caption: "Số lượng (*)", type: "number" },
            { dataField: "file", caption: "Tệp đính kèm", type: "file" },
          ]}
        />
      </form>

      <form>
        <DynamicTable
          title="Danh sách địa chỉ nơi đến"
          model={model}
          fieldName="diaChiNoiDen"
          updateModel={updateModel}
          addLabel="Thêm địa chỉ"
          columns={[
            {
              dataField: "diaChi",
              caption: "Địa chỉ nơi đến (*)",
              type: "text",
            },
            { dataField: "tenChuTrai", caption: "Tên chủ trại", type: "text" },
            {
              dataField: "soDienThoai",
              caption: "Số điện thoại",
              type: "text",
            },
          ]}
        />
      </form>
      <button
        id="btnLuu"
        onClick={handleSave}
        className="dx-button dx-button-mode-contained dx-button-success dx-widget dx-button-has-text"
      >
        <span className="dx-button-text">Lưu</span>
      </button>
    </div>
  );
}

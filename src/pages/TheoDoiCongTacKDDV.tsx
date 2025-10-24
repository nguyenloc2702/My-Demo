import { useState } from "react";
import "../assets/styles/TheoDoiCongTacKDDV.css";
import { DynamicTable } from "../components";
import { Form, GroupItem, SimpleItem } from "devextreme-react/form";

const EXAMPLE_DATA = {
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
  viDo: 10.786793622305948,
  kinhDo: 106.69344513965149,
  kiemdich: [],
  diaChiNoiDen: [],
};

const RenderThongTinChung = ({ formData }: { formData: any }) => {
  return (
    <div>
      <div className="section-title">Thông tin chung</div>
      <Form
        formData={formData}
        labelLocation="top"
        showColonAfterLabel={false}
        style={{ marginBottom: 20 }}
      >
        <GroupItem colCount={4}>
          <SimpleItem
            dataField="tenChuCoSo"
            label={{ text: "Tên chủ cơ sở (*)", alignment: "left" }}
            isRequired={true}
            validationRules={[
              { type: "required", message: "Đây là trường bắt buộc!" },
            ]}
          />
          <SimpleItem
            dataField="soCmnd"
            label={{ text: "Số CMND/CCCD", alignment: "left" }}
          />
          <SimpleItem
            dataField="soDienThoai"
            label={{ text: "Số điện thoại", alignment: "left" }}
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
            label={{ text: "Số giấy phép kinh doanh", alignment: "left" }}
          />
        </GroupItem>

        <GroupItem colCount={4}>
          <SimpleItem
            dataField="tinhThanh"
            editorType="dxSelectBox"
            label={{ text: "Tỉnh/Thành phố", alignment: "left" }}
            editorOptions={{
              items: ["Hà Nội", "TP.HCM", "Đà Nẵng"],
              placeholder: "Chọn Tỉnh/Thành phố",
            }}
          />
          <SimpleItem
            dataField="xaPhuong"
            editorType="dxSelectBox"
            label={{ text: "Xã/Phường", alignment: "left" }}
            editorOptions={{
              items: ["Phường 1", "Phường 2"],
              placeholder: "Chọn Xã/Phường",
            }}
          />
          <SimpleItem
            dataField="thonAp"
            editorType="dxSelectBox"
            label={{ text: "Thôn/Ấp", alignment: "left" }}
            editorOptions={{
              items: ["Ấp Bắc", "Ấp Nam"],
              placeholder: "Chọn Thôn/Ấp",
            }}
          />
          <SimpleItem
            dataField="diaChi"
            label={{ text: "Địa chỉ thường trú", alignment: "left" }}
          />
        </GroupItem>

        <GroupItem colCount={4}>
          <SimpleItem
            dataField="maCoSo"
            label={{ text: "Mã cơ sở nuôi chim yến", alignment: "left" }}
          />
          <SimpleItem
            dataField="tenCoSo"
            label={{ text: "Tên cơ sở nuôi chim yến", alignment: "left" }}
          />
          <SimpleItem
            dataField="ngayCapGiayPhep"
            editorType="dxDateBox"
            label={{ text: "Ngày cấp giấy phép kinh doanh", alignment: "left" }}
          />
          <SimpleItem
            dataField="tongSoNhaYen"
            label={{ text: "Tổng số nhà yến", alignment: "left" }}
            editorOptions={{ readOnly: true }}
          />
        </GroupItem>

        <GroupItem colCount={4}>
          <SimpleItem
            dataField="tongDienTich"
            label={{ text: "Tổng diện tích sàn (m²)", alignment: "left" }}
          />
          <SimpleItem
            dataField="sanLuong"
            label={{ text: "Sản lượng (kg)", alignment: "left" }}
            editorOptions={{ readOnly: true }}
          />
        </GroupItem>

        <SimpleItem
          dataField="ghiChu"
          label={{ text: "Ghi chú", alignment: "left" }}
          editorOptions={{
            height: 60,
          }}
        />
      </Form>
    </div>
  );
};

export default function TheoDoiCongTacKDDV({
  runQuery,
  model,
  updateModel,
}: {
  runQuery: (query: any) => void;
  model: Record<string, any>;
  updateModel?: (payload: { body: Record<string, any> }) => void;
}) {
  const [formData, setFormData] = useState(EXAMPLE_DATA);

  const loaiDongVatData = model?.loaiDongVat || [
    { id: 1, name: "Heo" },
    { id: 2, name: "Gà" },
    { id: 3, name: "Bò" },
    { id: 4, name: "Trâu" },
  ];

  const loaiMauData = model?.loaiMau || [
    { id: 1, name: "Mẫu 1" },
    { id: 2, name: "Mẫu 2" },
    { id: 3, name: "Mẫu 3" },
    { id: 2, name: "Mẫu 4" },
  ];

  const handleSave = () => runQuery(model.query);

  return (
    <div style={{ backgroundColor: "#000", padding: 30 }}>
      <RenderThongTinChung formData={formData} />
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

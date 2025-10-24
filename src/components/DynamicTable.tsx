import React, { useState, useEffect } from "react";
import { DataGrid, Column, Editing } from "devextreme-react/data-grid";
import { SelectBox } from "devextreme-react/select-box";
import { NumberBox } from "devextreme-react/number-box";
import { CheckBox } from "devextreme-react/check-box";
import "devextreme/dist/css/dx.light.css";
import "../assets/styles/TheoDoiCongTacKDDV.css";

/**
 * Mô tả cấu trúc 1 cột trong bảng động
 */
export interface DynamicColumn {
  dataField: string; // Tên field trong item
  caption: string; // Tiêu đề hiển thị trên cột
  type?: "text" | "number" | "select" | "checkbox" | "file"; // Loại input
  dataSource?: { id: any; name: string }[]; // Dữ liệu cho SelectBox
  required?: boolean; // Có bắt buộc nhập không
  width?: number; // Chiều rộng cột
}

/**
 * Props cho DynamicTable
 */
interface DynamicTableProps {
  title?: string; // Tiêu đề của bảng
  model: Record<string, any>; // Dữ liệu tổng thể (model.body chứa danh sách)
  fieldName: string; // Tên trường trong model.body, ví dụ "kiemDich"
  columns: DynamicColumn[]; // Cấu hình các cột
  updateModel?: (payload: { body: Record<string, any> }) => void; // Callback để đẩy dữ liệu ra ngoài
  addLabel?: string; // Nhãn cho nút thêm dòng
}

/**
 * Component bảng động cho phép thêm/xóa/sửa dữ liệu trong model.body[fieldName]
 */
const DynamicTable: React.FC<DynamicTableProps> = ({
  title,
  model,
  fieldName,
  columns,
  updateModel,
  addLabel = "Thêm dòng",
}) => {
  // Trích body từ model (mặc định là object rỗng nếu chưa có)
  const bodyObj = model?.body || {};

  // State lưu danh sách dòng (lấy từ model.body[fieldName])
  const [data, setData] = useState(bodyObj?.[fieldName] || []);

  /**
   * Khi dữ liệu model.body thay đổi từ bên ngoài (component cha),
   * cập nhật lại state data để đồng bộ.
   */
  useEffect(() => {
    setData(model?.body?.[fieldName] || []);
  }, [model?.body?.[fieldName]]); // ✅ thêm đủ dependencies để tránh cảnh báo eslint

  /**
   * Cập nhật state và đồng thời đẩy dữ liệu mới ra ngoài qua updateModel()
   */
  const updateData = (newData: any[]) => {
    setData(newData);

    const newBody = {
      ...bodyObj,
      [fieldName]: newData,
    };

    updateModel?.({ body: newBody }); // Gửi body mới ra ngoài
  };

  /**
   * Thêm 1 dòng mới với giá trị mặc định theo type
   */
  const handleAdd = () => {
    const newItem: Record<string, any> = { id: Date.now() };

    columns.forEach((col) => {
      if (col.type === "checkbox") newItem[col.dataField] = false;
      else if (col.type === "number") newItem[col.dataField] = 0;
      else if (col.type === "select") newItem[col.dataField] = null;
      else newItem[col.dataField] = "";
    });

    const newData = [...data, newItem];
    updateData(newData);
  };

  /**
   * Xóa dòng theo ID
   */
  const handleDelete = (id: number) => {
    updateData(data.filter((x: any) => x.id !== id));
  };

  /**
   * Khi giá trị trong 1 ô thay đổi → cập nhật vào data
   */
  const onValueChange = (id: number, field: string, value: any) => {
    const updated = data.map((item: any) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    updateData(updated);
  };

  /**
   * Render từng ô (cell) tùy theo loại cột
   */
  const renderCell = (cell: any, col: DynamicColumn) => {
    const { type, dataSource } = col;
    const value = cell.data[col.dataField];

    switch (type) {
      case "select":
        return (
          <SelectBox
            value={value ?? null}
            dataSource={dataSource || []}
            valueExpr="id"
            displayExpr="name"
            placeholder="Vui lòng chọn"
            showClearButton={true}
            searchEnabled={true}
            onValueChanged={(e) =>
              onValueChange(cell.data.id, col.dataField, e.value ?? null)
            }
          />
        );

      case "number":
        return (
          <NumberBox
            value={value}
            min={0}
            onValueChanged={(e) =>
              onValueChange(cell.data.id, col.dataField, e.value)
            }
          />
        );

      case "checkbox":
        return (
          <CheckBox
            value={value}
            onValueChanged={(e) =>
              onValueChange(cell.data.id, col.dataField, e.value)
            }
          />
        );

      case "file":
        return (
          <input
            type="file"
            multiple
            onChange={(e) => {
              const files = e.target.files ? Array.from(e.target.files) : [];
              onValueChange(cell.data.id, col.dataField, files);
            }}
          />
        );

      default:
        return (
          <input
            type="text"
            value={value || ""}
            onChange={(e) =>
              onValueChange(cell.data.id, col.dataField, e.target.value)
            }
            className="dx-texteditor-input"
          />
        );
    }
  };

  /**
   * Giao diện chính
   */
  return (
    <div>
      {/* Tiêu đề bảng */}
      {title && <div className="section-title">{title}</div>}

      {/* DataGrid hiển thị danh sách */}
      <DataGrid
        className="custom-grid"
        dataSource={data}
        keyExpr="id"
        showBorders
        rowAlternationEnabled
        hoverStateEnabled
        repaintChangesOnly
        onCellPrepared={(e) => {
          if (e.rowType === "header") {
            e.cellElement.style.background = "#007000";
            e.cellElement.style.color = "white";
            e.cellElement.style.fontWeight = "600";
          }
        }}
      >
        {/* Cho phép chỉnh sửa trực tiếp trên ô */}
        <Editing mode="cell" allowUpdating={true} useIcons={true} />

        {/* Cột STT */}
        <Column
          alignment="center"
          caption="STT"
          width={60}
          cellRender={(cell) => <div>{cell.rowIndex + 1}</div>}
          allowSorting={false}
          allowFiltering={false}
        />

        {/* Các cột động */}
        {columns.map((col) => {
          if (col.type === "select") {
            return (
              <Column
                alignment="center"
                key={col.dataField}
                caption={col.caption}
                dataField={col.dataField}
                width={col.width}
                lookup={{
                  dataSource: col.dataSource,
                  valueExpr: "id",
                  displayExpr: "name",
                }}
                allowSorting={false}
                allowFiltering={false}
              />
            );
          }
          return (
            <Column
              alignment="center"
              key={col.dataField}
              caption={col.caption}
              dataField={col.dataField}
              width={col.width}
              cellRender={(cell) => renderCell(cell, col)}
              allowSorting={false}
              allowFiltering={false}
            />
          );
        })}
        {/* Cột thao tác (xóa) */}
        <Column
          alignment="center"
          caption="Thao tác"
          width={100}
          cellRender={(cell) => (
            <button
              className="dx-button dx-button-danger"
              onClick={() => handleDelete(cell.data.id)}
            >
              Xóa
            </button>
          )}
        />
      </DataGrid>

      {/* Nút thêm dòng */}
      <div className="add-button-container">
        <button
          onClick={handleAdd}
          className="dx-button dx-button-mode-contained dx-button-success dx-widget dx-button-has-text"
        >
          <span className="dx-button-text">+ {addLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default DynamicTable;

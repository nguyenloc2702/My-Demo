import React from "react";
import {
    DataGrid,
    Column,
    Paging,
    Pager,
    FilterRow,
    SearchPanel,
    Toolbar,
    Item as ToolbarItem,
    Export,
    Selection,
} from "devextreme-react/data-grid";

interface BaseDataGridProps {
    dataSource: any[];
    columns: {
        dataField: string;
        caption?: string;
        width?: number,
        cellRender?: any,
        editCellRender?: any,
        headerCellRender?: any
    }[];
    keyExpr?: string;
    height?: number | string;
    pageSize?: number;
    showIndex?: boolean;
    selectionMode?: "none" | "single" | "multiple";
    onRowClick?: (e: any) => void;
    toolbarExtra?: React.ReactNode;
}

const BaseDataGrid: React.FC<BaseDataGridProps> = ({
                                                       dataSource,
                                                       columns,
                                                       keyExpr = "id",
                                                       height = 520,
                                                       pageSize = 10,
                                                       showIndex = true,
                                                       selectionMode = "none",
                                                       onRowClick,
                                                       toolbarExtra,
                                                   }) => {
    return (
        <DataGrid
            dataSource={dataSource}
            keyExpr={keyExpr}
            showBorders={true}
            height={height}
            onRowClick={onRowClick}
            allowColumnResizing={true}
            allowColumnReordering={true}
            onCellPrepared={(e) => {
                if (e.rowType === "header") {
                    e.cellElement.style.background = "#007000";
                    e.cellElement.style.color = "white";
                    e.cellElement.style.fontWeight = "600";
                }
            }}
        >
            <Selection mode={selectionMode}/>

            {/*<SearchPanel visible={true} highlightCaseSensitive={false}/>*/}
            {/*<FilterRow visible={true}/>*/}

            {showIndex && (
                <Column
                    caption="#"
                    width={60}
                    alignment="center"
                    cellRender={(e) => e.rowIndex + 1}
                />
            )}

            {columns.map((col) => (
                <Column key={col.dataField} {...col} cellRender={col.cellRender}
                        editCellRender={col.editCellRender}
                        headerCellRender={col.headerCellRender}/>
            ))}

            <Paging defaultPageSize={pageSize}/>
            <Pager showInfo={true} showPageSizeSelector={true}/>

            <Export enabled={true}/>

            <Toolbar>
                <ToolbarItem name="searchPanel"/>
                <ToolbarItem name="exportButton"/>
                {toolbarExtra && <ToolbarItem location="after">{toolbarExtra}</ToolbarItem>}
            </Toolbar>
        </DataGrid>
    );
};

export default BaseDataGrid;

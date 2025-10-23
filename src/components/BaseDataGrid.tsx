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
    Editing,
} from "devextreme-react/data-grid";

interface BaseDataGridProps {
    dataSource: any[];
    columns: {
        dataField: string;
        caption?: string;
        width?: number;
        cellRender?: any;
        editCellTemplate?: any; // Corrected from editCellRender
        headerCellRender?: any;
        allowEditing?: boolean;
    }[];
    keyExpr?: string;
    height?: number | string;
    pageSize?: number;
    showIndex?: boolean;
    selectionMode?: "none" | "single" | "multiple";
    onRowClick?: (e: any) => void;
    toolbarExtra?: React.ReactNode;
    allowEditing?: boolean; // Added to toggle editing
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
            scrolling={{columnRenderingMode: "virtual"}}
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
            {/*{allowEditing && (*/}
            {/*    <Editing*/}
            {/*        mode="cell"*/}
            {/*        allowUpdating={true}*/}
            {/*    />*/}
            {/*)}*/}

            {/*<SearchPanel visible={true} highlightCaseSensitive={false} />*/}
            {/*<FilterRow visible={true} />*/}

            {showIndex && (
                <Column
                    caption="STT"
                    width={60}
                    alignment="center"
                    cellRender={(e) => e.rowIndex + 1}
                />
            )}

            {columns.map((col) => (
                <Column
                    key={col.dataField}
                    {...col}
                    allowEditing={col.allowEditing}
                    cellRender={col.cellRender}
                    editCellTemplate={col.editCellTemplate}
                    headerCellRender={col.headerCellRender}
                />
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
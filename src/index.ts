import DataGridComponent from "./DataGridComponent/DataGridComponent";

export {DataGridComponent};

declare global {
    interface Window {
        MyDemo: {
            DataGridComponent: typeof DataGridComponent;
        };
    }
}

if (typeof window !== "undefined") {
    window.MyDemo = {
        DataGridComponent,
    };
}

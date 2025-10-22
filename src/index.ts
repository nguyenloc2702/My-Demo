import DataGridComponent from "./DataGridComponent/DataGridComponent.tsx";

declare global {
    interface Window {
        MyDemo: {
            DataGridComponent: typeof DataGridComponent
        };
    }
}

window.MyDemo = {
    DataGridComponent
};

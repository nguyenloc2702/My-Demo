import {DataGridComponent} from "./DataGridComponent/DataGridComponent.tsx";

export {DataGridComponent};

declare global {
    interface Window {
        MFECore: {
            DataGridComponent: typeof DataGridComponent;
        };
    }
}

if (typeof window !== 'undefined') {
    window.MFECore = {
        DataGridComponent
    };
}

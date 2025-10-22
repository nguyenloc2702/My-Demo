import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import {DataGridComponent} from "./DataGridComponent/DataGridComponent.tsx";

export {React, ReactDOM, DataGridComponent};

declare global {
    interface Window {
        MFECore: {
            DataGridComponent: typeof DataGridComponent;
        };
    }
}

if (typeof window !== "undefined") {
    window.MFECore = {
        DataGridComponent
    };
}

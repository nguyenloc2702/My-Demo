import "./App.css";
import "devextreme/dist/css/dx.light.css";
import { CoSoNuoiYen } from "./pages/CoSoNuoiYen";
import TheoDoiCongTacKDDV from "./pages/TheoDoiCongTacKDDV";

function App({
  runQuery,
  model,
  updateModel,
}: {
  runQuery: (query: any) => void;
  model: Record<string, any>;
  updateModel?: (payload: { body: Record<string, any> }) => void;
}) {
  return (
    <>
      <TheoDoiCongTacKDDV
        runQuery={runQuery}
        model={model}
        updateModel={updateModel}
      />
    </>
  );
}

export default App;

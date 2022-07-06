import React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  RangeDirective,
  RangesDirective,
  SheetDirective,
  SheetsDirective,
  SpreadsheetComponent,
} from "@syncfusion/ej2-react-spreadsheet";
import "./App.css";
import { OrderDetails } from "./data";

function App() {
  return (
    <>
      <div className="title">
        <h2>Fournir Innovations Pvt Ltd.</h2>
      </div>
      <div className="App">
        <SpreadsheetComponent
          allowOpen={true}
          allowSave={true}
          saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
        >
          <SheetsDirective>
            <SheetDirective>
              <RangesDirective>
                <RangeDirective dataSource={OrderDetails}></RangeDirective>
              </RangesDirective>
              <ColumnsDirective>
                <ColumnDirective width={120}></ColumnDirective>
                <ColumnDirective width={110}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={130}></ColumnDirective>
                <ColumnDirective width={150}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
          </SheetsDirective>
        </SpreadsheetComponent>
      </div>
    </>
  );
}

export default App;

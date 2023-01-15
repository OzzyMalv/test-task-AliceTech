import React from 'react';
import './App.css';
import GanttCharts from "./components/GanttCharts/GanttCharts";
import mockedData from "./app/__mocks__/LEO2-FE.json"
import {momentConvertDate} from "./app/utils/helpers";

function App() {

  // TBD crew and equipment could be be visualised based on docs
  // zoom support etc.
  const formattedDataForGanttChart = mockedData.reduce((acc, curr, index) => {
    const preparedData = {
      id: curr.taskCode,
      text: `TASK: ${curr.operationName} / ELEMENT: ${curr.elementName}`,
      duration: curr.duration,
      start_date: momentConvertDate(curr.startHours),
      end_date: momentConvertDate(curr.endHours),
    }
    // links should be from dependencies to task coz dep must be done first
    const preparedLinks = {
      id: index,
    }
    acc.data.push(preparedData);
    acc.links.push(preparedLinks);
    return acc;
  }, {data: [] as any[], links: [] as any[]})

  return (
    <div className="App">
      <div>
        <p className="App-header">
          Gantt Chart:
        </p>
        <GanttCharts dataToParse={formattedDataForGanttChart} />
      </div>
    </div>
  );
}

export default App;

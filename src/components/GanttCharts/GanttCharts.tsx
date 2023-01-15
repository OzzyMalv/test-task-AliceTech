import React, {useEffect, useRef} from "react";
import {gantt} from "dhtmlx-gantt";
import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_material.css';
import './GanttCharts.css';

interface GanttChartsProps {
  dataToParse: Record<any, any>
}
const GanttCharts = ({dataToParse} : GanttChartsProps) => {
  const inputRef = useRef(null) ;

  useEffect(() => {
    gantt.init(inputRef.current as unknown as HTMLElement);
    gantt.parse(dataToParse)
  }, [dataToParse])

  return (
    <div className="gantt-container">
      <div id="GanttChartsId" ref={inputRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
};

export default GanttCharts;

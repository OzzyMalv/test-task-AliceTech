# Alice Technologies test task 

## Description 

You are a flow visualization specialist in a construction company tasked with visualization of the schedule of planned construction in the most meaningful way.
The project consists of a series of tasks included as a JSON file.
A task record looks like this (comments included):
```json5
{
    "taskCode" : "A169894767",          // unique task identifier
    "operationName" : "Pour Concrete",  // 
    "elementName" : "B1_C_L5_Floor",    // 
    "duration" : 8,                     // the duration this task takes to complete, in time units
    "startHours" : 126,                 // starting hour of this task execution
    "endHours" : 134,                   // ending hour of this task execution
    "crew" : {
        "name" : "C_Concrete Crew",     // the type of the crew this task needs
            "assignment" : 1                // the number of crew members this task needs to be allocated to it for the whole task duration
    }, 
    "equipment" : [{                   // additional resources necessary
        "name" : "Concrete Pump", 
        "quantity" : 1
       }], 
    "dependencies" : [ "A1137546159" ] // all task codes of tasks that need to be completed before this task can start
}
```

For our case, the most meaningful way of visualizing the data is [Gantt](https://en.wikipedia.org/wiki/Gantt_chart) chart.
Your task is to create an HTML/JS application implementing the Gantt chart type visualization of the schedule based on data from the JSON file. We recommend using following Gantt library (ALICE app is using the same library):

* [JavaScript Gantt Chart Library - DHTMLX Gantt](https://dhtmlx.com/docs/products/dhtmlxGantt/)

### Additionally:

Show dependencies between tasks, preferably by utilizing a setting of the Gantt library. Consider all possibilities in which the dependencies can be visualized, pick the one you find the most feasible. Explain your thought process.
Visualize the Equipment and Crew data for each task in a feasible way.


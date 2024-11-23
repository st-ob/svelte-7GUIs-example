export interface Task {
    path: string;
    name: string;
    challenge?: string;
    description?: string;
}

export const tasks: Task[] = [
    {
        name: "Home",
        path: "",
    },
    {
        name: "Task 1: Counter",
        path: "counter",
        challenge: "Understanding the basic ideas of a language/toolkit",
        description: "Build a frame containing a label or read-only textfield T and a button B. Initally, the value in T is 0 and each click on B increases the value in T by one."
    },
    {
        name: "Task 2: Temperature Converter",
        path: "tempConverter",
        challenge: "Bidirectional data flow, user-provided text input",
        description: "Build a frame containing two textfileds T_C and T_F representing the temperature in Celsius and Fahrenheit, respectively. Initially, both temperatures are empty. When the user enters a numerical value into T_C the corrsponding T_F is automatically updated and vice versa."
    },
    {
        name: "Task 3: Flight Booker",
        path: "flightBooker",
        challenge: "Constraints",
        description: "Build a frame containing a combobox C with the option one-way flight and return flight, two textfields T_1 and T_2 representing start and return date and a button for submitting the selected flight. T_2 only enabled if return flight is selected. T_2 has to be before T_1. T_1 or T_2 red-colored, when wrong date format is entered. Button only active when all is valid. After button press, alter shall show up."
    },
    {
        name: "Task 4: Timer",
        path: "timer",
        challenge: "concurrency, competing user/signal interactions, responsiveness",
        description: "Build a frame containing a gauge G for the elapsed time e, a label which shows the elapsed time as numerical value, a slider S by which the duration d can be adjusted, while the timer is running and a reset button R. Slider S can change the total duration and if elapsed time is smaller than duration is will run, otherwise stop. Button will reset the timer to 0."
    },
    {
        name: "Task 5: CRUD",
        path: "crud",
        challenge: "separating the domain and presentation logic, managing mutation, building a non-trivial layout",
        description: "Build a frame containing the following elements: textfield T_prefix, a pair of textfields T_name and T_surname, a listbox L and button B_C, B_U and B_D and three labels. L presents a view of the data in the database that consists of a list of names. At most one entry can be selected in L at a time."
    },
    {
        name: "Task 6: Circle Drawer",
        path: "circleDrawer",
        challenge: "undo/redo, custom drawing, dialog control",
        description: "Build a frame containing an undo and redo button as well as a canvas area underneath. Left-clicking inside an empty area inside the canvas will create an unfilled circle with a fixed diameter whose center is the left-clicked point. The circle nearest to the mouse pointer such that the distance from its center to the pointer is less than its radius, if it exists, is filled with the color gray. The gray circle is the selected circle C. Right-clicking C will make a popup menu appear with one entry “Adjust diameter..”. Clicking on this entry will open another frame with a slider inside that adjusts the diameter of C. Changes are applied immediately. Closing this frame will mark the last diameter as significant for the undo/redo history. Clicking undo will undo the last significant change (i.e. circle creation or diameter adjustment). Clicking redo will reapply the last undoed change unless new changes were made by the user in the meantime."
    },
    {
        name: "Task 7: Cells",
        path: "cells",
        challenge: "change propagation, widget customization, implementing a more authentic/involved GUI application",
        description: "Create a simple but usable spreadsheet application. The spreadsheet should be scrollable. The rows should be numbered from 0 to 99 and the columns from A to Z. Double-clicking a cell C lets the user change C’s formula. After having finished editing the formula is parsed and evaluated and its updated value is shown in C. In addition, all cells which depend on C must be reevaluated. This process repeats until there are no more changes in the values of any cell (change propagation). Note that one should not just recompute the value of every cell but only of those cells that depend on another cell’s changed value. If there is an already provided spreadsheet widget it should not be used. Instead, another similar widget (like JTable in Swing) should be customized to become a reusable spreadsheet widget."
    }
];
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
    }
];
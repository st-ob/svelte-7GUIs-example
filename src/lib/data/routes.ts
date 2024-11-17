export interface Route {
    path: string;
    name: string;
    challenge?: string;
    task?: string;
}

export const routes: Route[] = [
    {
        name: "Home",
        path: "",
    },
    {
        name: "Task 1: Counter",
        path: "counter",
        challenge: "Understanding the basic ideas of a language/toolkit",
        task: "Build a frame containing a label or read-only textfield T and a button B. Initally, the value in T is 0 and each click on B increases the value in T by one."
    },
    {
        name: "Task 2: Temperature Converter",
        path: "tempConverter",
        challenge: "Bidirectional data flow, user-provided text input",
        task: "Build a frame containing two textfileds T_C and T_F representing the temperature in Celsius and Fahrenheit, respectively. Initially, both temperatures are empty. When the user enters a numerical value into T_C the corrsponding T_F is automatically updated and vice versa."
    }
];
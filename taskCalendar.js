function Calender() {
    let Calender = prompt("Enter the day of the week.");
    switch (Calender) {
        case "Monday":
            alert("your task for Monday: Group meeting at 9:00am");
            break;
        case "Tuesday":
            alert("your task for Tuesday: Work on Project");
            break;
        case "Wednesday":
            alert("your task for Wednesday: Clean the house");
            break;
        case "Thursday":
            alert("your task for Thursday: give the dog a bath");
            break;
        case "Friday":
            alert("your task for Friday:submit all project");
            break;
        case "Saterday":
            alert("your task for Saterday: go out with friends");
            break;
        case "Sunday":
            alert("your task for Sunday: rest and relax");
            break;
            default:
            alert("invalid")
    }
}
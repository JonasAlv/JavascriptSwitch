printDayOfWeek(0)
printDayOfWeek(1)
printDayOfWeek(2)
printDayOfWeek(3)
printDayOfWeek(4)
printDayOfWeek(5)
printDayOfWeek(6)
printDayOfWeek(7)


function printDayOfWeek(day) {
    let dayOfWeek;
    
    switch (day) {
        case 0:
            dayOfWeek = "Sunday"
            break;
        case 1:
            dayOfWeek = "Monday"
            break;
        case 2:
            dayOfWeek = "Tuesday"
            break;
        case 3:
            dayOfWeek = "Wednesday"
            break;
        case 4:
            dayOfWeek = "Thursday"
            break;     
        case 5:
            dayOfWeek = "Friday"
            break;
        case 6:
            dayOfWeek = "Saturday"
            break;
        default:
            console.log(`${day} is an invalid day, choose a number between 0 and 6`)
            break;
    }
    console.log(dayOfWeek)
}
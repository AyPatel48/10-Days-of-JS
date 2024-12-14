// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    var date_parts = dateString.split('/')
    const date = new Date(date_parts[2], date_parts[0] - 1, date_parts[1])
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    dayName = days[date.getDay()]
    return dayName;
}

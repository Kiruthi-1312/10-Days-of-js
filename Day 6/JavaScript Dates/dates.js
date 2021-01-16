function getDayName(dateString) 
{
    const date = new Date(dateString);
    let dayName = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
    let i = date.getDay();
    let day=dayName[i]
    return day;
}

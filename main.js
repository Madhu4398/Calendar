const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const prevNextIcons = document.querySelectorAll(".icons span");


//getting new date, current month and current year
let date = new Date(),
currentMonth = date.getMonth(),
currentYear  = date.getFullYear();


//getting month in words -- getMonth() -> number
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const calendar = () => {
    let firstDayofMonth = new Date(currentYear, currentMonth , 1).getDay()
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    let lastDayofMonth = new Date(currentYear, currentMonth , lastDateofMonth).getDay()
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let daysList = "";

    //Last dates of last month
    for (i = firstDayofMonth; i > 0; i--)
        {
            daysList += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

    //Lists of dates in a month
    //if active the date is Today
    for (i = 1 ; i <= lastDateofMonth; i++)
        {
            let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
             && currentYear === new Date().getFullYear() ? "active" : "";
            daysList += `<li class = "${isToday}">${i}</li>`;
        }

    for (let i = lastDayofMonth; i < 6; i++) {
        daysList += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
        
    }    

    //Display days and dates
    currentDate.innerHTML = `${months[currentMonth]} ${currentYear}`;
    days.innerHTML = daysList;
}
calendar();

prevNextIcons.forEach(icon => {
    icon.addEventListener("click", () =>
    {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth +1;

        // creating new date for previous and next year
        if(currentMonth < 0 || currentMonth > 11){
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        }
        else{
            date = new Date();
        }
       
        calendar();
    });
    
    
});

    

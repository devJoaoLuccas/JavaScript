var systemTime = new Date();
var userTime = systemTime.getHours();

    if (userTime < 12 && userTime > 5) {
        console.log(`Good Morning`);
    } else if (userTime > 12 && userTime < 18) {
        console.log(`Good Afternoon`);
    } else if (userTime > 18 && userTime < 24) {
        console.log(`Good Night`);
    } else {
        console.log(`Good Early Morning`);
    }
countingValleys = (n, s) => {
    let garysLevel = [];
    let path = s.split('');
    let numberOfValleys = 0;
    for (let i = 0; i < n; i++) {
        if (path[i] === "U") {
            garysLevel.push(garysLevel[i - 1] ? garysLevel[i - 1] + 1 : 1);
        } else {
            garysLevel.push(garysLevel[i - 1] ? garysLevel[i - 1] - 1 : -1);
        }
    }
    for (let i = 0; i < garysLevel.length; i++) {
        if ((garysLevel[i] === 0) && (garysLevel[i - 1] < 0)) {
            numberOfValleys += 1
        }
    }
    return numberOfValleys;
};

countingValleys(8, "UDDDUDUU");

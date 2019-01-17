sockMerchant = (n, ar) => {
    let numberOfPairs = 0;
    for (let i = 0; i < ar.length; i++) {
        let oneColorSocks = 0;
        for (let j = 0; j < ar.length; j++) {
            if (ar[i] === ar[j]) {
                oneColorSocks += 1;
            }
        }
        numberOfPairs += countTheNumberOfPairs(oneColorSocks);
        ar = ar.filter((el, index) => el !== ar[i]);
    }
};
countTheNumberOfPairs = x => {
    return Math.floor(x / 2);
};

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

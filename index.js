let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');
let homeScore = 0;
let guestScore = 0;


function incrementHomeScoreByOne() {
    homeScore +=1;
    homeScoreEl.textContent = homeScore;
}

function incrementHomeScoreByTwo() {
    homeScore +=2;
    homeScoreEl.textContent = homeScore;
}

function incrementHomeScoreByThree() {
    homeScore +=3;
    homeScoreEl.textContent = homeScore;
}

function incrementGuestScoreByOne() {
    guestScore +=1;
    guestScoreEl.textContent = guestScore;
}

function incrementGuestScoreByTwo() {
    guestScore +=2;
    guestScoreEl.textContent = guestScore;
}

function incrementGuestScoreByThree() {
    guestScore +=3;
    guestScoreEl.textContent = guestScore;
}
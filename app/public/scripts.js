document.addEventListener("DOMContentLoaded", () => {
let submit = document.querySelector("#submit");
let url = '/api/friends';

let fetchData = async () => {
let q1 = document.querySelector("#q1").value;
let q2 = document.querySelector("#q2").value;
let q3 = document.querySelector("#q3").value;
let q4 = document.querySelector("#q4").value;
let q5 = document.querySelector("#q5").value;
let q6 = document.querySelector("#q6").value;
let q7 = document.querySelector("#q7").value;
let q8 = document.querySelector("#q8").value;
let q9 = document.querySelector("#q9").value;
let q10 = document.querySelector("#q10").value;
let scores = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:  document.querySelector("#name").value,
            photo: document.querySelector("#photo").value,
            scores: scores

        }) 
    });
    let json = await res.json();
    console.log(json)
};

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchData();
    console.log('data fetched')
});

});
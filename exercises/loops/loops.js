console.log("loops")

const favShows=["Groundhog Day", "Men In Black", "TENET"]
favShows.forEach(show=>console.log(show + "is a cool movie"));

let firstShow = favShows[0]

console.log(firstShow);

const countdown = []
for (let i = 10; i>0; i--){
countdown.push(i)
}
const countup =[]
for (let i = 1; i<11; i+=2){
countup.push(i)
}
const multiples =[]
for (let i = 6; i<60; i+3){
multiples.push(i)
}
const hashtags =[]
for (let i = 1; i<=7; i++){
hashtags.push(i)
}


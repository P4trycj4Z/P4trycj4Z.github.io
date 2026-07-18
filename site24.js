const notesInput = document.getElementById("notesInput")
const submitNotes = document.getElementById("submitNotes")
const number = document.getElementById("number")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const clearNotes = document.getElementById("clearNotes")

let observer = new MutationObserver(showFlute)
let config = { childList: true }
let isPlaying = false



const hole1 = document.getElementById("hole1")
const hole2 = document.getElementById("hole2")
const hole3 = document.getElementById("hole3")
const hole4 = document.getElementById("hole4")
const hole5 = document.getElementById("hole5")
const hole6 = document.getElementById("hole6")
const hole7 = document.getElementById("hole7")

const notesNumbers = {
    'A' : 2,
    'B' : 1,
    'C' : 7,
    'D' : 6,
    'E' : 5,
    'F' : 4,
    'G' : 3,

}


submitNotes.addEventListener("click", convertNotes)
start.addEventListener("click", playFlute)
start.addEventListener("click", showFlute)
observer.observe(number, config)
stop.addEventListener("click",()=> isPlaying = false)
clearNotes.addEventListener("click",()=> {
    notesInput.value = ""
    notesResult.textContent = ""
    number.textContent = ""
})


// filter out characters which are not notes
// convert notes to numbers

function convertNotes (){

let notes = [...notesInput.value.replaceAll(" ","").toUpperCase()]


notes = notes.filter((note)=> ['A','B','C','D','E','F','G'].includes(note))

notes = notes.map((note)=>notesNumbers[note])

// divide number into lines for better display

let numberString = ''
let numberList = []
counter = 0

for (const number of notes){
    numberString += number
    counter++
    if(numberString.length === 4){
        numberString+= '\n'
        numberList.push(numberString)
        numberString = ''
    }else if(counter >= notes.length - 3){

        numberList.push(numberString)
        numberString+= '\n'
        numberString = ''
    }

}
const res = numberList.join("")
notesResult.textContent = res
notesResult.style.letterSpacing = "25px"
return notes

}

sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function playFlute() {
    isPlaying = true
    const notes = convertNotes()

    for (const num of notes) {
        if(isPlaying){
            number.textContent = num
            await sleep(500)
            number.textContent = ""
            await sleep(500)
        }

    }
    number.textContent = "Well played!"


}

//display flute animation
function showFlute(){

    const holeList = [hole1, hole2, hole3, hole4, hole5, hole6, hole7]
    holeList.forEach((hole)=>hole.style.backgroundColor = "white")

       switch(true){
        case number.textContent === "1":
            hole1.style.backgroundColor = "black"
            break
        case number.textContent === "2":
            holeList.slice(0,2).forEach((hole)=>hole.style.backgroundColor = "black")
            break
        case number.textContent === "3":
            holeList.slice(0,3).forEach((hole)=>hole.style.backgroundColor = "black")
            break

        case number.textContent === "4":
            holeList.slice(0,4).forEach((hole)=>hole.style.backgroundColor = "black")
            break

        case number.textContent === "5":
            holeList.slice(0,5).forEach((hole)=>hole.style.backgroundColor = "black")
            break

        case number.textContent === "6":
            holeList.slice(0,6).forEach((hole)=>hole.style.backgroundColor = "black")
            break

        case number.textContent === "7":
            holeList.slice(0,7).forEach((hole)=>hole.style.backgroundColor = "black")
            break

        case "Well played!":
            observer.disconnect()
            break
    }

}

// button animation

start.addEventListener("mouseover", ()=> start.style.backgroundColor = "rgb(3, 47, 87)")
start.addEventListener("mouseout", () => start.style.backgroundColor = "rgb(0, 71, 133)")
stop.addEventListener("mouseover", ()=> stop.style.backgroundColor = "rgb(3, 47, 87)")
stop.addEventListener("mouseout", () => stop.style.backgroundColor = "rgb(0, 71, 133)")





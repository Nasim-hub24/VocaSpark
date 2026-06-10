
/* 
    AFTER TRYING 4 TIMES AT LAST I CAN DO IT

    () you give me all pain
*/


const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) =>{
            console.log(json.data);
            displayLesson(json.data);
        }) 
            
};
 

// --------< AFTER CLICKING LESSON BUTTON BEHIND THE SEAN THIS CODE RUN >----------
const loadLevelWord = (id) =>
{
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data))
};

const displayLevelWord = (words) =>{
    const levelWord = document.getElementById("word-container");
    levelWord.innerHTML = "";

    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
            <p> hi </p>
        `;
        levelWord.append(card);
    });
};


// FOR DISPLAY BUTTON IN USER INTERFACE (UI)
// FOLLOW THIS FOUR STEPS
const displayLesson = (lessons) =>{

    // 1=> GET THE CONTAINER & EMPTY
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2=> GET INTO EVERY LESSONS
    for(let lesson of lessons){

        // 3=> CREATE ELEMENT
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-soft btn-primary"><i class="fa-solid fa-book"></i> LESSON - ${lesson.level_no} </button>
        `;

        // 4=> APPEND INTO CONTAINER
        levelContainer.append(btnDiv);
    }
    
}
loadLessons();

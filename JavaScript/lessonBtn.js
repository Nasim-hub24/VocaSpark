
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
            <button class="btn btn-soft btn-primary"><i class="fa-solid fa-book"></i> LESSON - ${lesson.lessonName} </button>
        `;

        // 4=> APPEND INTO CONTAINER
        levelContainer.append(btnDiv);
    }
    
}
loadLessons();

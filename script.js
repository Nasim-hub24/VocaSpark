
const displayLesson = () =>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => console.log(data))
}
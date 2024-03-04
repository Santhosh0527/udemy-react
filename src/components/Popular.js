import one from "../assets/images/course1.jpg"
import two from "../assets/images/course2.jpg"
import three from "../assets/images/course3.jpg"
import four from "../assets/images/course4.jpg"

function Popular(){
    return(<div class="popular">
    <h1 class="popular__title">Most Popular</h1>
    <p class="popular__subtitle">Pick The Best</p>
    <div class="popular__container">
        <div class="course-card">
            <img src={one} alt=""></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={two} alt=""></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐</p>
            <p>449  <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={three} alt=""></img>
            <h3>Basic To Advance Programming With EMC</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449  <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={four} alt=""></img>
            <h3>Master UI/UX Designing With Figma</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449  <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={one} alt=""></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={two} alt=""></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐</p>
            <p>449  <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={three} alt=""></img>
            <h3>Basic To Advance Programming With EMC</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449  <del>1999</del></p>
        </div>
        <div class="course-card">
            <img src={four} alt=""></img>
            <h3>Master UI/UX Designing With Figma</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449  <del>1999</del></p>
        </div>
    </div>

</div>)
}

export default Popular
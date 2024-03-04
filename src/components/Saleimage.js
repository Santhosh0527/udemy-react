import saleimage from "../assets/images/sale-image.jpg"

function Saleimage(){
    return(<div class="sale-image">
    <img src={saleimage} alt=""></img>
    <div class="sale-image__offer">
        <h2>Udemy Flash Sale! 24 Hours To Save.</h2>
        <p>Get The Top Courses For Just 499. Just One Day To Save But A Lifetime To Learn</p>

    </div>
</div>)
}
export default Saleimage
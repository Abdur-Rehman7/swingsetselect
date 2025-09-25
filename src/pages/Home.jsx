import Herosection from "../../cmponent/herosection"
import Iconsection from "../../cmponent/Iconsection"
import Categorysection from "../../cmponent/Categorysection"
import Featuredsection from "../../cmponent/Featuredsection"
import Golftraining from "../../cmponent/Golftraining"
import Newcollection from "../../cmponent/Newcollection"
import Swingintosavingsection from "../../cmponent/Swingintosavingsection"
import Testimonialsection from "../../cmponent/Testimonialsection"
import Latestnewssection from "../../cmponent/Latestnewssection"
function Home(){
    return(
    <>
    <Herosection />
    <div class="m-10">
    <Iconsection />
    <Categorysection />
    <Featuredsection />
    <Golftraining />
    <Newcollection />
    <Swingintosavingsection />
    <Testimonialsection />
    <Latestnewssection />
    </div>
    </>
    )
}

export default Home
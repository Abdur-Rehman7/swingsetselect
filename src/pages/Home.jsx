import HeroSection from "../component/HeroSection"
import IconSection from "../component/IconSection"
import CategorySection from "../component/CategorySection"
import FeaturedSection from "../component/FeaturedSection"
import GolfTraining from "../component/GolfTraining"
import NewCollection from "../component/NewCollection"
import SwingIntoSavingSection from "../component/SwingIntoSavingSection"
import TestimonialSection from "../component/TestimonialSection"
import LatestNewsSection from "../component/LatestNewsSection"
function Home(){
    return(
    <>
    <HeroSection />
    <div class="m-10">
    <IconSection />
    <CategorySection />
    <FeaturedSection />
    <GolfTraining />
    <NewCollection />
    <SwingIntoSavingSection />
    <TestimonialSection />
    <LatestNewsSection />
    </div>
    </>
    )
}

export default Home
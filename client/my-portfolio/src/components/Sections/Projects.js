import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DCB from '../../Img/DCB.png'
import DCB2 from '../../Img/DCB2.png'
import Athena from '../../Img/Athena.png'
import Athena2 from '../../Img/Athena2.png'


const Projects = () => {
    return (
        <div id="projects">
            <h1 className="section">My Projects</h1>
                
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={DCB} /></SwiperSlide>
                <SwiperSlide><img src={DCB2} /></SwiperSlide>
                <SwiperSlide><img src={Athena} /></SwiperSlide>
                <SwiperSlide><img src={Athena2} /></SwiperSlide>
            </Swiper>


        </div>
    )
}

export default Projects
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
                <div className="projectSection">
                    <img src={DCB2} className='dcbPic' />
                    <div className="projectDiv">
                        <h2 className="h2">Dreams Come Brew</h2>
                        <p className="projectP">A Full Stack Ecommerce Web Application created with a team skilled of Software Engineers.
                        Utilizing React Router as well as React Hooks to manage state and use side effects.
                        Deployed using Render, implemented S3 bucket using AWS for product pictures.
                        </p>    
                    </div>
                </div>

                <div className="projectSection">
                    <div className="projectDiv">
                        <h2 className="h2">Athena</h2>
                        <p className="projectP">A scalable, responsive solution for a tech company that handles maintenance requests across 4 campuses, with over 100 employees working on various tasks, 
                        in conjunction with employees making ticket request to campus tech teams. 
                        </p>
                    </div>
                    <img src={Athena} className='dcbPic2' />
                </div>
            
                
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
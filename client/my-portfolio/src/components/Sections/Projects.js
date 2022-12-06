import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DCB from '../../Img/DCB/DCB.png'
import DCB2 from '../../Img/DCB/DCB2.png'
import DCBAbout from '../../Img/DCB/DCBAbout.png'
import DCBContact from '../../Img/DCB/DCBContact.png'

import AthenaCreate from '../../Img/AthenaPics/AthenaCreate.png'
import AthenaLogin from '../../Img/AthenaPics/AthenaLogin.png'
import Athena from '../../Img/AthenaPics/Athena.png'
import Athena2 from '../../Img/AthenaPics/Athena2.png'


const Projects = () => {
    return (
        <div id="projects">
            <h1 className="sectionProject">PROJECTS</h1>
                <div className="projectSection">
                    {/* <img src={DCB2} className='dcbPic' /> */}
                    <Swiper navigation={true} modules={[Navigation]} className="dcbPic">
                        <SwiperSlide><img src={DCB} /></SwiperSlide>
                        <SwiperSlide><img src={DCB2} /></SwiperSlide>
                        <SwiperSlide><img src={DCBAbout} /></SwiperSlide>
                        <SwiperSlide><img src={DCBContact} /></SwiperSlide>
                    </Swiper>
                    <div className="projectDiv">
                        <h2 className="h2">DREAMS COME BREW</h2>
                        <p className="projectP">A Full Stack Ecommerce Web Application created with a team skilled of Software Engineers.
                        Utilizing React Router as well as React Hooks to manage state and use side effects.
                        Deployed using Render, implemented S3 bucket using AWS for product pictures.
                        </p>    
                    </div>
                </div>

                <div className="projectSection">
                    <div className="projectDiv">
                        <h2 className="h2">ATHENA</h2>
                        <p className="projectP">A scalable, responsive solution for a tech company that handles maintenance requests across 4 campuses, with over 100 employees working on various tasks, 
                        in conjunction with employees making ticket request to campus tech teams. 
                        </p>
                    </div>
                    {/* <img src={Athena} className='dcbPic2' /> */}
                    <Swiper navigation={true} modules={[Navigation]} className="dcbPic2">
                        <SwiperSlide><img src={AthenaLogin} /></SwiperSlide>
                        <SwiperSlide><img src={AthenaCreate} /></SwiperSlide>
                        <SwiperSlide><img src={Athena} /></SwiperSlide>
                        <SwiperSlide><img src={Athena2} /></SwiperSlide>
                    </Swiper>
                </div>
            
                


        </div>
    )
}

export default Projects
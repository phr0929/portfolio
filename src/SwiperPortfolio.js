 
import { useEffect, useState } from 'react';
import './swiper.css'
import ps from './resource/photoshop.png'
import ai from './resource/ai.png'
import clip from './resource/clip.png'
import css from './resource/css.png'
import html from './resource/html.png'
import excel from './resource/excel.png'
import js from './resource/js.png'
import pro from './resource/pro.png'
import profile from './resource/profile.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  Mousewheel,
  A11y 
} from "swiper"
const SwiperPortfolio =  (()=> {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]); // *
 
  const [pageNumber,setPageNumber] = useState(0)
  const [swiper,setSwiper] = useState(null)
 
 
   
  return (
    <div className="App">
   <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',
                  boxSizing:'border-box',}}>
                    
                    <div style={{boxSizing:'border-box', width:'100%',maxWidth:1300,display:'flex',alignItems:'flex-start',
                    justifyContent:'center',flexDirection:'column',overflow:'hidden',padding:20,}}> 
                      <div style={{fontSize:20,fontWeight:700,marginBottom:30,display:'flex',alignItems:'center'}}>
                        <div style={{width:5,height:16,marginRight:10,backgroundColor:'#323232'}}/>
                        PORTFOLIO
                      </div>
                     
                      <Swiper  
                        modules={[Navigation, Pagination]} 
                        direction='horizontal' 
                        pagination={
                            {el: ".swiper-pagination2", 
                            type : 'bullets'}
                        }  
                        slidesPerView={1} 
                        spaceBetween={40}
                        initialSlide={0}
                        
                        > 

                    
                          <SwiperSlide >
                            <div>
                             <img src={ps} alt=''/>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide >
                            <div>
                            
                            <img src={ps} alt=''/>
                            </div>
                          </SwiperSlide> 
                      
                        </Swiper>


                    </div>

                    <div className='electronicDisplay'>
                      ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT 
                    </div>
                          
                  </div>
         
    </div>


  );
})

export default SwiperPortfolio;

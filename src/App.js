import './App.css';
import { useEffect, useState } from 'react';
// import './swiper.css'
import ps from './resource/photoshop.png'
import ai from './resource/ai.png'
import clip from './resource/clip.png'
import css from './resource/css.png'
import html from './resource/html.png'
import excel from './resource/excel.png'
import js from './resource/js.png'
import pro from './resource/pro.png'
import port1 from './resource/port1.jpg'
import port2 from './resource/port2.jpg'
import port3 from './resource/port3.jpg'
import port4 from './resource/port4.jpg'
import port5 from './resource/port5.jpg'
import profile from './resource/profile.jpg'
import SwiperPortfolio from './SwiperPortfolio';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  Mousewheel,
  A11y 
} from "swiper"
const App =  (()=> {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]); // *

  // const setOneVh = () => {
  //   const vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // };

  // setOneVh()
 

  // useEffect(()=>{
  //   setOneVh();
  //   window.scrollTo(0,0)
  //   function onResize(){ 
  //       setOneVh();
  //   }
  //   window.addEventListener('resize',onResize);
  // },[])
  

  const [list,setList] = useState([
    {title:'PULSE 웹사이트 제작',content:'소프트웨어 개발업체 PULSE 사이트 반응형으로 제작',tool:[ps,html,css,js],link:['https://pulse.wo.tc/'],img:port1},
    {title:'곱빼기 웹사이트 제작',content:'서산시 배달앱 곱빼기 사이트 반응형으로 제작',tool:[ps,html,css,js],link:['https://pulse.wo.tc/Double'],img:port2},
    {title:'서산개백수 포트폴리오 제작',content:'유튜브 컨텐츠로 제작한 아이템들을 모아놓는 사이트 반응형으로 제작',tool:[ps,ai,html,css,js],link:['https://phr0929.github.io/'],img:port3},
    {title:'곱빼기 앱 개발',content:'서산시 배달앱 곱빼기 프론트엔드 개발 / 디자인',tool:[ps,ai,html,css,js],link:['https://play.google.com/store/apps/details?id=tc.wo.pulse.community','https://apps.apple.com/kr/app/%EA%B3%B1%EB%B9%BC%EA%B8%B0/id1621478258'],img:port4},
    {title:'삼량이 캐릭터 창작',content:'고양이 캐릭터 삼량이 창작 / 인스타그램 운영',tool:[ps,ai,clip,pro],link:['https://instagram.com/discontent.cat'],img:port5}
  ])
  const [pageNumber,setPageNumber] = useState(0)
  const [swiper,setSwiper] = useState(null)
  const [portNumber,setPortNumber] = useState(0)
  const handlePortfolio = (lf) => {
    let number = portNumber
    if(lf==='left'){
      if(number===0){
        number = 4; 
      }else{
        number = number - 1;
      }
    }else{
      if(number===4){
       
        number = 0; 
      }else{

        number = number + 1;
      }
    }
    
    setPortNumber(number)
  }

  useEffect(()=>{
    console.log(portNumber)
  },[portNumber])
 
   
  return (
    <div className="App">
      <div className='page'>
        <div className='pageMain'>
          <div style={{width:'100%',height:70,backgroundColor:'#f5f6fb',position:'relative',zIndex:5000,
            display:'flex',justifyContent:'center',}}>
            <div style={{display:'flex',justifyContent:'flex-start',width:'100%',maxWidth:1300,height:70,minHeight:70,maxHeight:70,
              alignItems:'center',padding:'0px 20px 0px 20px',boxSizing:'border-box'}}>
              <div style={{fontSize:20,minWidth:'fit-content',fontWeight:900}}>
                P.HYERIM
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
                <div style={{paddingRight:15,fontWeight:pageNumber===0?700:300,color:pageNumber===0?'#323232':'#969696'}}>HOME</div>
                <div style={{paddingRight:15,fontWeight:pageNumber===1?700:300,color:pageNumber===1?'#323232':'#969696'}}>ABOUT</div>
                <div style={{fontWeight:pageNumber===2?700:300,color:pageNumber===2?'#323232':'#969696'}}>PORTFOLIO</div>
              </div>
          </div>
      </div>
       

        <Swiper     
        onSwiper = {setSwiper}
        style={{top:0,left:0,width:'100%',height:'calc(100% - 70px)'}} 
            direction='vertical' 
            speed={1000}
            mousewheel= {true}
            modules={[Navigation, Pagination, ]} 
             pagination={
                {el: ".swiper-pagination", 
                type : 'bullets',
                clickable: true,}
            }  
            onSlideChange={(e) =>setPageNumber(e.realIndex)}
            autoHeight={true} 
            slidesPerView={1} 
            initialSlide={0}                          
            loop={false}
            loopedSlides={1}
            observer={true}
            observeParents={true}
            resistance={true} 
            >
            
                

                <SwiperSlide> 
  
                  <div style={{ boxSizing:'border-box',height:'100%',width:'100vw',display:'flex',alignItems:'center',
                    justifyContent:'center',flexDirection:'column',overflow:'hidden',}}>
                      <div style={{height:'calc(100% - 90px)',width:'100%',paddingLeft:20,boxSizing:'border-box',
                      justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',}}>
                        <div style={{position:'relative',width:'100%',maxWidth:1300,display:'flex',
                        alignItems:'center',justifyContent:'center'}}>
                          <div style={{fontSize:50,fontWeight:900,width:'100%',paddingLeft:10,boxSizing:'border-box',
                          textAlign:'left'}}>UI/UX designer</div>
                        </div>
                      
                        <div style={{position:'relative',width:'100%', 
                        display:'flex',alignItems:'center',justifyContent:'center',marginTop:50}}>
                          <div className='mainCenterLogo' style={{position:'absolute',fontSize:140,fontWeight:900,zIndex:1000,maxWidth:1300,width:'100%',
                        textAlign:'left',paddingLeft:5,boxSizing:'border-box'}}>P.HYERIM</div>
                          <div className='electronicDisplay'>UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer</div>
                          
                        </div>  
                      </div>
                    

                      <div style={{display:'flex',justifyContent:'flex-start',width:'100%',maxWidth:1300,height:70,minHeight:70,maxHeight:70,
                      alignItems:'center',paddingLeft:20,marginBottom:20,boxSizing:'border-box',}}>
                        <div className='mouseDown'>
                          <div className='mousePoint'/>
                        </div>
                    </div>

                </div>
                    
                    
                   
                </SwiperSlide> 
                <SwiperSlide> 
                  <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',
                  boxSizing:'border-box',}}>
                    <div style={{boxSizing:'border-box', width:'100%',maxWidth:1300 ,display:'flex',alignItems:'flex-start',padding:20,
                    justifyContent:'center',flexDirection:'column',overflow:'hidden',}}> 
                      <div style={{fontSize:20,fontWeight:700,marginBottom:50,display:'flex',alignItems:'center'}}>
                        <div style={{width:5,height:16,marginRight:10,backgroundColor:'#323232'}}/>
                        CARRERS
                      </div>
                      {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'0px 20px 0px 135px'
                      ,width:18,minWidth:18,maxWidth:18,}}>
                            
                            <div style={{backgroundColor:'#323232',borderRadius:250,width:9,height:9,minWidth:9,maxWidth:9,minHeight:9,maxHeight:9,}}/>
                            
                            <div style={{width:3,height:60,backgroundColor:'#323232',}}/> 
                      </div> */}
                  

                      <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width:115,minWidth:115,maxWidth:115}}>
                          2020.02 ~ 2023.08
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 20px 0px 20px'}}>
                          <div style={{width:12,height:12,minWidth:12,maxWidth:12,minHeight:12,maxHeight:12,border:'3px solid #323232',borderRadius:250}}></div>
                          <div style={{width:3,height:'100%',backgroundColor:'#323232'}}/>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',paddingBottom:40}}>
                          
                          <div style={{fontWeight:700}}>
                            PULSE
                          </div>
                          <div style={{color:'#5d5d5d',marginTop:10}}>
                            디자인
                          </div>
                          <div style={{color:'#5d5d5d',marginTop:5}}>
                            프론트엔드 개발
                          </div>
                        </div>
                        
                      </div>   
                      <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width:115,minWidth:115,maxWidth:115}}>
                          2014.02 ~ 2019.12
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 20px 0px 20px'}}>
                          <div style={{width:12,height:12,minWidth:12,maxWidth:12,minHeight:12,maxHeight:12,border:'3px solid #323232',borderRadius:250}}></div>
                          <div style={{width:3,height:'100%',backgroundColor:'#323232'}}/>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',paddingBottom:40}}>
                          
                          <div style={{fontWeight:700}}>
                            온라인 중고서점 우리아이책더미 운영
                          </div>
                          <div style={{color:'#5d5d5d',marginTop:10}}>
                            오픈마켓 yes24 / 알라딘 / 개똥이네 상품등록, 관리
                          </div>
                          <div style={{color:'#5d5d5d',marginTop:5}}>
                            상품 검수 / 포장 / 배송
                          </div>
                          <div style={{color:'#5d5d5d',marginTop:5}}>
                            회계업무
                          </div>
                        </div>
                        
                        
                      </div>

                      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'0px 20px 0px 135px'
                      ,width:18,minWidth:18,maxWidth:18,}}>
                            
                            <div style={{backgroundColor:'#323232',borderRadius:250,width:9,height:9,minWidth:9,maxWidth:9,minHeight:9,maxHeight:9,}}/>
                             
                      </div>
                       
                    </div>
                
                    <div style={{boxSizing:'border-box', width:'100%',maxWidth:1300,display:'flex',alignItems:'flex-start',
                    justifyContent:'center',flexDirection:'column',overflow:'hidden',padding:20,}}> 
                      <div style={{fontSize:20,fontWeight:700,marginBottom:50,marginTop:30,display:'flex',alignItems:'center'}}>
                        <div style={{width:5,height:16,marginRight:10,backgroundColor:'#323232'}}/>
                        SKILLS
                      </div>
                      <div style={{display:'flex'}}>
                        <div className='skills'>
                          <img className='skilsImg' src={ps} alt=''/>
                          <span>포토샵</span>
                        </div>
                        <div className='skills'>
                          <img className='skilsImg' src={ai} alt=''/>
                          <div>일러스트</div>
                        </div>
                        <div className='skills'>
                          <img className='skilsImg' src={pro} alt=''/>
                          <div>프로크리에이트</div>
                        </div>
                       
                        <div className='skills'>
                          <img className='skilsImg' src={clip} alt=''/>
                          <div>클립스튜디오</div>
                        </div>
                        <div className='skills'>
                          <img className='skilsImg' src={js} alt=''/>
                          <div>자바스크립트</div>
                        </div>
                        <div className='skills'>
                          <img className='skilsImg' src={html} alt=''/>
                          <div>HTML</div>
                        </div>
                        <div className='skills'>
                          <img className='skilsImg' src={css} alt=''/>
                          <div>CSS</div>
                        </div>
                        <div className='skills'>
                          <img className='skilsImg' src={excel} alt=''/>
                          <div>엑셀</div>
                        </div>
                      </div>                  
                    </div>

                    <div className='electronicDisplay'>
                      ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT 
                    </div>
                          
                  </div>
                </SwiperSlide> 
                <SwiperSlide >  
                <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',
                  boxSizing:'border-box',}}>
                    
                    <div style={{boxSizing:'border-box', width:'100%',maxWidth:1300,display:'flex',alignItems:'flex-start',
                    justifyContent:'center',flexDirection:'column',overflow:'hidden',padding:20,}}> 
                      <div style={{fontSize:20,fontWeight:700,marginBottom:50,display:'flex',alignItems:'center'}}>
                        <div
                        style={{width:5,height:16,marginRight:10,backgroundColor:'#323232'}}/>
                        PORTFOLIO
                      </div>
                     

                     <div style={{width:'100%',maxWidth:1300,height:300,
                     display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>
                        <div onClick={()=>handlePortfolio('left')} style={{fontSize:60,margin:'0px 30px 0px 10px',zIndex:1000,position:'relative'}}>
                          {'<'}
                          </div>

                          <div style={{display:'flex',width:'100%',height:'100%'}}>
                              <img src={list[portNumber].img} alt='' className='portImg'/>
                              <div style={{width:'100%',display:'flex',flexDirection:'column',paddingLeft:30,height:'100%'}}>
                                <div style={{fontSize:20,fontWeight:700,marginBottom:10}}>{list[portNumber].title}</div>
                                <div style={{fontSize:16,marginBottom:20}}>{list[portNumber].content}</div>
                                <div style={{display:'flex'}}>
                                  {list[portNumber].tool.map((vval,vidx)=>
                                    <img key={vidx} style={{width:25,height:25,minWidth:25,maxWidth:25,borderRadius:5,marginRight:5}} src={vval} alt=''></img>
                                  )} 
                                </div>
                                <div style={{height:'100%',display:'flex',alignItems:'flex-end'}}>
                                  {list[portNumber].link.length===1?
                                    list[portNumber].link.map((vvval,vvidx)=>
                                    
                                      <div key={vvidx} className='goButton' onClick={()=>window.open(vvval)}>
                                        {portNumber===4?'인스타그램 보러가기':'사이트 바로가기'}</div>
                                    )
                                  :list[portNumber].link.map((vvval,vvidx)=>
                                  
                                  <div key={vvidx} className='goButton' onClick={()=>window.open(vvval)}>
                                    {vvidx===0?'Google Play':'App Store'} 다운로드</div>
                                )}
                                </div>
                              </div>
                            </div>
                          {/* <img src={ps} alt='' style={{height:300,width:500,minWidth:500,objectFit:'cover'}}/>
                          <div style={{width:'100%',display:'flex',flexDirection:'column',paddingLeft:30,height:'100%'}}>
                            <div style={{fontSize:20,fontWeight:700,marginBottom:10}}>프로젝트 이름</div>
                            <div style={{fontSize:18,marginBottom:10}}>설명</div>
                            <div style={{display:'flex'}}>
                              <div style={{marginRight:5}}>포토샵</div>
                              <div style={{marginRight:5}}>일러스트</div>
                            </div>
                            <div style={{height:'100%',display:'flex',alignItems:'flex-end'}}>
                              <div style={{padding:10,border:'1px solid #5d5d5d'}}>사이트 바로가기</div>
                            </div>
                          </div> */} 
                        
                      

                        <div onClick={()=>handlePortfolio('right')} style={{fontSize:60,margin:'0px 10px 0px 30px',zIndex:5000,position:'relative'}}>
                          {'>'}
                        </div>
                        <div style={{width:100,minWidth:100,maxWidth:100}}/>
                         
                     </div>

                     

                     <div style={{display:'flex',alignItems:'center',marginTop:80,width:'90%',justifyContent:'center'}}>
                        {list.map((val,idx)=>
                          <div onClick={()=>setPortNumber(idx)}
                          style={{width:9,height:9,paddingRight:5,paddingLeft:5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <div style={{width:idx===portNumber?9:6,height:idx===portNumber?9:6,minWidth:idx===portNumber?9:6,
                            backgroundColor:idx===portNumber?'#323232':'#969696',
                          borderRadius:50,}}/>
                          </div>
                        )}
                      </div>
                      

                    </div>

                    <div className='electronicDisplay'>
                      PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO 
                      PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO 
                    </div>
                          
                  </div>
         
                 
                           
                </SwiperSlide> 
                <div 
                  style={{width:100, height:'100%',position:'absolute',right:0,top:0,zIndex:6000}}>
                      <div className='swiper-pagination'/>
                  </div>
        </Swiper>

       
       
        </div>
        
      

      
        
      </div>
        

         
    </div>


  );
})

export default App;

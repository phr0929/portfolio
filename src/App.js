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
import back from './resource/back.svg';
import next from './resource/next.svg';
import nav from './resource/nav.svg';
import cancel from './resource/cancel.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation,Pagination,Scrollbar,Mousewheel,A11y} from "swiper"
const App =  (()=> {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]); // *

  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()
 

  useEffect(()=>{
    setOneVh();
    window.scrollTo(0,0)
    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])
  

  const list =[
    {title:'PULSE 웹사이트 제작',content:'소프트웨어 개발업체 PULSE 사이트 반응형으로 제작',tool:[ps,html,css,js],link:['https://pulse.wo.tc/'],img:port1},
    {title:'곱빼기 웹사이트 제작',content:'서산시 배달앱 곱빼기 사이트 반응형으로 제작',tool:[ps,html,css,js],link:['https://pulse.wo.tc/Double'],img:port2},
    {title:'서산개백수 포트폴리오 제작',content:'유튜브 서산개백수 포트폴리오 사이트 반응형으로 제작',tool:[ps,ai,html,css,js],link:['https://phr0929.github.io/'],img:port3},
    {title:'곱빼기 앱 개발',content:'서산시 배달앱 곱빼기 프론트엔드 개발 / 디자인',tool:[ps,ai,html,css,js],link:['https://play.google.com/store/apps/details?id=tc.wo.pulse.community','https://apps.apple.com/kr/app/%EA%B3%B1%EB%B9%BC%EA%B8%B0/id1621478258'],img:port4},
    {title:'삼량이 캐릭터 창작',content:'고양이 캐릭터 삼량이 창작 / 인스타그램 운영',tool:[ps,ai,clip,pro],link:['https://instagram.com/discontent.cat'],img:port5}
  ]
  const [pageNumber,setPageNumber] = useState(0)
  const [swiper,setSwiper] = useState(null)
  const [portNumber,setPortNumber] = useState(0)
  const [navBar,setNavBar] = useState(false)
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
    <div className="App mainFont"> 
      <div className='menuBar'> 
        <div className='logo'>
          P.HYERIM
        </div>
        <div className='menu'>
          <div onClick={()=>swiper.slideTo(0)} className={pageNumber===0?'menuOn':'menuOff'}>HOME</div>
          <div onClick={()=>swiper.slideTo(1)} className={pageNumber===1?'menuOn':'menuOff'}>ABOUT</div>
          <div onClick={()=>swiper.slideTo(2)} className={pageNumber===2?'menuOn':'menuOff'} style={{width:85}}>PORTFOLIO</div>
        </div>
        <img onClick={()=>setNavBar(navBar?false:true)} src={nav} alt='' className='nav' />
      </div>

      <div className='navMenu' style={{display:navBar?'flex':'none'}}>
        <div onClick={()=>swiper.slideTo(0)} className={pageNumber===0?'menuOn':'menuOff'}>HOME</div>
        <div onClick={()=>swiper.slideTo(1)} className={pageNumber===1?'menuOn':'menuOff'}>ABOUT</div>
        <div onClick={()=>swiper.slideTo(2)} className={pageNumber===2?'menuOn':'menuOff'}>PORTFOLIO</div>
      </div>
       

        <Swiper     
          onSwiper = {setSwiper} className='portfolioSwiper'
          direction='vertical' 
          speed={1000}
          mousewheel= {true}
          modules={[Navigation, Pagination, ]} 
          pagination={
            {el: ".swiper-pagination", 
            type : 'bullets',
            clickable: true,}}  
          onSlideChange={(e) =>setPageNumber(e.realIndex)}
          autoHeight={true} 
          slidesPerView={1} 
          initialSlide={0}                          
          loop={false}
          loopedSlides={1}
          observer={true}
          observeParents={true}
          resistance={true}>

            <SwiperSlide> 
              <div className='slide'>
                <div className='mainText'>
                  <div className='titleFont'>
                    UI/UX designer
                  </div>
                  {/* <div style={{position:'relative',width:'100%',maxWidth:1300,display:'flex',
                  alignItems:'center',justifyContent:'center'}}>
                    <div style={{fontSize:50,fontWeight:900,width:'100%',paddingLeft:10,boxSizing:'border-box',
                    textAlign:'left'}}>UI/UX designer</div>
                  </div> */}
                  <div className='titleFont'>
                    P.HYERIM
                  </div>
                  <span className='titleFont'>
                    P.HR
                  </span>
                  <div className='electronicDisplay'>
                    UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer
                  </div>
                  {/* <div style={{position:'relative',width:'100%', 
                  display:'flex',alignItems:'center',justifyContent:'center',marginTop:50}}>
                    <div className='mainCenterLogo' style={{position:'absolute',fontSize:140,fontWeight:900,zIndex:1000,maxWidth:1300,width:'100%',
                  textAlign:'left',paddingLeft:5,boxSizing:'border-box'}}>P.HYERIM</div>
                    <div className='electronicDisplay'>UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer</div>
                  </div>   */}
                </div>
                <div className='mouseIcon'>
                    <div className='mouseDown'>
                      <div className='mousePoint'/>
                    </div>
                </div>
              </div>
            </SwiperSlide> 
            <SwiperSlide> 
              <div className='slide'>
                <div className='aboutLayout' style={{paddingTop:70}}> 
                  <div className='aboutTitle'>
                    <span/>
                    CARRERS
                  </div>
                  <div className='carrersLayout'>
                    <div className='carrersDate'>
                      2020.02 ~ 2023.08
                    </div>
                    <div className='carrersDate2'>
                      2020.02 ~<br/>2023.08
                    </div>
                    <div className='carrersLine'>
                      <div className='circle'/>
                      <div className='line'/>
                    </div>
                    <div className='carrersContents'>
                      <span>
                        PULSE
                      </span>
                      <div>
                        디자인
                      </div>
                      <div>
                        프론트엔드 개발
                      </div>
                    </div>
                  </div>   
                  <div className='carrersLayout'>
                    <div className='carrersDate'>
                      2014.02 ~ 2019.12
                    </div>
                    <div className='carrersDate2'>
                      2014.02 ~<br/>2019.12
                    </div>
                    <div className='carrersLine'>
                      <div className='circle'/>
                      <div className='line'/>
                    </div>
                    <div className='carrersContents'>
                      <span>
                        온라인 중고서점 우리아이책더미 운영
                      </span>
                      <div>
                        오픈마켓 yes24, 알라딘 상품등록, 관리
                      </div>
                      <div>
                        상품 검수 / 포장 / 배송
                      </div>
                      <div>
                        회계 업무
                      </div>
                    </div>
                  </div>
                  <div className='lastCarrers'>
                    <span/>
                  </div>
                </div>
            
                <div className='aboutLayout'> 
                 
                  <div className='aboutTitle'>
                    <span/>
                    SKILLS
                  </div> 
                  <div className='skillsLayout'>
                    <div className='skills'>
                      <img className='skilsImg' src={ps} alt=''/>
                      <div>포토샵</div>
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
                  ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                </div>
                      
              </div>
            </SwiperSlide> 
            <SwiperSlide >  
              <div className='slide'>
                <div className='aboutLayout' style={{paddingTop:70}}> 
                  <div className='aboutTitle' style={{marginBottom:50}}>
                    <span/>
                    PORTFOLIO
                  </div>
                  <div className='portfolioLayout'>
                      <img onClick={()=>handlePortfolio('left')} src={back} className='arrowLeft' alt=''/>
                      <div className='portfolioItem'>
                        <img src={list[portNumber].img} alt='' className='portImg'/>
                        <div className='portContents'>
                          <div className='portTitle'>{list[portNumber].title}</div>
                          <div className='portContent'>{list[portNumber].content}</div>
                          <div className='portTool'>
                            {list[portNumber].tool.map((vval,vidx)=>
                              <img key={vidx} src={vval} alt=''/>
                            )} 
                          </div>
                          <div className='portLink'>
                            {list[portNumber].link.length===1?
                              list[portNumber].link.map((vvval,vvidx)=>
                                <div key={vvidx} className='goButton' onClick={()=>window.open(vvval)}>
                                  {portNumber===4?'인스타그램 보러가기':'사이트 바로가기'}</div>
                            ):list[portNumber].link.map((vvval,vvidx)=>
                              <div key={vvidx} className='goButton' onClick={()=>window.open(vvval)}>
                                {vvidx===0?'Google Play':'App Store'} 다운로드
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    <img onClick={()=>handlePortfolio('right')} src={next} className='arrowRight' alt=''/>
                    <div className='portPaddingBox'/>
                  </div>
                  <div className='portButtonBar'>
                    {list.map((val,idx)=>
                      <div className='portButtonItem' onClick={()=>setPortNumber(idx)}>
                        <div className={idx===portNumber?'portOn':'portOff'}/>
                      </div>
                    )}
                  </div>
                </div>
                <div className='electronicDisplay'>
                  PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
                </div>
              </div>  
            </SwiperSlide> 
            <div className='paginationBar'>
              <div className='swiper-pagination'/>
            </div>
        </Swiper>

       
       
    </div>
        
      

       


  );
})

export default App;

import './App.css';
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
import c1 from './resource/c1.svg'
import c2 from './resource/c2.svg'
import c3 from './resource/c3.svg'
import c4 from './resource/c4.svg'
import c5 from './resource/c5.svg'
import a1 from './resource/c1.gif'
import a2 from './resource/c2.gif'
import a3 from './resource/c3.gif'
import a4 from './resource/c4.gif'
import v1 from './resource/c1.mp4'; 
import v2 from './resource/c2.mp4'; 
import v3 from './resource/c3.mp4'; 
import v4 from './resource/c4.mp4'; 
import port1 from './resource/port1.jpg'
import port2 from './resource/port2.jpg'
import port3 from './resource/port3.jpg'
import port4 from './resource/port4.jpg'
import port5 from './resource/port5.jpg'
import port6 from './resource/port6.jpg'
import port7 from './resource/port7.jpg'
import port8 from './resource/port8.jpg'
import back from './resource/back.svg';
import next from './resource/next.svg';
import nav from './resource/nav.svg';
import cancel from './resource/cancel.svg';
import gif2 from './resource/gif/2.gif';
import gif3 from './resource/gif/3.gif';
import gif4 from './resource/gif/4.gif';
import gif6 from './resource/gif/6.gif';
import gif9 from './resource/gif/9.gif';
import gif10 from './resource/gif/10.gif'; 
import gif11 from './resource/gif/11.gif';
import gif15 from './resource/gif/15.gif';
import gif17 from './resource/gif/17.gif';
import gif20 from './resource/gif/20.gif'; 
import gif22 from './resource/gif/22.gif';
import gif24 from './resource/gif/24.gif';

import gif12 from './resource/gif/12.gif';

import click from './resource/gif/21.gif';
import png2 from './resource/gif/2.png';
import png3 from './resource/gif/3.png';
import png4 from './resource/gif/4.png';
import png6 from './resource/gif/6.png';
import png9 from './resource/gif/9.png';
import png10 from './resource/gif/10.png'; 
import png11 from './resource/gif/11.png';
import png15 from './resource/gif/15.png';
import png17 from './resource/gif/17.png';
import png20 from './resource/gif/20.png'; 
import png22 from './resource/gif/22.png';
import png24 from './resource/gif/24.png';

import png12 from './resource/gif/12.png';

import frame1 from './resource/frame/1.svg';
import frame2 from './resource/frame/2.svg';
import frame3 from './resource/frame/3.svg';
import frame4 from './resource/frame/4.svg';
import frame5 from './resource/frame/5.svg';
import frame6 from './resource/frame/6.svg';
import frame7 from './resource/frame/7.svg';
import frame8 from './resource/frame/8.svg';
import frame9 from './resource/frame/9.svg';
import frame10 from './resource/frame/10.svg'; 
import frame11 from './resource/frame/11.svg';
import frame12 from './resource/frame/12.svg';
import frame13 from './resource/frame/13.svg';
import frame14 from './resource/frame/14.svg';
import frame15 from './resource/frame/15.svg';
import frame16 from './resource/frame/16.svg';
import frame17 from './resource/frame/17.svg';
// import img1 from './resource/image/1.svg';
import img2 from './resource/image/2.svg';
// import img3 from './resource/image/3.svg';
// import img4 from './resource/image/4.svg';
import img5 from './resource/image/5.svg';
import img6 from './resource/image/6.svg';
import img7 from './resource/image/7.svg';
import img8 from './resource/image/8.svg';
import img9 from './resource/image/9.svg';
import img10 from './resource/image/10.svg';
import img11 from './resource/image/11.svg';
import img12 from './resource/image/12.svg';
import img13 from './resource/image/13.svg';
import img14 from './resource/image/14.svg';
import img15 from './resource/image/15.svg';
import img16 from './resource/image/16.svg';
import img17 from './resource/image/17.svg';
import img18 from './resource/image/18.svg';
import img19 from './resource/image/19.svg';
import img20 from './resource/image/20.svg';
import img21 from './resource/image/21.svg';
import img22 from './resource/image/22.svg';
import img23 from './resource/image/23.svg';
import img24 from './resource/image/24.svg';
import img25 from './resource/image/25.svg';
import img26 from './resource/image/26.svg';
import img27 from './resource/image/27.png';
import img28 from './resource/image/28.png';
import img29 from './resource/image/29.png';
import img30 from './resource/image/30.png';
import img31 from './resource/image/31.png';
import img32 from './resource/image/32.png';
import img33 from './resource/image/33.png';
import monitor from './resource/monitor.svg';

import insta1 from './resource/insta/1.jpg';
import insta2 from './resource/insta/2.jpg';
import insta3 from './resource/insta/3.jpg';
import insta4 from './resource/insta/4.jpg';
import insta5 from './resource/insta/5.jpg';
import insta6 from './resource/insta/6.jpg';
import insta7 from './resource/insta/7.jpg';

import mobile1 from './resource/mobile/1.jpg';
import mobile2 from './resource/mobile/2.jpg';
import mobile3 from './resource/mobile/3.jpg';
import mobile4 from './resource/mobile/4.jpg';
import mobile5 from './resource/mobile/5.jpg';

import print1 from './resource/print/1.jpg';
import print2 from './resource/print/2.jpg';
import print3 from './resource/print/3.jpg';
import print4 from './resource/print/4.jpg';
import print5 from './resource/print/5.jpg';

import main from './resource/main.gif';
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

  const gifList = [{gif:gif6,png:png6},{gif:gif2,png:png2},{gif:gif3,png:png3},{gif:gif4,png:png4},
    {gif:gif9,png:png9},{gif:gif10,png:png10},{gif:gif11,png:png11},{gif:gif15,png:png15},
    {gif:gif17,png:png17},{gif:gif20,png:png20},{gif:gif22,png:png22},{gif:gif12,png:png12}]

  const frameList = [frame1,frame13,frame10,frame3,frame5,frame6,
    frame7,frame14,frame8,frame9,frame12,frame15,]
  const imgList = [img2,img5,img8,img9,img13,img16,img19
    ,img24,img27,img28,img30,img31]

    const print = [{img:print1,link:'https://notefolio.net/aamm3929/370056'},{img:print2,link:'https://notefolio.net/aamm3929/370059'},{img:print3,link:'https://notefolio.net/aamm3929/370058'},{img:print4,link:'https://notefolio.net/aamm3929/370055'},{img:print5,link:'https://notefolio.net/aamm3929/370057'}]
    const insta = [{img:insta1,link:'https://notefolio.net/aamm3929/370020'},{img:insta2,link:'https://notefolio.net/aamm3929/370022'},{img:insta3,link:'https://notefolio.net/aamm3929/370019'},{img:insta4,link:'https://notefolio.net/aamm3929/370012'},{img:insta5,link:'https://notefolio.net/aamm3929/370009'},{img:insta7,link:'https://notefolio.net/aamm3929/370008'}]
    const mobile = [{img:mobile1,link:'https://notefolio.net/aamm3929/370053'},{img:mobile2,link:'https://notefolio.net/aamm3929/370054'},{img:mobile3,link:'https://notefolio.net/aamm3929/370050'},{img:mobile5,link:'https://notefolio.net/aamm3929/370048'}]
  
  const list =[
    {title:'곱빼기 앱 개발',content:'서산시 배달앱 곱빼기 프론트엔드 개발 / 디자인',tool:[ps,ai,html,css,js],link:['https://play.google.com/store/apps/details?id=tc.wo.pulse.community','https://apps.apple.com/kr/app/%EA%B3%B1%EB%B9%BC%EA%B8%B0/id1621478258'],img:port4},
    {title:'서산개백수 포트폴리오 제작',content:'유튜브 서산개백수 포트폴리오 사이트 반응형으로 제작',tool:[ps,ai,html,css,js],link:['https://phr0929.github.io/'],img:port3},
   
     //서산시 배달앱 곱빼기 사이트 반응형으로 제작//

    {title:'PULSE 웹사이트 제작',content:'소프트웨어 개발업체 PULSE 사이트 반응형으로 제작',tool:[ps,html,css,js],link:['https://pulse.wo.tc/'],img:port1},
    {title:'곱빼기 웹사이트 제작',content:'서산시 배달앱 곱빼기 사이트 반응형으로 제작',tool:[ps,html,css,js],link:['https://pulse.wo.tc/Double'],img:port2},
  
    //소프트웨어 개발업체 PULSE 사이트 반응형으로 제작//

    // {title:'도담헤어 로고 제작',content:'미용실 도담헤어 로고 디자인',tool:[ps],link:[],img:port6},
    // {title:'곱빼기 로고 제작',content:'서산시 배달앱 곱빼기 로고 디자인',tool:[ai],link:[],img:port7},
  ]

  const chList =[
    {title:'불량이',
     content:'불만 고양이',
     personality:['매사에 불만이 많음','짠돌이 고양이','잔소리꾼'],
     color:['#5d5d5d','#fff','#ff9b9f'],
     img:c1,gif:a1,video:v1},
    {title:'즐량이',
     content:'즐거운 고양이',
     personality:['항상 즐거움','알콜러버! 술을 사랑함','흥이 많음'],
     color:['#ffcccd','#fff','#ff9b9f',],
     img:c2,gif:a2,video:v2},
    {title:'겁량이',
     content:'겁쟁이 고양이',
     personality:['항상 겁에 질려있음','낯을 많이 가림','노래 부르기를 좋아함'],
     color:['#ffe1a0','#fff','#ff9b9f',],
     img:c3,gif:a3,video:v3},
    {title:'식댕이',
     content:'식빵 닮은 강아지',
     personality:['항상 겁에 질려있음','낯을 많이 가림','노래 부르기를 좋아함'],
     color:['#fff3e6','#c89264','#ff3636',],
     img:c4,gif:a4,video:v4},    
  ]


  const [pageNumber,setPageNumber] = useState(0)
  const [swiper,setSwiper] = useState(null)
  const [portNumber,setPortNumber] = useState(0)
  
  const [chNumber,setChNumber] = useState(0)
  const [navBar,setNavBar] = useState(false)
  const [ctgr,setCtgr] = useState(0)
  const [miriDialog,setMiriDialog] = useState(false)
  const [miriDialogImg,setMiriDialogImg] = useState(null)


  useEffect(()=>{
    setNavBar(false)
  },[pageNumber])
  const handleSwiper = (idx) => {
    swiper.slideTo(idx)
    setNavBar(false)
  }
  const handleMiriDialog = (src) => {
    setMiriDialog(true)
    setMiriDialogImg(src)
  }
 
  const handleCtgr = (idx) => {
    setCtgr(idx)
  }
  
  const handleChNumber = (idx) => {
    setChNumber(idx)
          
    // let video = document.getElementById("myVideo");
    // video.load();
    // video.play();
  }
  const handlePortfolio = (lf) => {
    let number = portNumber
    if(lf==='left'){
      if(number===0){
        number = 3;   
      }else{
        number = number - 1;
      }
    }else{
      if(number===3){
       
        number = 0; 
      }else{

        number = number + 1;
      }
    }
    
    setPortNumber(number)
  }
  
  const handleCh = (lf) => {


    let number = chNumber

    


    if(lf==='left'){
      if(number===0){
        number = 3;   
        }else{
          number = number - 1;
        }
      }else{
        if(number===3){
        
          number = 0; 
        }else{

          number = number + 1;
        }
      }

      
      // let video = document.getElementById("myVideo");
      // video.load();
      // video.play();
      
      setChNumber(number)
    }

    const handleTamplate = (link) => {
      window.open(link)
    }
  
  
    
    return (
      <div className="App mainFont"> 
        <div className='menuBar'> 
          <div className='logo'  onClick={()=>swiper.slideTo(0)}>
            P.HYERIM
          </div>
          <div className='menu'>
            <div onClick={()=>swiper.slideTo(0)} className={pageNumber===0?'menuOn':'menuOff'}>HOME</div>
            <div onClick={()=>swiper.slideTo(1)} className={pageNumber===1?'menuOn':'menuOff'}>ABOUT</div>
            <div onClick={()=>swiper.slideTo(2)} className={pageNumber>=2?'menuOn':'menuOff'} style={{width:85}}>PORTFOLIO</div>
          </div>
          {navBar?
          <img onClick={()=>setNavBar(navBar?false:true)} src={cancel} alt='' className='nav' />
          :<img onClick={()=>setNavBar(navBar?false:true)} src={nav} alt='' className='nav' />}
        </div>
        <div className='navMenuBar' style={{display:navBar?'flex':'none'}}>
          <div className='navMenu'>
            <div onClick={()=>handleSwiper(0)} className={pageNumber===0?'menuOn':'menuOff'}>HOME</div>
            <div onClick={()=>handleSwiper(1)} className={pageNumber===1?'menuOn':'menuOff'}>ABOUT</div>
            <div onClick={()=>handleSwiper(2)} className={pageNumber>=2?'menuOn':'menuOff'}>PORTFOLIO</div>
          </div>
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
            // observer={true}
            observeParents={true}
            resistance={true}>

              <SwiperSlide> 
                <div className='slide'>
                  <div style={{width:'100%',maxWidth:1300,display:'flex',flexDirection:'row'}}>
                
                    <div style={{width:'100%',height:'100%',top:0,left:0,
                    display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'70px 20px 0px 20px',boxSizing:'border-box'
                  ,position:'absolute',zIndex:10}}>
                    {/* <img src={monitor} alt='' style={{width:500}}/>
                      <img src={gif24} alt='' style={{width:500,marginTop:-50}}/> */}
                      <img src={main} alt='' style={{height:'calc(100% - 160px)',maxWidth:'100%',objectFit:'contain'}}/>
                      
                    </div> 
                  </div>
                  {/* <div className='mainText'>
                    <div className='titleFont'>
                      UI/UX designer
                    </div>
                    <div className='titleFont'>
                      P.HYERIM
                    </div>
                    <span className='titleFont'>
                      P.HR
                    </span>
                    <div className='electronicDisplay'>
                      UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer UI/UX designer
                    </div>
                  </div> */}
                  {/* <div className='mouseIcon'>
                      <div className='mouseDown'>
                        <div className='mousePoint'/>
                      </div>
                  </div> */}
                </div>
              </SwiperSlide> 
              <SwiperSlide> 
                <div className='slide'>
                  <div className='aboutLayout' style={{paddingTop:70}}> 
                    <div className='aboutTitle'>
                      <span/>
                      CARRERS
                    </div>
                    {/* <div className='carrersLayout'>
                      <div className='carrersDate'>
                        2023.11 ~
                      </div>
                      <div className='carrersDate2'>
                        2023.11 ~<br/>
                      </div> 
                      <div className='carrersLine'>
                        <div className='circle'/>
                        <div className='line'/>
                      </div>
                      
                      <div className='carrersContents'>
                        <span>
                          미리캔버스 기여자 활동
                        </span>
                        <div>
                          요소 디자인
                        </div>
                      </div>
                    </div>  */}
                    <div className='carrersLayout'>
                      <div className='carrersDate'>
                        2020.02 ~ 2023.04
                      </div>
                      <div className='carrersDate2'>
                        2020.02 ~<br/>2023.04
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
                          디자인 / 프론트엔드 개발
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
                          우리아이책더미 운영
                        </span>
                        <div>
                          오픈마켓 상품 등록, 관리
                        </div>
                      </div>
                    </div>   
                    <div className='carrersLayout'>
                      <div className='carrersDate'>
                        2012.08 ~ 2013.04
                      </div>
                      <div className='carrersDate2'>
                        2012.08 ~<br/>2013.04
                      </div>
                      <div className='carrersLine'>
                        <div className='circle'/>
                        <div className='line'/>
                      </div>
                      <div className='carrersContents'>
                        <span>
                          신원해피니스
                        </span>
                        <div>
                          카탈로그/이벤트페이지 디자인
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

                  {/* <div className='electronicDisplay'>
                  About About About About About About About About About About About About About About About About About About About 
                  </div> */}
                        
                </div>
              </SwiperSlide> 
              <SwiperSlide >  
                <div className='slide'>
                  <div className='portLayout'> 
                    <div className='portLayoutTitle'>
                      <span/>
                      APP / WEB SITE
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
                                    사이트 바로가기
                                  </div>
                              ):list[portNumber].link.map((vvval,vvidx)=>
                                <div key={vvidx} className='goButton' onClick={()=>window.open(vvval)}>
                                  {vvidx===0?'Google Play':'App Store'}
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
                        <div className='portButtonItem' onClick={()=>setPortNumber(idx)} key={idx}>
                          <div className={idx===portNumber?'portOn':'portOff'}/>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <div className='electronicDisplay'>
                  App / Web site App / Web site App / Web site App / Web site App / Web site App / Web site App / Web site App / Web site App / Web site App / Web site 
                  </div> */}
                </div>  
              </SwiperSlide> 

              <SwiperSlide >  
                <div className='slide'>
                  <div className='portLayout'> 
                    <div className='portLayoutTitle'>
                      <span/>
                      CHARACTER
                    </div>
                    <div className='characterLayout'>
                        <img onClick={()=>handleCh('left')} src={back} className='arrowLeft' alt=''/>
                        <div className='characterItem'>
                          <img src={chList[chNumber].img} alt='' className='portImg'/>
                          <div className='portContents'>
                            <div className='portTitle'>{chList[chNumber].title}</div>
                            <div className='portContent'>{chList[chNumber].content}</div>
                            <div className='chColor'>
                              {chList[chNumber].color.map((vval,vidx)=>
                                <div key={vidx} style={{backgroundColor:vval}}/>
                              )} 
                            </div>
                            <div className='chLink'>
                              {chNumber===3?<></>:
                              <div className='goButton' onClick={()=>window.open('https://instagram.com/discontent.cat')}>
                                    인스타그램 바로가기
                              </div>}
                              <div className='chVideoLayout'>
                                <div>
                                  <img src={chList[chNumber].gif} alt='' className='chGif'/>
                                  {/* <video 
                                    id="myVideo"
                                    autoPlay
                                    muted
                                    loop>
                                    <source src={chList[chNumber].video} type="video/mp4"/>
                                  </video> */}
                                </div>
                             
                             </div>
                          </div>
                          
                        </div>
                      </div>
                    <img onClick={()=>handleCh('right')} src={next} className='arrowRight' alt=''/>
                    <div className='portPaddingBox'/>
                  </div>
                  <div className='portButtonBar'>
                    {chList.map((val,idx)=>
                      <div className='portButtonItem' onClick={()=>handleChNumber(idx)} key={idx}>
                        <div className={idx===chNumber?'portOn':'portOff'}/>
                      </div>
                    )}
                  </div>
                 
                </div>
                {/* <div className='electronicDisplay'>
                Character Character Character Character Character Character Character Character Character Character Character Character Character Character Character Character 
                </div> */}
              </div>  
              </SwiperSlide> 

              <SwiperSlide >  
                <div className='slide'>
                  <div className='portLayout'> 
                    <div className='portLayoutTitle2'>
                      <span/>
                      TEMPLATE
                    </div>
                    <div className='miriLayout'>
                      <div className='miriCtgr'>
                        <div onClick={()=>handleCtgr(0)} className={ctgr===0?'miriCtgrOn':'miriCtgrOff'}>인쇄</div>
                        <div onClick={()=>handleCtgr(1)} className={ctgr===1?'miriCtgrOn':'miriCtgrOff'}>인스타</div>
                        <div onClick={()=>handleCtgr(2)} className={ctgr===2?'miriCtgrOn':'miriCtgrOff'}>모바일</div>
                      </div>

                      
                      <div className='miriImgLayout' style={{maxWidth:950}}>
                        {ctgr===0?
                          print.map((val,idx)=>
                            <img src={val.img} key={idx} className='miriImgLayoutImg' alt='' onClick={()=>handleTamplate(val.link)}/>
                          ):ctgr===1?
                          insta.map((val,idx)=>
                            <img src={val.img} key={idx} className='miriImgLayoutImg' alt='' onClick={()=>handleTamplate(val.link)}/>
                          ):
                          mobile.map((val,idx)=>
                          <img src={val.img} key={idx} className='miriImgLayoutImg' alt='' onClick={()=>handleTamplate(val.link)}/>
                          )}
                       </div>
                        
                      <div className='portPaddingBox' />
                    </div>
                    
                 
                  </div> 
                </div>  
              </SwiperSlide> 

              {/* <SwiperSlide >  
                <div className='slide'>
                  <div className='portLayout'> 
                    <div className='portLayoutTitle2'>
                      <span/>
                      DESIGN ELEMENT
                    </div>
                    <div className='miriLayout'>
                      <div className='miriCtgr'>
                        <div onClick={()=>handleCtgr(0)} className={ctgr===0?'miriCtgrOn':'miriCtgrOff'}>애니</div>
                        <div onClick={()=>handleCtgr(1)} className={ctgr===1?'miriCtgrOn':'miriCtgrOff'}>프레임</div>
                        <div onClick={()=>handleCtgr(2)} className={ctgr===2?'miriCtgrOn':'miriCtgrOff'}>이미지</div>
                      </div> 
                      
                      <div className='miriImgLayout' style={{maxWidth:950}}>
                        {ctgr===0?
                          gifList.map((val,idx)=>
                            idx===0?
                            <div className='miriImgLayoutDiv' onClick={()=>handleMiriDialog(val.gif)} key={idx} >
                              <img src={val.png} className='miriImgLayoutDivImg' alt='' style={{position:'absolute',zIndex:900}}/>
                              <img src={click} className='clickImg' alt=''/>
                            </div>
                            :
                            <img src={val.png} key={idx} className='miriImgLayoutImg' alt='' onClick={()=>handleMiriDialog(val.gif)}/>
                          ):ctgr===1?
                          frameList.map((val,idx)=>
                            <img src={val} key={idx} className='miriImgLayoutImg' alt='' onClick={()=>handleMiriDialog(val)}/>
                          ):
                          imgList.map((val,idx)=>
                          <img src={val} key={idx} className='miriImgLayoutImg' alt='' onClick={()=>handleMiriDialog(val)}/>
                          )}
                       </div>
                        
                      <div className='portPaddingBox'/>
                    </div>
                    
                 
                  </div> 
                </div>  
              </SwiperSlide>  */}
            <div className='paginationBar'>
              <div className='swiper-pagination'/>
            </div>
        </Swiper>

       
        {miriDialog?
        <div className='dialogLayout' onClick={()=>setMiriDialog(false)}>

            <span className='dialogLayoutIn'>
              <img src={miriDialogImg} alt=''/>
            </span>
            
        </div>:<></>}
       
    </div>
        
      

       


  );
})

export default App;

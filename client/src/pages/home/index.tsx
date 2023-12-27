import { useEffect, useState,useRef } from 'react';
import "./css/index.css";
import Nav from '../components/nav';
import Game from "./components/game";
import { importFiles,shuffleMappings,getInitialData } from "../../utils/helper_functions"
import { MyStates,ResultIndexType } from '../../types/ui.types'
import History from "../history/index";
import Profile from "../profile/index";
import Payment from "../components/payment";
import Confetti from 'react-confetti'

const Index = () => {

  const zeroIndex : ResultIndexType = {b: 0,i:0,n:0,g:0,o:0}
  
  const [audioBuffers, setAudioBuffers] = useState<AudioBuffer[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [audioFileNames,setAudioFileNames] = useState<string[]>()
  const [isFullScreen,setIsFullScreen] = useState(false)
  const [toggleNav,setToggleNav] = useState(true)
  const timeIdRef = useRef<number | null>(null);
  const [currState,setCurrState] = useState<MyStates>(MyStates.loading)
  const [currInd,setCurrInd] = useState(0)
  const [initialData,setInitialData] = useState(getInitialData())
  const [resultIndex,setResultIndex] = useState<ResultIndexType>(zeroIndex)

  const [payment,setPayment] = useState(false)
  const [showHistory,setShowHistory] = useState(false)
  const [showProfile,setShowProfile] = useState(false)

  let curr = 0; 
  let currResultIndex : any = zeroIndex
  let currInitialData : any = initialData
  var elem = document.documentElement;
    
  /* View in fullscreen */
  function openFullscreen() {
      setIsFullScreen(true)
      elem!.requestFullscreen();
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
      setIsFullScreen(false)
      document!.exitFullscreen();
  }

  function toggleScreen(){
      isFullScreen ? closeFullscreen() : openFullscreen()
  }

  const pauseGame = () =>{
    setCurrState(MyStates.paused)
    if(timeIdRef.current != null){
      clearInterval(timeIdRef.current)
    }
  }

  const restart = () => {
    setPayment(false)
    setCurrState(MyStates.loaded)
  }
  
  const bingo = () =>{
    setCurrInd(0)
    setResultIndex(zeroIndex)
    setCurrState(MyStates.bingo)
    setInitialData(getInitialData()  )
    if(timeIdRef.current != null){
      clearInterval(timeIdRef.current)
    }
    const audioMap = audioFileNames!.reduce((map, key, index) => {
      map[key] = audioBuffers[index];
      return map;
    }, {} as Record<string, AudioBuffer>);
    const shuffledAudio = shuffleMappings(audioMap)
    setAudioBuffers(Object.values(shuffledAudio))
    setAudioFileNames(Object.keys(shuffledAudio))
  }
  
  const play = async () => {
    setCurrState(MyStates.playing)
    curr = currInd;
    currResultIndex = resultIndex;
    timeIdRef.current = setInterval(()=>{
      if(curr >= audioBuffers.length ){
        return bingo()
      }
      if (audioBuffers.length > 0) {
        const context = new AudioContext();
        const selectedBuffer = audioBuffers[curr];
        const source = context.createBufferSource();
        source.buffer = selectedBuffer;
        source.connect(context.destination);
        source.start(0);
        const value = audioFileNames![curr]
        location.href = "#"+value[0]+currResultIndex[value[0]]
        currInitialData[value[0]][currResultIndex[value[0]]] = value
        setInitialData(currInitialData)
        currResultIndex[value[0]] += 1
        setResultIndex(currResultIndex)
        curr += 1
        setCurrInd(curr)
        source.onended = () => {
          source.disconnect();
          context.close();
        };
      }
    },7000)
  };

  useEffect(() => {
    const fetchAudioBuffers = async () => {
      const audios = await importFiles()
      const shuffledAudio = shuffleMappings(audios)
      const datas = Object.values(shuffledAudio)
      setAudioFileNames(Object.keys(shuffledAudio))
      const buffers = await Promise.all(
        datas.map(async (file) => {
            const response = await fetch(file);
            const arrayBuffer = await response.arrayBuffer();
            const context = new AudioContext();
            const audioBuffer = await context.decodeAudioData(arrayBuffer);
            context.close(); 
            setCounter(d => d + 1)
            return audioBuffer;
          })
      );
      setAudioBuffers(buffers);
      setCurrState(MyStates.loaded)
    };

    fetchAudioBuffers();
  }, []); 

    return (
        <div className={`h-[100vh] relative flex flex-col overflow-x-hidden ${!payment && "overflow-y-hidden"}`}>
          {MyStates.bingo == currState && <Confetti />}
          { currState == MyStates.loading && 
            <div className='absolute z-40 left-0 top-0 bottom-0 right-0 '>
                <div className='absolute left-0 right-0 top-0 bottom-0 bg-slate-900 opacity-50'>

                </div>
                <div className='flex z-50 justify-center absolute left-0 right-0 top-0 bottom-0 '>
                    <div className=' mt-[100px]'>
                      <progress className='w-[300px]' value={counter} max={75} />
                    </div>
                </div>
            </div>
          }
         {showHistory && <History setShowHistory={setShowHistory}  />}
         {showProfile && <Profile setShowProfile={setShowProfile}  />}
         {currState != MyStates.loading && !payment && <Payment setPayment={setPayment} setShowProfile={setShowProfile} setShowHistory={setShowHistory}/>}
          <div className={`${currState == MyStates.loading && "blur-[2em]" } relative`}>
              {/* <div className='absolute right-10 top-10 px-3 py-5 rounded-xl shadow-lg z-20 flex flex-col bg-green-200'>
                <div>
        
                </div>
                <div>
                  <div>bet 100 birr</div>
                  <div>net win 2100 birr</div>
                </div>
              </div> */}
              <Nav setIsFullScreen={setIsFullScreen} isFullScreen={isFullScreen} setShowHistory={setShowHistory} setShowProfile={setShowProfile} toggleNav={toggleNav} toggleScreen={toggleScreen} />
              <div className={` flex text-white relative  bg-red-300 `}>
                  <Game 
                      play={play} 
                      audioFileNames={audioFileNames} 
                      currInd={currInd} 
                      bingo={bingo} 
                      currState={currState} 
                      initialData={initialData} 
                      pauseGame={pauseGame} 
                      restart={restart}
                      payment={payment}
                    />
            </div>
          </div>
        </div>
    );
};

export default Index;
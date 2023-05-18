import { Suspense, useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { usePinch, useGesture } from "@use-gesture/react";

import "./styles.css";
import Model from "./components/Model";
import VConsole from 'vconsole';

const App = () => {
  const [play, setPlay] = useState(false);
  const [marker, setMarker] = useState(false);
  const [scale, setScale] = useState([0, 0, 0]);
  const [newAngle, setNewAngle] = useState([-90, 0, 0]);
  const [position, setPosition] = useState([0, 2, 0]);
  const [dist, setDist] = useState(0);

  document.addEventListener("gesturestart", (e) => e.preventDefault());
  document.addEventListener("gesturechange", (e) => e.preventDefault());

  // const bind = usePinch(({ offset: [scale, angle], da: [d, a] }) => {
  //   setScale([scale, scale, scale]);
  //   let angleThreshold = Math.abs(
  //     (newAngle[1] / 0.1 - angle) / (newAngle[1] / 0.1)
  //   );
  //   let distThreshold = Math.abs((dist - d) / d);
  //   console.log(angleThreshold);
  //   if (angleThreshold > 0.05 && distThreshold < 0.07) {
  //     setNewAngle([-90, angle * 0.1, 0]);
  //   }
  //   if (distThreshold >= 0.1) {
  //     setDist(d);
  //   }
  // });
  const bind = useGesture({
    onPinch: ({ offset: [scale, angle], da: [d, a] }) => {
      console.log('scale', scale, 'angle', angle, 'd', d, 'a', a);
      setScale([scale, scale, scale]);
      let angleThreshold = Math.abs(
        (newAngle[1] / 0.1 - angle) / (newAngle[1] / 0.1)
      );
      let distThreshold = Math.abs((dist - d) / d);
      console.log(angleThreshold);
      if (angleThreshold > 0.05 && distThreshold < 0.07) {
        setNewAngle([-90, angle * 0.1, 0]);
      }
      if (distThreshold >= 0.1) {
        setDist(d);
      }
    },
    // 拖拽
    onDrag: ({ offset: [x, y] }) => {
      console.log('x, y', x, y);
      setPosition([x, y, 0]);
    }
  })

  function handlePlayButton() {
    let setDisplay = !play;
    const playScreen = document.querySelector(".playScreen");
    playScreen.style.transition = "opacity 0.6s ease-out";
    playScreen.style.opacity = 0;
    setTimeout(() => {
      setPlay(setDisplay);
    }, 600);
  }

  function handleMarkerFound() {
    let setMarkerDetected = true;
    console.log(setMarkerDetected);
    setMarker(setMarkerDetected);
  }

  function handleMarkerLost() {
    let setMarkerDetected = false;
    setMarker(setMarkerDetected);
  }

  function handleVideoStreamReady() {
    const loadScreen = document.querySelector(".container-loader");
    loadScreen.style.transition = "opacity 0.4s ease-out";
    loadScreen.style.opacity = 0;
    setTimeout(() => {
      loadScreen.style.display = "none";
    }, 600);
  }

  function handleVideoStreamError() { }


  useEffect(()=>{
    const vConsole = new VConsole({ theme: 'dark' });
  }, [])

  return (
    <>
      <div
        className="container"
        style={
          play
            ? {
              background: "transparent",
              transition: "background 0.8s ease-in",
              transitionDelay: "0.8s",
            }
            : { background: "#e4c970" }
        }
      >
        {play ? (
          <>
            <ARCanvas
              className="AR"
              shadows
              camera={{ position: [0, 0, 0], near: 0.01, far: 1000 }}
              onCreated={({ gl }) => {
                gl.setSize(window.innerWidth, window.innerHeight);
              }}
              gl={{
                alpha: true,
                antialias: true,
                precision: "highp",
                logarithmicDepthBuffer: true,
              }}
              // onCameraStreamReady={handleVideoStreamReady}
              // onCameraStreamError={handleVideoStreamError} //
              sourceType="webcam"
              {...bind()}
            >
              <ARMarker
                type={"pattern"}
                patternUrl={"data/hiro.patt"}
                onMarkerFound={handleMarkerFound}
                onMarkerLost={handleMarkerLost}
                params={{ smooth: true }}
              >
                <ambientLight />
                <Suspense fallback={null}>
                  <Model
                    rotation={newAngle}
                    position={position}
                    scale={scale}
                    marker={marker}
                  />
                </Suspense>
                <OrbitControls />
              </ARMarker>
            </ARCanvas>
          </>
        ) : (
          <div className="playScreen">

            <button onClick={handlePlayButton}>开始</button>
            <p style={{ color: "white", textAlign: "center" }}>
              如果遇到视频定位错误,
              <br />
              转动手机方向或调整浏览器窗口大小
            </p>
          </div>
        )}
        {/* <p className="footer">
          <br />
          Developed by {""}
          <span>Li Ming</span>
        </p> */}
      </div>
      {!marker ? (
        <div className="scanMarkerImg">
          <img src="./ScanMarkerInst.png" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;

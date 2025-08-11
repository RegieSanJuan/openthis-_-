"use client"

import type React from "react"
import { useEffect, useState } from "react"
import "./flowers.css"

export default function FlowersPage() {
  const [audioEnabled, setAudioEnabled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove("not-loaded")
    }, 1000)

    const enableAudio = async () => {
      try {
        const audio = document.getElementById("background-music") as HTMLAudioElement
        if (audio) {
          // Set volume to ensure it's audible
          audio.volume = 0.7

          // Try to play immediately
          await audio.play()
          setAudioEnabled(true)
          console.log("Audio started successfully")
        }
      } catch (error) {
        console.log("Initial autoplay failed, trying user interaction approach:", error)

        // Fallback: play on any user interaction
        const playOnInteraction = async () => {
          try {
            const audio = document.getElementById("background-music") as HTMLAudioElement
            if (audio && !audioEnabled) {
              audio.volume = 0.7
              await audio.play()
              setAudioEnabled(true)
              console.log("Audio started after user interaction")

              // Remove listeners after successful play
              document.removeEventListener("click", playOnInteraction)
              document.removeEventListener("keydown", playOnInteraction)
              document.removeEventListener("touchstart", playOnInteraction)
            }
          } catch (err) {
            console.log("Audio play failed:", err)
          }
        }

        document.addEventListener("click", playOnInteraction)
        document.addEventListener("keydown", playOnInteraction)
        document.addEventListener("touchstart", playOnInteraction)
      }
    }

    const musicTimer = setTimeout(enableAudio, 1500)

    return () => {
      clearTimeout(timer)
      clearTimeout(musicTimer)
    }
  }, [audioEnabled])

  return (
    <div className="flowers-container">
      <audio id="background-music" loop preload="auto" autoPlay playsInline volume={0.7}>
        <source src="/audio/gluesong.mp3" type="audio/mpeg" />
        <source src="/audio/gluesong.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <div className="night"></div>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle--${i + 1}`}></div>
        ))}
      </div>
      <div className="butterflies">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`butterfly butterfly--${i + 1}`}>
            <div className="butterfly__wing butterfly__wing--left"></div>
            <div className="butterfly__wing butterfly__wing--right"></div>
            <div className="butterfly__body"></div>
          </div>
        ))}
      </div>
      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8"></div>
            <div className="flower__leaf flower__leaf--9"></div>
            <div className="flower__leaf flower__leaf--10"></div>
            <div className="flower__leaf flower__leaf--11"></div>
            <div className="flower__leaf flower__leaf--12"></div>
            <div className="flower__leaf flower__leaf--13"></div>
            <div className="flower__leaf flower__leaf--14"></div>
            <div className="flower__leaf flower__leaf--15"></div>
            <div className="flower__leaf flower__leaf--16"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8"></div>
            <div className="flower__leaf flower__leaf--9"></div>
            <div className="flower__leaf flower__leaf--10"></div>
            <div className="flower__leaf flower__leaf--11"></div>
            <div className="flower__leaf flower__leaf--12"></div>
            <div className="flower__leaf flower__leaf--13"></div>
            <div className="flower__leaf flower__leaf--14"></div>
            <div className="flower__leaf flower__leaf--15"></div>
            <div className="flower__leaf flower__leaf--16"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8"></div>
            <div className="flower__leaf flower__leaf--9"></div>
            <div className="flower__leaf flower__leaf--10"></div>
            <div className="flower__leaf flower__leaf--11"></div>
            <div className="flower__leaf flower__leaf--12"></div>
            <div className="flower__leaf flower__leaf--13"></div>
            <div className="flower__leaf flower__leaf--14"></div>
            <div className="flower__leaf flower__leaf--15"></div>
            <div className="flower__leaf flower__leaf--16"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="flower flower--4">
          <div className="flower__leafs flower__leafs--4">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8"></div>
            <div className="flower__leaf flower__leaf--9"></div>
            <div className="flower__leaf flower__leaf--10"></div>
            <div className="flower__leaf flower__leaf--11"></div>
            <div className="flower__leaf flower__leaf--12"></div>
            <div className="flower__leaf flower__leaf--13"></div>
            <div className="flower__leaf flower__leaf--14"></div>
            <div className="flower__leaf flower__leaf--15"></div>
            <div className="flower__leaf flower__leaf--16"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="flower flower--5">
          <div className="flower__leafs flower__leafs--5">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8"></div>
            <div className="flower__leaf flower__leaf--9"></div>
            <div className="flower__leaf flower__leaf--10"></div>
            <div className="flower__leaf flower__leaf--11"></div>
            <div className="flower__leaf flower__leaf--12"></div>
            <div className="flower__leaf flower__leaf--13"></div>
            <div className="flower__leaf flower__leaf--14"></div>
            <div className="flower__leaf flower__leaf--15"></div>
            <div className="flower__leaf flower__leaf--16"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {[...Array(6)].map((_, i) => (
          <div key={i} className={`daisy-bud daisy-bud--${i + 1}`}>
            <div className="daisy-bud__petals">
              {[...Array(12)].map((_, j) => (
                <div key={j} className={`daisy-bud__petal daisy-bud__petal--${j + 1}`}></div>
              ))}
            </div>
            <div className="daisy-bud__center"></div>
            <div className="daisy-bud__stem"></div>
          </div>
        ))}

        <div className="grow-ans" style={{ "--d": "1.2s" } as React.CSSProperties}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.4s" } as React.CSSProperties}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ "--d": "3.2s" } as React.CSSProperties}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div key={index} className={`long-g long-g--${index}`}>
            <div className="grow-ans" style={{ "--d": `${3 + index * 0.2}s` } as React.CSSProperties}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={{ "--d": `${3.2 + index * 0.2}s` } as React.CSSProperties}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={{ "--d": `${3.4 + index * 0.2}s` } as React.CSSProperties}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={{ "--d": `${3.6 + index * 0.2}s` } as React.CSSProperties}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

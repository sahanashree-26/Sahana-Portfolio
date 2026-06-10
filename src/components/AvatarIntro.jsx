import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";

function AvatarIntro() {
  const [playing, setPlaying] = useState(false);
  const [visibleLines, setVisibleLines] = useState(1);

  const introLines = [
  "Hi everyone, I'm Sahana.",
  "Welcome to my digital portfolio.",
  "I'm an Information Technology student and aspiring Full-Stack Developer.",
  "My expertise lies in building scalable web applications using Python, React, Node.js and PostgreSQL.",
  "I also enjoy crafting intuitive user experiences using Figma and Tailwind CSS.",
  "I love approaching projects from both a technical and user-centric perspective.",
  "Explore my skills, projects, internships and professional journey."
];

  const introText = introLines.join(" ");

  useEffect(() => {
    if (visibleLines < introLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [visibleLines, introLines.length]);

  const speakIntro = () => {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const speech = new SpeechSynthesisUtterance(introText);

    const voices = window.speechSynthesis.getVoices();

    const femaleVoice = voices.find(
     (voice) => voice.name === "Microsoft Susan - English (United Kingdom)"
    );

    if (femaleVoice) {
      speech.voice = femaleVoice;
    }

    speech.rate = 0.95;
    speech.pitch = 1.6;
    speech.volume = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
    setPlaying(true);

    speech.onend = () => {
      setPlaying(false);
    };
  };

  return (
    <section className="hero-ai">
      <div className="hero-image-box">
        <img src={avatar} alt="Sahana AI Avatar" />

        <div className={playing ? "voice-wave active" : "voice-wave"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="hero-content">
        <p className="ai-label">SAHANA'S DIGITAL ASSISTANT</p>

        <h1>
          Hi, I'm <span>Sahana</span>
        </h1>

        <div className="hero-text">
          {introLines.slice(0, visibleLines).map((line, index) => (
            <p key={index} className="typing-line">
              {line}
              {index === visibleLines - 1 &&
                visibleLines !== introLines.length && (
                  <span className="cursor">▋</span>
                )}
            </p>
          ))}
        </div>

        <div className="hero-buttons">
          <button onClick={speakIntro}>
            {playing ? "Pause Intro" : "Play Intro"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AvatarIntro;
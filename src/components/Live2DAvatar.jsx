import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display";

function Live2DAvatar({ isSpeaking }) {
  const containerRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    window.PIXI = PIXI;

    const app = new PIXI.Application({
      width: 500,
      height: 600,
      transparent: true,
      autoStart: true,
    });

    containerRef.current.appendChild(app.view);

    const loadModel = async () => {
      const model = await Live2DModel.from(
        "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json"
      );

      model.scale.set(0.35);
      model.x = 120;
      model.y = 60;

      app.stage.addChild(model);
      modelRef.current = model;
    };

    loadModel();

    return () => {
      app.destroy(true, true);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isSpeaking && modelRef.current) {
      interval = setInterval(() => {
        try {
          const value = Math.random() * 0.8;

          modelRef.current.internalModel.coreModel.setParamFloat(
            "PARAM_MOUTH_OPEN_Y",
            value
          );
        } catch {
          // ignore Live2D parameter errors
        }
      }, 120);
    }

    return () => clearInterval(interval);
  }, [isSpeaking]);

  return <div className="live2d-box" ref={containerRef}></div>;
}

export default Live2DAvatar;
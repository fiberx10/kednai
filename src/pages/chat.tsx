import ChatBackImage from "@/assets/chat_back.jpg";
import Image from "next/image";
import { useState } from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { RiVoiceprintLine } from "react-icons/ri";
import { BsStopFill } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";

import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";

const Chat = () => {
  const [words, setWords] = useState("");
  const [chatButtonState, setChatButtonState] = useState("inherit");
  const [chatButtonEffect, setChatButtonEffect] = useState("active");
  const [fetching, setFetching] = useState(false);

  const [value, setValue] = useState("");
  const { listen, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      setValue(result);
    },
  });

  const { speak } = useSpeechSynthesis();

  const startRecording = () => {
    listen({ continuous: true });
    setChatButtonState("recording");
  };

  const stopRecording = () => {
    stop();
    setChatButtonState("fetching");
    setTimeout(() => {
      speak({ text: value });
      setChatButtonState("inherit");
    }, 2000);
  };

  // useEffect(() => {
  //   console.log("transcript", transcript);
  // }, [transcript]);

  return (
    <div className=" grid place-content-center bg-cover w-screen h-screen">
      <div>
        <p> {value} </p>
      </div>
      {fetching ? (
        <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-50 z-50 grid place-content-center">
          <div className="bg-white p-3 rounded-xl">
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            </div>
            <div className="mt-3">
              <div className="w-10 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-20 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        <Image alt="" src={ChatBackImage} className="w-[300px] h-[300px]" />
      )}
      <div className="fixed bottom-0 h-64 w-full grid place-content-center ">
        {chatButtonState === "inherit" && (
          <button
            onClick={() => startRecording()}
            className="bg-blue-500 p-3 rounded-xl font-bold text-white"
          >
            <MdOutlineSettingsVoice className="inline-block text-2xl mr-2" />
            Talk !!
          </button>
        )}

        {chatButtonState === "recording" && (
          <div className="flex space-x-3">
            <button className="bg-green-500 p-3 rounded-xl font-bold text-white">
              <RiVoiceprintLine className="inline-block text-2xl mr-2" />
            </button>
            <button
              onClick={() => stopRecording()}
              className="bg-blue-600 p-3 rounded-xl font-bold text-white"
            >
              <BsStopFill className="inline-block text-2xl mr-2" />
              finish recording
            </button>
          </div>
        )}

        {chatButtonState === "fetching" && (
          <div className="flex space-x-3">
            <button className="bg-green-500 p-3 rounded-xl font-bold text-white">
              <TfiReload className="inline-block text-2xl mr-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
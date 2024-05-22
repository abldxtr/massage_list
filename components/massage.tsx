"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import classNames from "classnames";
// import { v4 as uuidv4 } from "uuid"; // for unique IDs

export default function MessageList() {
  function generateRandomString() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }

  function searchObject3(obj: any, searchValue: any) {
    return Object.entries(obj).find(([key, value]) => value === searchValue);
  }

  //   const addMessage = () => {
  //     const newMessage = {
  //       id: generateRandomString(),
  //       text: generateRandomString(),
  //     };
  //     setMessageList(() => [...messages, newMessage]);
  //   };

  //   const removeMessages = useCallback(() => {
  //     setMessageList((prevList) =>
  //       prevList.filter((message) => !highlight.includes(message.id)),
  //     );
  //   }, [highlight]);

  //   const toggleHighlight = useCallback((messageID) => {
  //     setHighlight((prevHighlight) => ({
  //       ...prevHighlight,
  //       [messageID]: !prevHighlight[messageID], // Toggle highlight for specific ID
  //     }));
  //   }, []);
  //   type massege = string[];
  //   type msg = massege[];
  type mmm = {
    id: string;
    text: string;
  };
  //   const [messages, setMessageList] = useState<mmm[]>([]);
  //   const [highlight, setHighlight] = useState({}); // Object for highlighted message IDs

  const [highlight, sethighlight] = useState<string[]>([]);

  let [txt, settxt] = useState<mmm[]>([]);
  var addtxt: string[] = ["aaaaaaa", "bbbbbbb", "cccc", "ddddd"];
  var addnum: number[] = [121, 2332, 3453, 466654];
  //   let [findnum, setfindnum] = useState<number>(0);

  // var m : string = []
  function add(): any {
    // setfindnum((perv) => (perv > addnum.length - 1 ? perv - 1 : perv + 1));
    var m: mmm = {
      id: generateRandomString(),
      text: generateRandomString(),
    };
    // if (m.id === undefined) {
    //   console.log(m, txt);
    // }
    // console.log(m, txt);
    settxt([...txt, m]);
  }

  function remove(): any {
    if (highlight.length === 0) {
      return;
    }
    let filt = txt.filter((item) => !highlight.includes(item.id));
    // console.log("filt", filt);
    settxt(filt);

    sethighlight([]);
  }
  function removeall() {
    settxt([]);
  }
  var arr: number[] = [];
  function sett(vorody: string): any {
    if (highlight.includes(vorody)) {
      sethighlight(highlight.filter((i) => i !== vorody));
    } else {
      sethighlight([...highlight, vorody]);
    }
  }

  return (
    <motion.div className="flex min-h-screen w-full items-center justify-center bg-gray-400   ">
      <motion.div className="w-[420px] h-[420px]">
        <div className="bg-white sm:rounded-xl     ">
          <div className="flex justify-between items-center border-b-zink-100 border-b-[1px] sm:p-4 p-2 ">
            <button
              className="text-gray-500 hover:text-black px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300  transition  "
              onClick={add}
            >
              Add
            </button>
            <div className="flex md:gap-4 items-center gap-2 ">
              <button
                className="text-green-800 px-2 py-1 hover:text-green-900 bg-green-100 hover:bg-green-200 rounded-xl transition  "
                onClick={() => {
                  remove();
                }}
              >
                Archive
              </button>
              <button
                className="text-red-400 px-2 py-1 hover:text-red-500 transition  "
                onClick={() => {
                  removeall();
                }}
              >
                remove all
              </button>
            </div>
          </div>
          <motion.div
            className={classNames(
              "  max-h-[400px] my-4  py-2  ",
              // "scrollbar",
              txt.length < 4 && "overflow-hidden",

              txt.length > 4 &&
                "scrollbar-thumb-gray-900 overflow-y-scroll  scrollbar-corner-rounded-full scrollbar-track-gray-100 scrollbar-thumb-rounded-8 scrollbar-track-rounded-8 scrollbar-thin",
            )}
          >
            {/*  */}
            <motion.ul className="mx-2 rounded-medium">
              <AnimatePresence>
                {[...txt].reverse().map((message, index) => {
                  return (
                    <motion.li
                      key={message.id}
                      className=""
                      onClick={() => sett(message.id)}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{
                        type: "spring",
                        duration: 0.6,
                        bounce: 0.4,
                        opacity: { delay: 0.1 },
                        height: { delay: 0.1 },
                      }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className=" py-0.5 transition mr-4 ">
                        <motion.button
                          key={index}
                          className={classNames(
                            "flex flex-col w-full p-4 rounded-md m-1 transition duration-300 ",
                            highlight.includes(message.id)
                              ? "bg-blue-300 hover:bg-blue-400"
                              : "bg-gray-200 hover:bg-gray-300",
                          )}
                          initial={{}}
                          animate={{ height: "auto" }}
                          // transition={{
                          //   type: "spring",
                          //   duration: 0.6,
                          //   bounce: 0.1,
                          //   // opacity: { delay: 0.3 },
                          // }}
                          transition={{
                            type: "spring",
                            duration: 0.6,
                            bounce: 0.3,
                            // opacity: { delay: 0.1 },
                          }}
                          // exit={{ height: 0 }}
                        >
                          <p className="font-medium transiton ">
                            {message.id}{" "}
                          </p>
                          <span className="text-sm transition">
                            {message.text}{" "}
                          </span>
                        </motion.button>
                      </div>
                    </motion.li>
                  );
                })}
                {txt.length === 0 && (
                  <p className="flex w-full items-center justify-center text-lg py-2">
                    No massage...
                  </p>
                )}
              </AnimatePresence>
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

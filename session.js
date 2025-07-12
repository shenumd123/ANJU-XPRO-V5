//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBkSDVXMTdtT2dJc0RObGxFK0dsSUNtVEVoUVRHT2pxOXhjUHRsZ1FHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjNLRVZQenVoeTMxc2xZSHJ2YjhnVmlLdWFzUEtsTjJhazhnQ0t6NGtoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTU1SeWJ1VWdVL1p2QnN4Sm1lbHZ0dnBLKzlydHdiRzgrUDhqVTV3Um1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaVFowU3N2WlV5dWpaaDRtVGRFdVc0TncwcXdvVUZtT0o4MDBZSWprckZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKRUZvdlEyaHh0cTdKMHJuYnU3bm1JVFpUL0hoV09RUWVpbzhKU0lVM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBXeFpNRWdML2NQQkJtRHdrMkU3S29lSENJQXVOZHN1d2dLZFZFOUpKeDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUU2VSthVVl2NnRvS1ZXZEZnNEU0K2gyZjcyalRobzE4Z1RCUkpKbTRHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWdXcUhCUlNWaHZpYUUyMWN1dE90MTRzVFlqVmdkUVd4eFNraXBUUUxWZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo3NTZpUS9JQ2s4MldRK1AxUkJuYnM2dTdSR2FBV01GejlwL1RUMmRVNm1KcTNacmxWaWhkbHUzeW1QV3N6T25FRk5WeWEvTnFtZEpwMXhOM1JDUkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJVNk5PQTJ6cDlOL2N5TGIrNzNtQUZrckxEWE9QVXZJREw0enJNRUprd0NzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyU1lNbmZDZVI4eVp6NEZjTVlpRURBIiwicGhvbmVJZCI6ImE3NjczYzIxLTg2MDAtNDY2Yy04MTJlLTY2ODZjODcyMTQ5NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpb200ZlEzclk2cTgvMmNDeVBwNVVydVpOWFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFF2SUZRbTNzVG82RDN1dUgrazdaWHROc2VrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldYQlhKSzNGIiwibWUiOnsiaWQiOiI5NDcyMzIwNTgxMjo3OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1NzEzNjIyNzE2ODQyODo3OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PSTVmd0RFT1c1eU1NR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InY3VXljNlpuWVYyczcxMnNoR0xBQzJjVnpPVHNPSGQzOVYveVljd0FHQWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNreGxjTVdaRzc2bHhwQ0Z5Ynpad083NFpEd3UzQVNKRENUL1RlTnVrUXg3TllzekN4SmY1ak5RbDZ2RXRWdGpwWlBiMUF5M0tWVEgrZFMxZ25ieUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmbW5ublR0U2JGY3djTFMyUjRKU2ZlTk1LU0FwWHhNVG0vTCtiYTRNZFVHczlRY05oOHhYQWduTVRLYkoyUkk5YVlWYWc0MUdnQng3NUt0Y0hnVEpEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIzMjA1ODEyOjc5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIrMU1uT21aMkZkck85ZHJJUml3QXRuRmN6azdEaDNkL1ZmOG1ITUFCZ0gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjMwODk3OCwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94723205812",
  PASSWORD: 
    process.env.PASSWORD || "Shehara@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "tEiKQDmYdQA6aUBaRsiHVZFIGJtvpk0WlQ5p",
  USERNAME: "shenumd123",
  REPO_NAME: "ANJU-XPRO-V5",
};

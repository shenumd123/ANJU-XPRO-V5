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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE92RmdTM2ZiSzVQRkxCYUFGQ1RiQmZkMC94NCtnWE1CZ3U0bkJOUndIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2NHOGs3Y3lmQW1TdXY2OUlzcnZCOHZLNWJuUFArV2ZYSTJRa0hPeUR3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR05OT3pWWXRxODhyajVsL3g5VUZqeEZwWjRTN0xhQzZhWG5uOEIwSjBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxY2s0dkU5U0tGZ3NlbDJTK2pnKzBzS29IZTVoNDBHdEdrdVVkTFFhVzJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGWmlOZlBpR1JoQXVPTE85Q25idWg2Q25QS0R3NEtHaVVYWlNlVzluR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxCZjhROXEraktLWWVXRWloMkJoa0xXdE5vODhkbFNHbDBnT094QkN4MG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VaOTRJc1E0WXNFalZoWGlwbGl3Sm9HeGFxdVZDclJVaFI3QkIyT0IwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXBpQ2tVN3FBUThlZUNObitJRTNCNFFtK1hMUXRmSnhMbDJFdHdSREdTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIxQzQ2MUhERG1JU1VvY1ZhYUgxMzdoRCtwZ1dZc0dlUFZGQ0YwQVNmRlJvY2tyUkFUcVI2ZEd5NG1jUXBlSDhMTFFPM2pPMjVSSys5dWQ1RVlLL2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6ImpVZklJWmxvRHB5MmVSYzE3a0NnRXlNNHNzVFQxYnV0OExyNTYzUzE2aHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNudEstMnplUnhxZzVPcG96WHNJY3ciLCJwaG9uZUlkIjoiY2VlMDkyNDktMDYzOC00YzRhLTg2ODktOTM4ODE2NGY4YjBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM3UnlyQUJzUXdnOUVaQWUxZitRZ3crR3NRMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUVNyM2laYjFGMEp1UEhpTUlyOWVyclJNcDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjdIUkoyRTkiLCJtZSI6eyJpZCI6Ijk0NzcwODkzNzk0Ojk4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIgg8J2QgPCdkIwg8J2QkfCdkITwnZCA8J2QiyBcblxuQsy2XG5MzLZcbkHMtlxuQ8y2XG5LzLZcblxu4oKpw5jisaDigqMiLCJsaWQiOiIxMTQzOTY5OTA4MjQ1NjA6OThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbU00T2NCRU1PcnBNTUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvcllWOFVxbDdoZzNzVHhVTy9VLzhsL0dQR2gvbGptMTJ1TXhrcW1uSFFrPSIsImFjY291bnRTaWduYXR1cmUiOiJOTzhJOUtqT0V2by83VTEwZENmNDBKbzF5ZHR5aXEyMEVJYjArL2JKWm9FazBhQk0wT2M0NFpjZFhqSEJxU2p5TllKeVM4TjlXUW8xV20vK2ZScExEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNUZ0ZkhndnBjSHI5SUJFWGV1SXdhWE1EaURrRGNzcmg2R3dXZmxCMllpY1lXQUJKMFpDTGlld0ZYMlE4c2VIL0ZIU201Vm52dEpBS29QenhlK3VJalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MDg5Mzc5NDo5OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhSzJGZkZLcGU0WU43RThWRHYxUC9KZnhqeG9mNVk1dGRyak1aS3BweDBKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE3MTczMjgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
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

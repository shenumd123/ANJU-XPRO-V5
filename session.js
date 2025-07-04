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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUE2L1Q0dWZHOGtJUkdMbEJsNk82R25wNHMxdVp4Q0U3RUphcFdDLzhIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnVBVlJiSWFkalZvdTZzdzVVVkV6RHFUemJEQ05WUmhtb210Smg3Y05raz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQVE5eU80RXlVbjRNbm9wbjhPQTh5NFJLKy9NaExMOEJLZ0RNVzRYY1ZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoL25PejY5NCtmVHMxREoxOXBEUEpXYllCTjRwczM5UVFmOWFUODRTMGxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGSjlIcDd4TFhmV01QOHFOd2JyREF4ekpjaFQ1eWdUazllTk9NbmpKbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF5ZDJHUDdWeHdWaWJ1WVd6VytlRWFEdm9acUR0NXU1TDY3UGpIM2lnMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09za0kzeTZDbFV6bUxaQ0xHaEYzaHJRS05vMTV6Z1gvaXhLMWlTcXgxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnArWFdyYVpRUnR3cWo3MUsraG9rUlZjaUJJK1kvcndldFBDRWV5bTBBdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZmSmRlQk9wY3hXT203V1RkVEdJcEVxZy9reGFjME5tSlZXU2xwVHlSelBQUGt1V2gvN3B4S0hxaFN6d1JuVmZISitwM2FLcnVTTStIT2RST3BCZmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6ImJUaUJ1QkE2azJXN0daVlI4eUhqZHlBWDI5U1BPT0h2SnZRRWZTQ09EZG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJ5ODN1WUJfVGpPOUoxeHdQSWo1NmciLCJwaG9uZUlkIjoiMDJiYWEzM2QtODc5Ni00ZWU2LTg4NDEtZTdmYjUyMWY2YzI2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdqUDY5QVpVN2ZpTklLUW9ZMzdhQjhZUWJlTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZDNNS2txMmdYck1xRTQvbERDZldLOE9EUEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzlHQzg3SkIiLCJtZSI6eyJpZCI6Ijk0NzIzMjA1ODEyOjQ0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU3MTM2MjI3MTY4NDI4OjQ0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJza3U4SEVPZi9uOE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK1EwQWtrN09ZdjJreXVZS1hWSmJua29zZGhtcXJ3N2pReFJseVd3S05nQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMlcrazI3b2tFTktRWDNSRnpKQSs4Q3FrWEdWTm9UckN0eEJsc210M3dYZkUrT09jVWlCWVJrK212NXdqallrMWtzdmorUGRwa2FWWnYwMTRad0RPQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjdXdjN5eWJOelRrV2w4YnlmZ3JRWmdSWEt4QTU2SGg4SWV1V1kwVUtTdklRc0ZpUWhQZFJ6ZUFDaUZ6VXJPTEluQ0RkM0oyNnJERzJMTExrc3NmNWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMyMDU4MTI6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmtOQUpKT3ptTDlwTXJtQ2wxU1c1NUtMSFlacXE4TzQwTVVaY2xzQ2pZQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNjQ2MTk1LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1QeiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94723205812",
  PASSWORD: 
    process.env.PASSWORD || "Shehara@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "NFDOVts2peQlDNM36tToIuzn07AOrP3bDKrw",
  USERNAME: "nuwansansala2006",
  REPO_NAME: "ANJU-XPRO-V5",
};

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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0t6VWZzRHZ1NHY1MUZ1R0M3MUdwZnc1bi8wN0pGZElYd1B2NGh0Q1dGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3MyYys4dEpEZkVuMHRSeVpFOENvNXV5UGM0MUhmTlBTajE4R2pQN2lHbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSSsxK2QyVnRTZXdpVDdEQVZCOHI2N0FJakQ2NzM5bUNETHhsMHVvZUhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZTF3RWt2T1ZxQ0h3bmJRb3lQT2d2YzlWS1JMRXlqdnc4eWxNL2ZwcERzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGZjRzTXBDRVZGUGhXeVd5OW5tTkFNNnVSU3ovSExTM3VwaHlNMkh0SEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc1SFN3blNYUnZUNEY3TkZRV0g4MUFGZXVNZjBaS2JRd1JVN3JWbUZxME09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xodlc5ckZacWJEUGxpR2xhVmhyN0hVdFY4MmtndFNsSjMvSG9nTUUyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG9mZCt4SmR6Q1FlZTlmbUR3M01YSlJWOGxtSWpxdERJNzhCYk95THozYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdJblZUUXdJOGNoNm5TVExLQTA4bkRLb2crallrRUMxYUpJZjNRT25jTEtCRjF0L1o1VHAwc2ZZMENhVUo1RElsQUJURVFrR3NnRW9CTkZPWXU2MkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IlJwZzJtZEMvbjN2bHBpdnN5eXlwRzJlZlR3SzhDT29qQWZEc084NU1mYXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZTOTBBbk1tVDRLbElnUFVUeGtVUmciLCJwaG9uZUlkIjoiNjY0YjA3YmUtZjc4Yi00ZjgxLWEzODEtN2FiZmRiMjE5ZGE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZsK1h6VkNTZmVFTXJ5cG04aGEyeEZyZzhLOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlb00yYUZ0L0N4UEE3RUxtckVhY0VhalNwdWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0syN1JRRVoiLCJtZSI6eyJpZCI6Ijk0NzIzMjA1ODEyOjUxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU3MTM2MjI3MTY4NDI4OjUxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTJkdS9nQkVLdlRxc01HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMituQ1pGZHQ0OGJpS1R6dnN4RW44Smg1MDQ0M1QwSXNtS0ZpTGZSckxVND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYVlVUmFQcWRsWU1RS2xNM3B0R295ZUdCb1lsdEdicmlNWHlSdkEvUHllVVdvbG9tRzhvMXhFaHJiZVU4VGlSMUFjNitaMlhWUVhmeWx1L0Zuc3hnQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ii8rY01BZVR6cFRhOW5EbUNuMmpFK2UwYklSR2FhUzlZSDFsdVNNaTUxOWZkaVJWcnM4aDNaUUpPcE1BZGJRRXZhRWQ5T3RsUFdYcFJ3Q0lCcDRZQUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMyMDU4MTI6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHZwd21SWGJlUEc0aWs4NzdNUkovQ1llZE9PTjA5Q0xKaWhZaTMwYXkxTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxODIwNzI5LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8yRiJ9",
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

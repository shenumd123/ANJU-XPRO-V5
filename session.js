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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0loYjZLQzZRUGtnejFFWkFCUmI5bWFudEpVei9zTHNOa204dVpYcG4yOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYS9WUUwzNENvN0Yzb1R3NkZIS3BEMm9wYzU4NnhsWjlyUzhxa2tiSHJYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXS3ZYTDcrcU9tZWp6TjIrSGdpd28xWEtGVWJqelBUcXB2UnVyQmVhWkgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQW9yUjVxWERzSkdYc2RuZGlqTXVQNTBGcWhhN2NQRDdzRVg4d3RjYnlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJaXU3UFBYUHVGbUtWNXh2V1hBMlRKZUJsaXQ5eGZqNFU1cWhZcXFUV3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZzOFMzeW5SbkZKdU1xWTQvOTNVak9nbUlhVXBLbzVMRXhWU2s3bWdQVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05HNU5xdFQxZW1nVXZiVnJYU3NLaGV0ZmlSdDFGdDJNd3p3Q0NudTYzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaC9vcURxc1B1eGxIUUpXZHovRW0rNUpWQnJ3RUlNSHQ5Tk5udXUvN3JGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZCKzBqSkFQaUZrQTBjQzlVamRwZXdMWFgrNDVzQ1hteFNsWHlZdnlkVDROcnFkM2txRE5aRkYyclZWMkZuZjBEekpkYkdCeldoN2RZUVZpSkRSempBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6ImRzWGhHNnZUYWF4bk5MMWF4UVVtRzl2NDltbnpvTGRSeS9ZRzFQRkVjdlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il8tZlZ2TlJVUy1HZEpWTnhFUldHZFEiLCJwaG9uZUlkIjoiZDkxNmI0Y2MtZTQzNS00ZTM2LWE1ODQtOTY5NmFmNzZkMmQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZvL0h5VTBxL2dwcmgyY3NPY2I0dTU4TTIyST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZYkJ6bmxTdC9PN3dPaXR3cmREY1YyVEVkdjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVlZQNURQUUMiLCJtZSI6eyJpZCI6Ijk0NzIzMjA1ODEyOjY0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU3MTM2MjI3MTY4NDI4OjY0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk9JNWZ3REVOZnh1TU1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidjdVeWM2Wm5ZVjJzNzEyc2hHTEFDMmNWek9Uc09IZDM5Vi95WWN3QUdBYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTEo3RHZUODNRbFFFa3d1K214RFpWbVZrcCtLVllBdE43ajliMlBkOVhYaFlnY09rZENIWDIvb0NNcHRvWnhTUzRtN1VoU2Z0NGRpMVN3N3lYVi9mQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjBIM1RnUkUwTlJQR1c5OTBmMk52Q2dUd001N0lrODUwejBVMTREUFJWMmJtZ2REZ2QxQXF4RnFvM0hlU3d6VlkxdjhCYlZrbnNXYUE3WmIxMzhyd2lBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMyMDU4MTI6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYisxTW5PbVoyRmRyTzlkcklSaXdBdG5GY3prN0RoM2QvVmY4bUhNQUJnSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMDUzOTg4LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx2VCJ9",
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

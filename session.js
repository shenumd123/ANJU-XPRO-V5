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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURTTFZOMVV0Zks3cnBPVE5BOE9kNjJjM1ZLc0x1Wk9PRHNrZzh2NmRIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWJLT2U5Y3Z6Q1VmRkJ2RU0zNWdDcUlsdXFSK081SEFwUXZ5MHE5alozRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQnpPdGcyNE9jdDlKc3JaOThkZ0xlNU9hejJpeldHNEFCUm5CQS9EbDFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZHBRcEhFY01lM1NJNm5hMmErZEp6cWxyVnBuSkdlM3lqSFJvQ0M2a1dVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMVWVlSkJ0V3RrNzdxNjhXVjNBWXphUFRNVW0wdEhyV2MrS1RTVElQM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU5WHExTWlvZ3RYVjhuQnhsZFhFOHVGQlBQQW9tbHNNcG0vNjI5M2pweUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9OeFVGcHpXS2FqZ2VmcXpkR2huSHQ5bUEzTjVpdHVIckd5b3VyNU5Iaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGRGS2NZdy85RHNib1FiSmt6S0ZEK3VDV0lxYVZHWm9zbUNSR0prdmtIaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFrRWZMRTcyTmlqSFQ1UGRnUnpHRzUxSlREQmJwZXh3OVplUUJkY1RxcUpUNVIyMGdEUWZEbTdmbzhrb1lkNHh2cENURjBOYTcxclhRODZMT3Arb0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6InpBRDF2anVkVHRNZ1RvcU9qSFgwQUdnZ21VQWdyMnF5WHFUcTFqM2NiSTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhUR09EM2RsUnlXeWhTSEpNUk0tNGciLCJwaG9uZUlkIjoiNTJiZDdkY2YtMTA2Mi00NjJiLWIyNzAtYTRmNGIzNTRkOWMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJQbk9qQUlNZHQzNks4NWxtaGFsY05tRkdmTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3S0owaGhrY3N6OFdiRTdlRXFkTDZvMSs1WUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFdFSzJGWlYiLCJtZSI6eyJpZCI6Ijk0NzIzMjA1ODEyOjc3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU3MTM2MjI3MTY4NDI4Ojc3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk9JNWZ3REVLckx3OE1HR0E0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidjdVeWM2Wm5ZVjJzNzEyc2hHTEFDMmNWek9Uc09IZDM5Vi95WWN3QUdBYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWtvenJjOUNhSERZcWE0YitqenNiaUl4VmdqYXhtY1ZDTVBycFJjTEU3WlFLaEorN1FFSWtXL0VGbHJxZHdCSzBjT25tTzBjRUZSZ2JZS0Z5MEppQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZTZVViL2hkODhzOHZqUjUxMGZEckxEQkdjSkxBNEhhYnp5QUM4Uk40Y1YrMUdLbSthL3hnd3V2ZWlZd3pKbWllcExtY2RGakhuS3VxeitvSFY4RkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMyMDU4MTI6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYisxTW5PbVoyRmRyTzlkcklSaXdBdG5GY3prN0RoM2QvVmY4bUhNQUJnSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMjI5MzAyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx2VCJ9",
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

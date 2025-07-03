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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEU5bUc4V1Y0bS9hRjFQZDFuenZKNkt1dmUraTJ4R0dhL2lpRTJVdk9Gdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzdtdnZNTHRDd0tJNWowR1NwZmxTS29SZXJXUnVUMUpBYkJ5b2JFYXN3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTSs0a3hJb3FMQUhqWFdsM09GY2pHSzZIZ1pDdzdmR1kvbTNXNTRHUUVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0N01jL1dMZUhpbVNGWGw5QzNONVVmUWFCOUozNy9JbkExV0t2TVd1K1R3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHN2hoM2QreHdiak5yTlllNTRTdHFUa0ZockhpQzc5MnAzWjMrbEN3blE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZzd1RITXZxcSs4M082a2EzNzluNzZFVHRaUDdPakhmVFMrejNMV2tDMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdWWm9vVzdLY1R6dENTa3J2ZGROQjcrL2JGUVhVc2RTaS90cHY1YmxGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiek1QVGVHTW1tRmtEdTljdXFXMnJ2ZmJtY1B5dFFEVnZQUUhwODR2T0ZuOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBoK2NBS0xpOU1pcUQwUGxRaFdsL1ZIeDdkWEx2K3MvOGZnazI3Mm9GcnJnT0JDNFplRkNYR2tDT2tHRjBwa0EwUVpwR21CYnNIYjRxMW9tRlZpYkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IlUvZlNOK2lLdFduWjJIVFNlZzhISjVDOThMT2cvUzNQTXU2aDFob1NRNVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il8wOHNjWkpwUWhhWnJya3FxcnJzZ3ciLCJwaG9uZUlkIjoiOWUzNDVkNzYtYWQ3OS00YzM0LThmMDMtOTFmMWYyZDM1NGY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhINzBWeHF3K3M2TGNUU0dGZEE2cEZTZTcvUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxYktQS3hVK2dLK0ZMZUZRb043amlueno3N009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0ZHTUhGSjUiLCJtZSI6eyJpZCI6Ijk0NzAxNjIwMTkyOjU4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGfmuC8kuC8u/Cdl6bwnZeo8J2Xl/Cdl5TwnZel8J2XlCDwnZej8J2XpfCdl5TwnZeX8J2XmPCdl5jwnZej4Ly64LyS4Z+aIiwibGlkIjoiMTkwMzE0NzQ4ODgzMDY5OjU4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTStudXZRQ0VOMkltY01HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid1NudWhOWnVaRDlpV3A4bG5Hd29obXVFVzBiSXlHMEVjdzZiR0FreTJoWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoickZsdnRSWlpjWE5odUkwQ0FQbnFoNU00YWkyTVBISmtnYlUwZWZPOGloN3VYTFdYenRKWisra2Y2V0tCVnV6MFk0d0IvdHdMc00wQUppWlpDZGtmQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Iml0ek9lMzZPc3U0bEhaMDZ0NlUxSkZyc1FNNm5QbW1SVDdBdUhyRVhxWVpTUzA1U0V2U1BiUVErZklRZkJjemlaZjhFRE5lVldUMzQzL2dhY2NOTUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDE2MjAxOTI6NThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0VwN29UV2JtUS9ZbHFmSlp4c0tJWnJoRnRHeU1odEJITU9teGdKTXRvVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNTMyNjUwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUs5dCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

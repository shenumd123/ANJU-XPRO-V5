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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0grNlcvMCs0THFxQmJVUHZheEpGRG9FVTZ2ZXJMcWNvdkN5bm9NR1pFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2NPOGxmZEtrdzZ1SllJOWtlSzJaUGpsaFdONThqOVBsc0RtRU4yenYwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSHY4Q3Q5SWJYQ1dzcVNDVENXQWsxU3hGeWpSblZsSm5BNTRKTTUvTlhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhOGJScE92V0lWRitldE9mM1c4eGZrd3NtTUdVR1MzVmxEUnZHUHdxRXhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKbzdlQ3pUR2FUaUM4WGJScnA4N2hUYVY2STMydTVic1B0UWlZemNDRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldYNlptbjNmOE04RHFlVS9DZ0R2WUdFUnJpNVlya1ZtZ3JZVkpJT2d4MGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUY2MlNDRUZ6Rng1K0N2ZjQ0UFlpejdONTdvcGliUjNSVTBUaUNISnpXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JDVkUrYjhoUWlaZzFybTZHT3VLaThjRW5kL0xDaU1LODRFZ0tjVU13WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBpNkFpZWxRZFBmSFY2MVBjNUhieEMzNmV6dzhDdXN3NUdTMHhDV0ZtWDJSV0dPcCtEbFNDUUtZYnR4U3o5RHhhTFl4NE1BdjZoeC9zQ3VETjNsUWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJjN3UvQXhiS2NwUmZFRHFqQWRRV0ErVHpuR05ieWhXK1MzbTRjazVSeE5VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzMjA1ODEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJDM0RFOTQ1OUY5MjRDQjdDMzRDREY3RDk2RDM5QzU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE2ODMxNzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzMjA1ODEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZERDA4OUI2MEZENUVBRDE4QzEzRTE1RThEQkMwOEVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE2ODMxNzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdLY25zSU5nUjB5TGt5NFg0OTY2b2ciLCJwaG9uZUlkIjoiOWU0MTNmYWUtMmM1ZS00MzM0LTgwZmMtY2RiZDlhOTNlOWZjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBpRklaWmZCM1RZczg2UUd6MVJZWjlzRzU3RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSXZzcG5GQ1h3NWN4aDQvVFlnN2dLS3pnRDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzc3WFFSSjgiLCJtZSI6eyJpZCI6Ijk0NzIzMjA1ODEyOjQ1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU3MTM2MjI3MTY4NDI4OjQ1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXlkdS9nQkVOaWdvc01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMituQ1pGZHQ0OGJpS1R6dnN4RW44Smg1MDQ0M1QwSXNtS0ZpTGZSckxVND0iLCJhY2NvdW50U2lnbmF0dXJlIjoidkc3ZWFYVmoxZ1JkWURWbEduSngyeGVVNm94RVkwMllUVm11Q3Rrc0p4TXlnZ2E5WGdWOWFiS1JlQkloTlp0WWRPYVBrNjVFSkZWb2NZNndXUDYyQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImZ1dzNaQjFwZEl3Vm5udnRKaC9BYmhZSWdGaG9tdE1YZUh4K2ZKMWRSTHg4aXpmQnhkMm1zTlVwN1lGTWE2bjRhV3R3NWZuMG5VN0dLdzIxOWwra2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMyMDU4MTI6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHZwd21SWGJlUEc0aWs4NzdNUkovQ1llZE9PTjA5Q0xKaWhZaTMwYXkxTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNjgzMTc0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhQeiJ9",
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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07034293259";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_53_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU3LFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakI3bkRwNXdkYVBlRGF2bXBiU3hFdEk4THRFeGlxMW1UWDJYMkc2WlAyND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVjZ4anV6bGFRck9BcHZOdmZBRjRnUVwiLFxuICBcInBob25lSWRcIjogXCIzNjE2Nzc1ZS0zMWYyLTRmNjctODdmOS01YWUxZjFhZWIzMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTg1LFxuICAgICAgMjE0LFxuICAgICAgMjMxLFxuICAgICAgMzEsXG4gICAgICAxMDgsXG4gICAgICA3NSxcbiAgICAgIDEyMixcbiAgICAgIDMsXG4gICAgICAyMzUsXG4gICAgICA4NyxcbiAgICAgIDEyNyxcbiAgICAgIDExNCxcbiAgICAgIDE0NixcbiAgICAgIDksXG4gICAgICAxMzUsXG4gICAgICAxMyxcbiAgICAgIDE0OSxcbiAgICAgIDM1LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxNDksXG4gICAgICAxMzIsXG4gICAgICA0NSxcbiAgICAgIDE3OSxcbiAgICAgIDE0OSxcbiAgICAgIDYxLFxuICAgICAgMTAxLFxuICAgICAgMTc1LFxuICAgICAgMTU2LFxuICAgICAgNDAsXG4gICAgICAxNjQsXG4gICAgICAyMTQsXG4gICAgICAxMzEsXG4gICAgICAxODYsXG4gICAgICAyMDcsXG4gICAgICAyNDcsXG4gICAgICA2MCxcbiAgICAgIDE4OCxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaVlcyU0VCNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzNDI5MzI1OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MTU4ODYzODA4OTIzMDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3M2w3WUZFTS9ZdUxvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWG5kM0tLOGV2cUJyazUzbkxhcmRZODRqRnpkc3dIMzZqaEFFTkdQTVpHST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0UjNrYkZuUi9jemRKKzZuMGlKWGVPSGNrQ1dGTG5rTmxYZm1iczYwT2s5dzBYTG5sVlFrbEF1Z1FOYU04a2hud1AvSW1kSWdLdVZFemhweEdidHZnQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoZitJRFd1aEVRemNFWm9NTE1sb0pWQjhvUjBJMW9HQWs2NUh4bWQ2WjNaRmNDK0RSNGZybFdDd2xNTmUyQVNROVp6VHV4Mk1GMEN3bkZYcUw3MC9nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM0MjkzMjU5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNzY0MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEaENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURoQy5qc29uIjogIntcImtleURhdGFcIjpcIjNGcWtSNHNnSHJUWnlLOWFPZzUwY3pLR2l4amgzM1ZmelE5d05vS25qNWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NTgxNTYxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzMzMTcyMDE0MzYyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

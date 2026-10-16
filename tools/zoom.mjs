import puppeteer from "puppeteer-core";
const [file, out, x, y, w, h, wait="3600"] = process.argv.slice(2);
const b = await puppeteer.launch({executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",headless:true,args:["--allow-file-access-from-files"]});
const p = await b.newPage(); await p.setViewport({width:1440,height:900,deviceScaleFactor:2});
await p.goto("file://"+file,{waitUntil:"networkidle0"}); await new Promise(r=>setTimeout(r,Number(wait)));
await p.screenshot({path:out,clip:{x:+x,y:+y,width:+w,height:+h}}); await b.close();

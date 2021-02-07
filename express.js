const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const { config } = require('./src/config');
const router = express.Router();
const app = express();
const port = config.express.port;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const clipboardy = require('clipboardy');
const robotJS = require('robotjs');

router.post('/copyPasta', (request, response) => {
  const isSomeWeirdOS = process.platform === "darwin";

  // copy text to clipboard
  clipboardy.writeSync(request.body.text);

  // paste code wherever your cursor is
  switch(request.body.text) {
    case('undo'):
      robotJS.keyTap('z','control')
      break;
    case('redo'):
      robotJS.keyTap('z',['control','shift'])
      break;
    case('shift right'):
      robotJS.keyTap('right','shift')
      break
    case('shift left'):
      robotJS.keyTap('left','shift')
      break
    case('step right'):
      for(var i = 0;i<5;i++){
        robotJS.keyTap('right','shift')
      }
      break
    case ('step left'):
      for(var i = 0;i<5;i++){
        robotJS.keyTap('left','shift')
      }
      break
    case ('step down'):
      robotJS.keyTap('down','shift')
      break
    case ('step up'):
      robotJS.keyTap('up','shift')
      break
    case ('next line'):
      robotJS.keyTap('enter')
      break;
    case('up'):
      robotJS.keyTap('up')
      break
    case('down'):
      robotJS.keyTap('down')
      break
    case('right'):
      robotJS.keyTap('right') 
      break
    case('left'):
      robotJS.keyTap('left')
      break
    case('save'):
      robotJS.keyTap('s','control')
      break
    case('saving'):
      robotJS.keyTap('s',['control','shift'])
      break
    case('backspace'):
      robotJS.keyTap('backspace')
      break
    case('tab'):
      robotJS.keyTap('tab')
      break
    case('control tab'):
      robotJS.keyTap('tab','control')
      break
    case('alt tab'):
      robotJS.keyTap('tab','alt')
      break
    case('alt f4'):
      robotJS.keyTap('f4','alt')
      break
    default:
      robotJS.keyTap('v', isSomeWeirdOS ? 'command' : 'control');
  
  }
  // }
  
  

  // optional autoformat for your IDE; need to uncomment in config file
  if (config.robotjs.cleanup) {
    robotJS.keyTap(config.robotjs.cleanup.first, config.robotjs.cleanup.second);
  }

  response.status(200).end();
});

// add router in the Express app.
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

import superagent from 'superagent';
import { config } from '../config';
import * as mappings from './mappings';

export default function (addToList, language, endFunction) {
  const url = `http://localhost:${config.express.port}/copyPasta`;

  const getCallback = function (text, nameOfCommandExecuted) {
    addToList(nameOfCommandExecuted);

    superagent
      .post(url)
      .send({ text })
      .end(endFunction);
  }
  // Arabic
   if (language.locale === 'ar-SA') {
    return [
      {
        command: '(*)دالة',
        callback: (name) => getCallback(mappings.func(name?.trim() || 'bubblegum'), 'دالة'),
        commandText: mappings.func('bubblegum'),
         description: 'انشاء دالة جديدة'
       }
     ]
  }
  // Spanish
  if (language.locale === 'es-US') {
    return [
      {
        command: 'función (*)',
        callback: (name) => getCallback(mappings.func(name?.trim() || 'bubblegum'), 'función'),
        commandText: mappings.func('bubblegum'),
        description: 'función'
      },
      {
        command: 'componente (*)',
        callback: (name) => getCallback(mappings.component(name?.trim() || 'Ooo'), 'componente'),
        commandText: mappings.func('Ooo'),
        description: 'componente'
      }
    ]
  }

  // Japanese
  if (language.locale === 'ja-JP') {
    return [
      {
        command: '関数 (*)',
        callback: (name) => getCallback(mappings.func(name?.trim() || 'bubblegum'), 'kansuu'),
        commandText: mappings.func('bubblegum'),
        description: 'kansuu'
      },
      {
        command: '成分 (*)',
        callback: (name) => getCallback(mappings.component(name?.trim() || 'Ooo'), 'seibun'),
        commandText: mappings.func('Ooo'),
        description: 'seibun'
      }
    ]
  }

  // Chinese
  if (language.locale === 'zh-CN') {
    return [
      {
        command: '你',
        callback: () => getCallback('Ni', 'Ni'),
        commandText: '你',
        description: 'Ni',
        isFuzzyMatch: true
      },
      {
        command: '你好',
        callback: () => getCallback('Hello', 'Hello'),
        commandText: '你好',
        description: 'Hello',
        isFuzzyMatch: true
      }
    ]
  }

  //I love  English
  if (language.locale === 'en-US') {
    return [ 
      {
        command: 'undo',
        callback: (name) => getCallback(mappings.undo()),
        commandText: mappings.undo(),
        description: "undo wtvr shit U did"
      },
      {
        command: 'redo',
        callback: (name) => getCallback(mappings.redo()),
        commandText: mappings.redo(),
        description: "redo wtvr shit U did"
      },
      {
        command: 'shift right',
        callback: (name) => getCallback(mappings.shiftRight()),
        commandText: mappings.shiftRight(),
        description: "small shift to the right"
      },
      {
        command: 'shift left',
        callback: (name) => getCallback(mappings.shiftLeft()),
        commandText: mappings.shiftLeft(),
        description: "small shift to the right"
      },
      {
        command: 'enter',
        callback: (name) => getCallback(mappings.enter(),'enter'),
        commandText: mappings.enter(),
        description: "go to next shitty line"        
      },
      {
        command: 'select right',
        callback: (name) => getCallback(mappings.stepRight()),
        commandText: mappings.stepRight(),
        description: "shade right"        
      },
      {
        command: 'select down',
        callback: (name) => getCallback(mappings.stepDown()),
        commandText: mappings.stepDown(),
        description: "shade down"        
      },{
        command: 'select up',
        callback: (name) => getCallback(mappings.stepUp()),
        commandText: mappings.stepUp(),
        description: "shade up"        
      },{
        command: 'select left',
        callback: (name) => getCallback(mappings.stepRight()),
        commandText: mappings.stepRight(),
        description: "shade left"        
      },
      {
        command: 'backspace',
        callback: (name) => getCallback(mappings.backspace()),
        commandText: mappings.backspace(),
        description: "delete shit"        
      },
      {
        command: 'switch file',
        callback: (name) => getCallback(mappings.switchFile()),
        commandText: mappings.switchFile(),
        description: "switch current file"
      },
      {
        command: 'switch application',
        callback: (name) => getCallback(mappings.switchApp()),
        commandText: mappings.switchApp(),
        description: "switch currently working app"
      },
      {
        command: 'tab',
        callback: (name) => getCallback(mappings.tab()),
        commandText: mappings.tab(),
        description: "tab"        
      },
      {
        command: 'save',
        callback: (name) => getCallback(mappings.save()),
        commandText: mappings.save(),
        description: "saves your shitty shit"        
      },
      {
        command: 'saving',
        callback: (name) => getCallback(mappings.saveas()),
        commandText: mappings.saveas(),
        description: "saves your shitty shit with name"        
      },
      {
        command: 'right',
        callback: (name) => getCallback(mappings.right()),
        commandText: mappings.right(),
        description: "go right"
      },
      {
        command: 'left',
        callback: (name) => getCallback(mappings.left()),
        commandText: mappings.left(),
        description: "go left"
      },
      {
        command: 'down',
        callback: (name) => getCallback(mappings.down()),
        commandText: mappings.down(),
        description: "go down"
      },
      {
        command: 'up',
        callback: (name) => getCallback(mappings.up()),
        commandText: mappings.up(),
        description: "go up"
      },
      {
        command: 'spell (*)',
        callback: (name) => getCallback(mappings.spell(name?.trim() || 'bubblegum'), 'spell'),
        commandText: mappings.spell('bubblegum'),
        description: 'wtvr shit U wanna say'
      },
      {
        command: 'head',
        callback: () => getCallback(mappings.head()),
        commandText: mappings.html(),
        description: 'create head tag'
      },
      {
        command: 'main tag',
        callback: () => getCallback(mappings.html()),
        commandText: mappings.html(),
        description: 'create HTML tag'
      },
      {
        command: 'function (*)',
        callback: (name) => getCallback(mappings.func(name?.trim() || 'bubblegum'), 'function'),
        commandText: mappings.func('bubblegum'),
        description: 'new function'
      },
      {
        command: 'constant (*)',
        callback: (name) => getCallback(mappings.constant(name?.trim() || 'marceline'), 'constant'),
        commandText: mappings.constant('marceline'),
        description: 'const'
      },
      {
        command: 'state (*)',
        callback: (name) => getCallback(mappings.state(name?.trim() || 'state'), 'state'),
        commandText: mappings.state('state'),
        description: 'useState'
      },
      {
        command: 'component (*)',
        callback: (name) => getCallback(mappings.component(name?.trim() || 'Ooo'), 'component'),
        commandText: mappings.component('Ooo'),
        description: 'functional component'
      },
      {
        command: 'effect (*)',
        callback: (name) => getCallback(mappings.effect(name?.trim() || ''), 'effect'),
        commandText: mappings.effect(''),
        description: 'useEffect',
        isFuzzyMatch: true
      },
      // need to spell out 'd', 'i', 'v' for speech recognition to pick up
      {
        command: 'div (*)',
        callback: (text) => getCallback(mappings.div(text?.trim() || 'the vampire queen'), 'div'),
        commandText: mappings.div('the vampire queen'),
        description: '<div>'
      },
      {
        command: 'span (*)',
        callback: (text) => getCallback(mappings.span(text?.trim() || 'candy kingdom'), 'span'),
        commandText: mappings.span('candy kingdom'),
        description: '<span>'
      },
      {
        command: 'spam (*)',
        callback: (text) => getCallback(mappings.span(text?.trim() || 'candy kingdom'), 'span'),
      },
      {
        command: 'text (*)',
        callback: (type) => getCallback(mappings.text(type?.trim() || ''), 'text'),
        commandText: mappings.text(''),
        description: '<p>'
      },
      {
        command: 'button (*)',
        callback: (type) => getCallback(mappings.button(type?.trim() || ''), 'button'),
        commandText: mappings.button(''),
        description: '<button>'
      },
      {
        command: 'input',
        callback: (type) => getCallback(mappings.input(), 'input'),
        commandText: mappings.input(),
        description: '<input>'
      },
      {
        command: 'toggle',
        callback: (type) => getCallback(mappings.toggle(), 'toggle'),
        commandText: mappings.toggle(),
        description: 'toggle'
      },
      {
        command: 'checkbox',
        callback: (type) => getCallback(mappings.checkbox(), 'checkbox'),
        commandText: mappings.checkbox(),
        description: 'checkbox'
      },
      {
        command: 'check',
        callback: (type) => getCallback(mappings.checkbox(), 'check')
      },
      {
        command: 'slider',
        callback: (type) => getCallback(mappings.slider(), 'slider'),
        commandText: mappings.slider(),
        description: 'slider'
      },
      {
        command: 'quote',
        callback: () => getCallback(mappings.blockquote(), 'quote'),
        commandText: mappings.blockquote(),
        description: '<blockquote>'
      },
      {
        command: 'quotes',
        callback: () => getCallback(mappings.blockquote(), 'quote')
      },
      {
        command: 'block quote',
        callback: () => getCallback(mappings.blockquote(), 'blockquote')
      },
      {
        command: 'table',
        callback: () => getCallback(mappings.table(), 'table'),
        commandText: mappings.table(),
        description: '<table>'
      },
      {
        command: 'email',
        callback: () => getCallback(mappings.email(), 'email'),
        commandText: mappings.email(),
        description: 'email input'
      },
      {
        command: 'password',
        callback: () => getCallback(mappings.password(), 'password'),
        commandText: mappings.password(),
        description: 'password input'
      },
      {
        command: 'select',
        callback: () => getCallback(mappings.select(), 'select'),
        commandText: mappings.select(),
        description: '<select>'
      },
      {
        command: 'textarea',
        callback: () => getCallback(mappings.textarea(), 'textarea'),
        commandText: mappings.textarea(),
        description: '<textarea>'
      },
      {
        command: 'text area',
        callback: () => getCallback(mappings.textarea(), 'textarea')
      },
      {
        command: 'file',
        callback: () => getCallback(mappings.file(), 'file'),
        commandText: mappings.file(),
        description: 'file upload'
      },
      {
        command: 'radio',
        callback: () => getCallback(mappings.radio(), 'radio'),
        commandText: mappings.radio(),
        description: 'radio'
      },
      {
        command: 'alert (*)',
        callback: (type) => getCallback(mappings.alert(type?.trim() || 'success'), 'alert'),
        commandText: mappings.alert('success'),
        description: 'alert'
      },
      {
        command: 'card',
        callback: () => getCallback(mappings.card(), 'card'),
        commandText: mappings.card(),
        description: 'card'
      },
      {
        command: 'modal',
        callback: () => getCallback(mappings.modal(), 'modal'),
        commandText: mappings.modal(),
        description: 'modal'
      },
      {
        command: 'toast',
        callback: () => getCallback(mappings.toast(), 'toast'),
        commandText: mappings.toast(),
        description: 'toast'
      }
    ]
  }
}

import { invoke } from '@tauri-apps/api/tauri';
window.AudioContext = window.AudioContext;

const chimeSound = './Chime-Announce02-1.mp3';

/**
 * logging to terminal.
 * @param {*} mes 
 */
const logging = (mes) => {
  invoke('console_out', {mes: mes});
}

/**
 * start after window loaded.
 */
new Promise(resolv => window.onload = resolv()).then(() => {
  invoke('void_func').then(() => {
    new Audio(chimeSound).play();
  });
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');

  /** playing sample1 audio -- with user interactive */
  btn1.onclick = () => {
    const ctx = new AudioContext();
    const source = ctx.createBufferSource();
    fetch(chimeSound)
    .then(
      res => res.arrayBuffer()
    )
    .then(
      arryb => ctx.decodeAudioData(arryb)
    )
    .then(
      adbuf => {
        source.buffer = adbuf;
        source.connect(ctx.destination);
        source.onended = () => {
          logging('sample1 ended.');
        }
        logging('sample1 started.');
        source.start(0);
      }
    )
  };

  /** playing sample2 audio -- pre-create AudioContext non-interactive */
  let ctx_pre;
  invoke('void_func').then(() => {
    ctx_pre = new AudioContext();
  })
  btn2.onclick = () => {
    // const ctx = new AudioContext();
    const source = ctx_pre.createBufferSource();
    fetch(chimeSound)
    .then(
      res => res.arrayBuffer()
    )
    .then(
      arryb => ctx_pre.decodeAudioData(arryb)
    )
    .then(
      adbuf => {
        source.buffer = adbuf;
        source.connect(ctx_pre.destination);
        source.onended = () => {
          logging('sample2 ended');
        }
        logging('sample2 started.')
        source.start(0);
      }
    )
  };

  /** playing sample3 audio -- 1s timer play == autoplay test */
  btn3.onclick = () => {
    setTimeout(() => {
      invoke('void_func').then(() => {
        const ctx = new AudioContext();
        const source = ctx.createBufferSource();
        fetch(chimeSound)
        .then(
          res => res.arrayBuffer()
        )
        .then(
          arryb => ctx.decodeAudioData(arryb)
        )
        .then(
          adbuf => {
            source.buffer = adbuf;
            source.connect(ctx.destination);
            source.onended = () => {
              logging('sample3 ended.');
            }
            logging('sample3 started.')
            source.start(0);
          }
        )        
      });
    }, 1000)
  }
  /** playing sample4 */
  const atag = document.querySelector('audio');
  //const asrc = ddocument.querySelector('source');
  atag.src = chimeSound;
  atag.onended = () => logging('sample4 ended.');
  btn4.onclick = () => {
    //atag.play();
    setTimeout(() => {
      logging('sample4 started.')
      atag.play();  
    }, 1000)
  }
  
});
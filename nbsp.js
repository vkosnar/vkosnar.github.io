'use strict';

function nbsp() {
  document.querySelector('#output_text').value = document
    .querySelector('#input_text')
    .value.concat('\n')
    .replace(/([0-9]+) /g, '$1&nbsp;')
    .replace(/([0-9]+\.) /g, '$1&nbsp;')
    .replace(/([0-9]+) ([0-9]+)/g, '$1&nbsp;$2')
    .replace(/(te) (se |si )/gi, '$1&nbsp;$2')
    .replace(
      / ([aiouksvz]|do|ke|na|od|po|se|ve|za|ze|už|tj\.|tzn\.|tzv\.|při|pro|ani|nebo|či|jak|to|ale|leč|ba|buď|aby|až|než|když|kdyby|ač|že|pod|nad|po|před|bez|mezi|který|která|které|kteří|co|ať|kde|kdo|kdy) /gi,
      ' $1&nbsp;'
    )
    .replace(
      /&nbsp;([aiouksvz]|do|ke|na|od|po|ve|za|ze|už|tj\.|tzn\.|tzv\.|při|pro|ani|nebo|či|jak|to|ale|leč|ba|buď|aby|až|než|když|kdyby|ač|že|pod|nad|po|před|bez|mezi|který|která|které|kteří|co|ať) /gi,
      '&nbsp;$1&nbsp;'
    )
    .replace(/ ([A-ž]*(\.|!|\?|\.\.\.|)\n)/gi, '&nbsp;$1')
    .slice(0, -1);

  if (document.querySelector('#email-radio').checked) {
    document.querySelector('#output_text').value = document
      .querySelector('#output_text')
      .value.replace(/\n/g, '<br/>');
  } else if (document.querySelector('#web-radio').checked) {
    document.querySelector('#output_text').value = '<p>'
      .concat(
        document
          .querySelector('#output_text')
          .value.replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br/>')
      )
      .concat('</p>');
  }
}

function copy() {
  nbsp();
  const copyText = document.querySelector('#output_text');
  copyText.select();
  copyText.setSelectionRange(0, copyText.value.length);
  document.execCommand('copy');
}

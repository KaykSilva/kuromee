Kurome.sendMessage(from, {
  text: `Botão`, // image, video, document...
  footer: `Nome em baixo`,
  buttons: [
    {buttonId: `${prefix + command}`, buttonText: {displayText: `Proxima`}, type: 1}
  ]
}, {quoted: m})

/*

*/
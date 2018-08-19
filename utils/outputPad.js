module.exports = function outputPad(text, amount, direction){
  const spaces = (text.length < amount) ? Array(amount - text.length).join(' ') : ''
  return direction==='left' ? spaces+text : text+spaces
}

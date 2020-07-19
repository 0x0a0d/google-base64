function base64Encode (str) {
  return str
    .replace(/\+/g,"-")
    .replace(/\//g,"_")
    .replace(/=/g,"")
}
function base64AddPadding(str) {
  return str + Array((4 - str.length % 4) % 4 + 1).join('=');
}
function base64Decode (str) {
  return base64AddPadding(str
    .replace(/-/g,"+")
    .replace(/_/g,"/"))
}

module.exports = {
  /**
   * modify base64 by google way
   * @param {string} str
   * @param {boolean} [removePaddingOnly=false] - only remove padding
   * @return {string}
   */
  encode (str, { removePaddingOnly = false } = {}) {
    str = str.replace(/=+$/g, '')
    if (removePaddingOnly)
      return str
    else
      return str
        .replace(/\+/g,"-")
        .replace(/\//g,"_")
  },
  /**
   * restore google base64 to original base64
   * @param {string} str
   * @param {boolean} [addPaddingOnly=false] - only add padding
   * @return {string}
   */
  decode (str, { addPaddingOnly = false } = {}) {
    str = str + Array((4 - str.length % 4) % 4 + 1).join('=')
    if (addPaddingOnly)
      return str
    else
      return str
        .replace(/-/g,"+")
        .replace(/_/g,"/")
  }
}
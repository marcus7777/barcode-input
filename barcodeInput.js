function barcodeInput(cb) {
  let barcode = ""
  let timeoutRef = 0
  function barKey(e) {
    clearTimeout(timeoutRef)
    timeoutRef = setTimeout(() => {
      if (barcode.length > 4) {
        cb(barcode)
      }
      barcode = ""
    }, 20)
    if (e.key !== "Enter") {
      barcode += e.key
    }
  }
  document.addEventListener('keypress', barKey)
}
export default barcodeInput 

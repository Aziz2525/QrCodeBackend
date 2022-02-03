const express = require("express");
const router = express.Router();
var QRCode = require("qrcode");
var toSJIS = require("qrcode/helper/to-sjis");
const imageToBase64 = require("image-to-base64");
var fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
var JsBarcode = require("jsbarcode");

router.post("/barcode", (req, res) => {
  var { background, width,height,text, lineColor,textAlign,textPosition,textMargin,fontSize,margin,marginTop,marginBottom,marginLeft,marginRight,displayValue,font, veri, type } = req.body;
  if (veri && type) {
    var canvas = createCanvas();
    JsBarcode(canvas, veri, {
      format: type?type:"CODE128",
      lineColor: lineColor ? lineColor : "#000000",
      text: text ? text : null,
      width: width?width:4,
      height: height?height:40,
      background: background?background:"#ffffff",
      displayValue: displayValue ? displayValue :false,
      textAlign: textAlign ? textAlign : "center",
      textPosition: textPosition ? textPosition : "bottom",
      textMargin: textMargin ? textMargin : 2,
      fontSize: fontSize ? fontSize : 20,
      margin: margin ? margin : 20,
      marginTop: marginTop ? marginTop : null,
      marginBottom: marginBottom ? marginBottom : null,
      marginLeft: marginLeft ? marginLeft : null,
      marginRight: marginRight ? marginRight : null,
      font: font ? font : "monospace",
    });
    res.json({ success: true, base64: canvas.toDataURL() , width: width?width:4 ,height: height?height:40});
  } else {
    res.json({ success: false, message: "Veri ve tipi girilmelidir." });
  }
});

module.exports = router;

const colorPicker = document.querySelector('#color-picker');
const text = document.querySelectorAll('.text')
function hexToHSL(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  r = parseInt(result[1], 16);
  g = parseInt(result[2], 16);
  b = parseInt(result[3], 16);
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  var HSL = new Object();
  HSL['h'] = h;
  HSL['s'] = s;
  HSL['l'] = l;
  return HSL;
}
function HSLToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

colorPicker.addEventListener('change', () => {
  const hsl = hexToHSL(colorPicker.value);

  let l = hsl.l;
  const arr = [l, l + .1, l + 0.2, l + 0.3];
  for (let i = 0; i < arr.length; i++) {

    let a = Math.round((hsl.h * 360))
    let b = Math.round((hsl.s * 100))
    let c = Math.round(((arr[i]) * 100))

    let finalColor = document.querySelector("#color" + (i + 1)).style.backgroundColor = "hsl(" + a + ", " + b + "%, " + c + "%)";

    let effectq = document.querySelector("#color" + (i + 1));
    effectq.addEventListener("mouseover", function () {
      effectq.style.backgroundColor = "#3b3b3be3";
    })
    effectq.addEventListener("mouseout", function () {
      effectq.style.backgroundColor = finalColor;
    })

    console.log(finalColor);
    console.log(HSLToHex(a, b, c));
    text[i].innerHTML = text[i].innerHTML.replace('#FFF', HSLToHex(a, b, c));
  }

})

function copyToClipboard(color1) {
  var copyText = document.querySelector('#color1').style.backgroundColor;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    alert("Copied to clipboard");
  });
}
function copyToClipboard(color2) {
  var copyText = document.querySelector('#color2').style.backgroundColor;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    alert("Copied to clipboard");
  });
}
function copyToClipboard(color3) {
  var copyText = document.querySelector('#color3').style.backgroundColor;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    alert("Copied to clipboard");
  });
}
function copyToClipboard(color4) {
  var copyText = document.querySelector('#color4').style.backgroundColor;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    alert("Copied to clipboard");
  });
}
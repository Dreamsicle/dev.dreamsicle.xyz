function randColor() {
	var colors = ['#ffbc42', '#028090', '#20BF55', '#C5283D', '#930E67']
	return colors[Math.floor(Math.random() * colors.length)]
}

function randString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=`~\|][{}';/<>.,/";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var pattern = GeoPattern.generate(randString(), {color: randColor()})

document.getElementById("header").style.backgroundImage = pattern.toDataUrl()
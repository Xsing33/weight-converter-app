document.getElementById("lbsInput").addEventListener("input", function(e) {
  let lbs = event.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

// console.log(pounds);

function predict() {
  var date = document.getElementById("date").value.split("-");
  var dt = Number(date[2]);
  var mnth = Number(date[1]);
  var h;
  var dn;
  var bias = 1753.2;

  switch (mnth) {
    case 3:
      dn = dt;
      h =
        1.343516892631634 +
        bias +
        62.634033833607418 * dn -
        4.823798046559617 * Math.pow(dn, 2) +
        0.089939402917767 * Math.pow(dn, 3) +
        0.002157582008822 * Math.pow(dn, 4);
      h = Math.round(h);
      h = "<h1>Predicted Cases : " + h + "</h1>";
      break;
    case 4:
      dn = dt + 31;
      h =
        1.343516892631634 +
        bias +
        62.634033833607418 * dn -
        4.823798046559617 * Math.pow(dn, 2) +
        0.089939402917767 * Math.pow(dn, 3) +
        0.002157582008822 * Math.pow(dn, 4);
      h = Math.round(h);
      h = "<h1>Predicted Cases : " + h + "</h1>";
      break;
    case 5:
      dn = dt + 61;
      h =
        1.343516892631634 +
        bias +
        62.634033833607418 * dn -
        4.823798046559617 * Math.pow(dn, 2) +
        0.089939402917767 * Math.pow(dn, 3) +
        0.002157582008822 * Math.pow(dn, 4);
      h = Math.round(h);
      h = "<h1>Predicted Cases : " + h + "</h1>";
      break;
    case 6:
      dn = dt + 92;
      h =
        1.343516892631634 +
        bias +
        62.634033833607418 * dn -
        4.823798046559617 * Math.pow(dn, 2) +
        0.089939402917767 * Math.pow(dn, 3) +
        0.002157582008822 * Math.pow(dn, 4);
      console.log(h);
      h = Math.round(h);
      h = "<h1>Predicted Cases : " + h + "</h1>";
      break;
    default:
      alert("Enter Month between March and June");
      h = "<h3>Oops! \n Reload Now</h3>";
  }

  if (date.length > 1) {
    document.getElementById("prediction").innerHTML = h;
  } else {
    alert("Error: Please Enter Date");
  }
  console.log(date);
  console.log(date.length);
  console.log("day number : ", dt);
  console.log("month : ", mnth);
}

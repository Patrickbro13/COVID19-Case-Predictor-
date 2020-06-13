function predict() {
  var date = document.getElementById("date").value.split("-");
  var dt = Number(date[2]);
  var mnth = Number(date[1]);
  var h;
  var dn;
  var bias = 256799.847161 - 216157.18200000003;

  switch (mnth) {
    case 3:
      dn = dt;
      h =
        16.81787279795628364809 -
        88.51669627618366575916 * dn +
        6.11672957899665448167 * Math.pow(dn, 2) -
        0.12673786632482308967 * Math.pow(dn, 3) +
        0.00342047782577228725 * Math.pow(dn, 4);
      h = Math.round(h);
      h = "<h1>Predicted Cases : " + h + "</h1>";
      break;
    case 4:
      dn = dt + 31;
      h =
        16.81787279795628364809 -
        88.51669627618366575916 * dn +
        6.11672957899665448167 * Math.pow(dn, 2) -
        0.12673786632482308967 * Math.pow(dn, 3) +
        0.00342047782577228725 * Math.pow(dn, 4);
      h = Math.round(h);
      h = "<h1>Predicted Cases : " + h + "</h1>";
      break;
    case 5:
      dn = dt + 61;
      h =
        16.81787279795628364809 -
        88.51669627618366575916 * dn +
        6.11672957899665448167 * Math.pow(dn, 2) -
        0.12673786632482308967 * Math.pow(dn, 3) +
        0.00342047782577228725 * Math.pow(dn, 4);
      h = Math.round(h);
      h = "<h1>Predicted Cases : " + h + "</h1>";
      break;
    case 6:
      dn = dt + 92;
      h =
        16.81787279795628364809 -
        88.51669627618366575916 * dn +
        6.11672957899665448167 * Math.pow(dn, 2) -
        0.12673786632482308967 * Math.pow(dn, 3) +
        0.00342047782577228725 * Math.pow(dn, 4);
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

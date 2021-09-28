var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income (per year)",
        data: [10, 15, 10.13, 7, 19, 25, 26, 12, 3, 0, 0, 25],
        borderColor: ["#3595fa"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
});

// Завдання 1
const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let currentKeyIndex = 0;
document.getElementById("key").innerText = keys[currentKeyIndex];
document.addEventListener("keydown", function (event) {
  if (event.key === keys[currentKeyIndex]) {
    currentKeyIndex = (currentKeyIndex + 1) % keys.length;
    document.getElementById("key").innerText = keys[currentKeyIndex];
    PNotify.success({ text: "Правильна клавіша!", delay: 1000 });
  } else {
    PNotify.error({ text: "Неправильна клавіша!", delay: 1000 });
  }
});

document.getElementById("newGame").addEventListener("click", function () {
  currentKeyIndex = 0;
  document.getElementById("key").innerText = keys[currentKeyIndex];
  PNotify.info({ text: "Гра розпочата наново!", delay: 1000 });
});

// Завдання 2
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const place = document.getElementById("sales-chart");
const salesChart = new Chart(place, {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    scales: {
      x: { display: true, title: { display: true, text: "Дні місяця" } },
      y: { display: true, title: { display: true, text: "Продажі (шт.)" } },
    },
  },
});

const alert = document.getElementById('alert');

alert.innerHTML =
  `
  <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
  </div>
  `;

alert.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none";
  }
});

//------ Traffic Chart ------//
const trafficCanvas = document.getElementById('traffic-chart');

let hourlyData = {
  labels: ["7", "8", "9", "10", "11", "12", "1",
    "2", "3", "4", "5", "6", "7"
  ],
  datasets: [{
    data: [1400, 1800, 1700, 1200, 800, 1000, 600, 500, 850, 1500,
      2500, 2000, 1200
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let dayData = {
  labels: ["1", "4", "7", "10", "13", "16", "19",
    "22", "25", "28", "31"
  ],
  datasets: [{
    data: [750, 1450, 1300, 700, 1500, 1100, 450, 1250, 1375, 800,
      1150
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let weeklyData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      2500
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let monthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  datasets: [{
    data: [200, 250, 600, 400, 300, 800, 875, 980, 900, 320,
      475, 250
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficOptions = {
  responsive: true,
  aspectRatio: 2.5,
  animation: {
    duration: 0.2
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: weeklyData,
  options: trafficOptions
});

//------ Chart Filter Select ------//

// add event listeners to the .traffic-nav
const trafficNav = document.getElementById('traffic-nav')
trafficNav.addEventListener('click', (e) => {
  trafficChart.destroy();
  if (e.target.id === 'hourly') {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: hourlyData,
      options: trafficOptions
    });
    trafficChart.update({
      duration: 700,
      easing: 'easeOutBack'
    });
  }
  if (e.target.id === 'daily') {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: dayData,
      options: trafficOptions
    });
    trafficChart.update({
      duration: 800,
      easing: 'easeOutBack'
    });
  }
  if (e.target.id === 'weekly') {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: weeklyData,
      options: trafficOptions
    });
    trafficChart.update({
      duration: 800,
      easing: 'easeOutBack'
    });
  }
  if (e.target.id === 'monthly') {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: monthlyData,
      options: trafficOptions
    });
    trafficChart.update({
      duration: 800,
      easing: 'easeOutBack'
    });
  }
});


//------ Daily Chart ------//
const dailyCanvas = document.getElementById('daily-chart');
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  responsive: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  },
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

//------ Mobile Chart ------//
const mobileCanvas = document.getElementById('mobile-chart');
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  responsive: true,
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

//------ Messaging Section ------//
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
  // ensure user and message fields are filled outBack
  if (user.value === "" && message.value === "") {
    alert("Please fill outBack user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill outBack user field before sending");
  } else if (message.value === "") {
    alert("Please fill outBack message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});
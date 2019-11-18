//------ Alert Banner ------//
const alert = document.getElementById('alert');

alert.innerHTML =
  `
  <div class="alert-banner">
    <p class="alert-banner-text"><strong>Alert:</strong> Welcome! You have <strong>6</strong> overdue tasks to complete. Better get to it.</p>
    <p class="alert-banner-close">x</p>
  </div>
  `;

alert.addEventListener('click', e => {
  if (e.target.classList.contains("alert-banner-close")) {
    alert.style.display = "none";
  }
});

//------ Messaging Section ------//
const alertText = document.querySelector('.alert-banner-text');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const userList = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

send.addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  e.preventDefault();
  alert.style.display = "flex";
  // ensure user and message fields are filled outBack
  if (user.value === "" && message.value === "") {
    alertText.textContent = "Please fill out the user and message fields before sending";
  } else if (user.value === "") {
    alertText.textContent = "Please fill out user field before sending";
  } else if (message.value === "") {
    alertText.textContent = "Please fill out message field before sending";
  } else {
    alertText.textContent = `Message successfully sent to: ${user.value}`;
  }
});

//------ Notification Drop Down ------//
const bell = document.querySelector('.icon');
const notif = document.querySelector('.notif');

bell.addEventListener('mousedown', () => {
  if (notif.style.display === "block") {
    notif.style.display = "";
    notif.style.opacity = "0";
  } else if (notif.style.display === "") {
    notif.style.display = "block";
    notif.style.opacity = "1";
  }
  bell.classList.add("no-after");
});

//------ Autocomplete function from "w3schools.com/howto/howto_js_autocomplete.asp" and customized for my project------//
function autocomplete(inp, arr) {
  let currentFocus;
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { //up
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.querySelector('#userField'), userList);

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
function updateChart(dataset) {
  // Create new chart
  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: dataset,
    options: trafficOptions
  });
  // Animation
  trafficChart.update({
    duration: 800,
    easing: 'easeOutExpo'
  });
}

const trafficNav = document.getElementById('traffic-nav')
trafficNav.addEventListener('click', (e) => {
  // Validate target is not active and is not the parent ul
  if (!(e.target.classList.contains('active')) &&
    e.target.id !== 'traffic-nav') {

    // Remove active class (green pill)
    let activeItem = document.getElementsByClassName('active');
    activeItem[0].classList.remove('active');

    trafficChart.destroy();

    if (e.target.id === 'hourly') {
      updateChart(hourlyData);
    }
    if (e.target.id === 'daily') {
      updateChart(dayData);
    }
    if (e.target.id === 'weekly') {
      updateChart(weeklyData);
    }
    if (e.target.id === 'monthly') {
      updateChart(monthlyData);
    }
    // Add green pill to new active item
    e.target.classList.add('active');
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

//----- Settings: Local Storage -----//
const email = document.querySelector('#email');
const public = document.querySelector('#public');
const timezone = document.querySelector('#timezone');

window.onload = function() {
  if (localStorage.email) {
    email.checked = JSON.parse(localStorage.email);
  }

  if (localStorage.public) {
    public.checked = JSON.parse(localStorage.public);
  }

  if (localStorage.timezone) {
    timezone.value = localStorage.timezone;
  }
};

email.addEventListener('click', () => {
  localStorage.setItem('email', email.checked);
});

public.addEventListener('click', () => {
  localStorage.setItem('public', public.checked);
});

timezone.addEventListener('change', () => {
  localStorage.setItem('timezone', timezone.value);
});
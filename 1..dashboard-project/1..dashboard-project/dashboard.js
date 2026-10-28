const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector("aside");
const gearIcon = document.querySelector(".sideIcon");
const listMenu = document.querySelector(".list-menu");

// hamburger open and close
hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    hamburger.classList.toggle("open");
});

// gear show and hide
gearIcon.addEventListener("click", function () {
    listMenu.classList.toggle("open");
});

// ---------- charts ----------
Chart.defaults.font.family = "pari";
Chart.defaults.font.size = 13;

// monthly revenue (line)
new Chart(document.getElementById("revenueChart"), {
    type: "line",
    data: {
        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
        datasets: [{
            label: "درآمد (میلیون تومان)",
            data: [120, 150, 135, 180, 210, 195],
            borderColor: "#1DCED8",
            backgroundColor: "rgba(29, 206, 216, 0.15)",
            fill: true,
            tension: 0.4,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { reverse: true },
            y: {
                beginAtZero: true,
                position: "right"
            }
        }
    }
});

// weekly sales (bar)
new Chart(document.getElementById("salesChart"), {
    type: "bar",
    data: {
        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
        datasets: [{
            label: "فروش",
            data: [32, 41, 28, 55, 47, 60, 38],
            backgroundColor: "#06D6A0",
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { reverse: true },
            y: { beginAtZero: true, position: "right" }
        }
    }
});
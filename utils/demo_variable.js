import { generateRandomHexString } from "./helper";

export const demoData = [
    { party: "PDP", voteCount: (Math.round(Math.random() * 999)), partyColor: "#e62a20" },
    { party: "APGA", voteCount: (Math.round(Math.random() * 1399)), partyColor: "#34606e" },
    { party: "APC", voteCount: (Math.round(Math.random() * 1545)), partyColor: "rgba(0, 38, 255, 1)" },
    { party: "APP", voteCount: (Math.round(Math.random() * 3202)), partyColor: "#de4987" },
    { party: "LPP", voteCount: (Math.round(Math.random() * 1500)), partyColor: "#e15b44" },
    { party: "ACP", voteCount: (Math.round(Math.random() * 1000)), partyColor: "#373641" },
];

export const stateData = [
    { name: "Abia", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "adamawa", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Akwa Ibom", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Anambara", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Bauchi", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Bayelsa", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Benue", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Borno", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Cross River", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Delta", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Ebonyi", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Edo", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Ekiti", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Enugu", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Gombe", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Imo", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Jigawa", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Kaduna", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Kano", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Kastina", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Kebbi", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Kwara", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Lagos", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Nasarawa", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Niger", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Ogun", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Ondo", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Osun", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Oyo", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Plateau", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Rivers", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Sokoto", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Taraba", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Yobe", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
    { name: "Zamfara", stat: (Math.round(Math.random() * (100))), per: `2`, lastPosition: Math.round(Math.random() * 6), },
]

export const chartOptions = {
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
    },
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
                drawBorder: false,
            },
            gridLines: {
                display: false, // Hide the x-axis grid lines
                drawBorder: false
            },
            ticks: {
                display: false
            }
        }
    },
    elements: {
        line: {
            tension: 0.5 // Adjust the line tension for smooth curves
        },
        point: {
            radius: 10
        }
    },
    responsive: true,
};

export const chartOptionsFloat = {
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
    },
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
                drawBorder: false,
            },
            gridLines: {
                display: false, // Hide the x-axis grid lines
                drawBorder: false
            },
            ticks: {
                display: false
            }
        }
    },
    elements: {
        line: {
            tension: 0.5 // Adjust the line tension for smooth curves
        },
        point: {
            radius: 0
        }
    },
    responsive: true,
};

export const LeadOptionsFloat = {
    plugins: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
    },
    elements: {
        line: {
            tension: 0.2, // Adjust the line tension for smooth curves
        },
        point: {
            radius: 5,
        },
    },
    responsive: true,
    scales: {
        y: {
            ticks: {
                callback: function (value, index, values) {
                    const labelSuffixes = ['', 'k', 'M', 'B'];
                    const suffixIndex = Math.floor(Math.log10(value) / 3);
                    const suffix = labelSuffixes[suffixIndex];
                    return value > 0 ? value / Math.pow(10, suffixIndex * 3) + suffix : 0;
                },
            },
        },
        x: {
            grid: {
                display: false
            },
        },
    },
};

export const auditData = [
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
    {context:"Voted for tinubu", date:`${Math.round(Math.random()*50)}m ago`, from:generateRandomHexString(40), type:Math.round(Math.random()*4)},
]
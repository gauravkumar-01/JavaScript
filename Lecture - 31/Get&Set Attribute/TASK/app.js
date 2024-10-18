
let arr = [
    'https://th.bing.com/th/id/OIP.p3e5Y37IbeWX45Atdp_9_AHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.9wBaT8xY9Dx-KDzW5aRi4AHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.dnLpGbtxS9Wq6m8f0Zv56AHaE6?w=259&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.9IS0VmpdSghj_I_oDPsV8QHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
];

let img = document.querySelector('img');

let num = 0;
setInterval(() => {
    img.setAttribute('src',arr[num]);
    num = (num+1) % arr.length;
}, 3000);


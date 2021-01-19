let btn = document.getElementById("btn");
let counter = 0;
            btn.innerHTML = counter;

            btn.onclick = function () {
                counter++;
                btn.innerHTML = counter.toString();
            };

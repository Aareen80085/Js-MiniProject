let clickCount = 0;

function Bs() {
    const btn = document.getElementById("mainBtn");
    const warning = document.getElementById("warning");

    switch (clickCount) {
        case 0:
            btn.textContent = "Dont Do it !! 😤";
            document.body.style.background = "linear-gradient(135deg, #b8860b, #daa520)";
            warning.textContent = "bro... why would you do that 😐";
            break;
        case 1:
            btn.textContent = "I told you not to Do it !! 😡";
            document.body.style.background = "linear-gradient(135deg, #ff8c00, #ff6600)";
            warning.textContent = "YO CHILL BRO ";
            document.body.classList.add("brainrot-mode");
            break;
        case 2:
            btn.textContent = "Hey Dont !! ";
            document.body.style.background = "linear-gradient(135deg, #800080, #4B0082)";
            warning.textContent = "nah you're actually gonna regret This !!";
            break;
        case 3:
            btn.textContent = "You're Gonna Regret This !!! 💀💀💀";
            document.body.style.background = "linear-gradient(135deg, #8B0000, #ff0000)";
            warning.textContent = "ITS OVER NIGGA";

            // Open the video in a new tab after a short delay
            setTimeout(() => {
                window.open("https://www.youtube.com/watch?v=GBIIQ0kP15E", "_blank");
                btn.textContent = "you did this to yourself 🗿";
                warning.textContent = "YOU ARE DONE NIGGA💀";
            }, 1000);
            break;
    }

    // Stop cycling after showing the video
    if (clickCount < 4) {
        clickCount++;
    }
}
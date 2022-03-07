WA.room.onEnterLayer('openBoard').subscribe(() => {
    const triggerMessage = WA.ui.displayActionMessage({
        message: "Press Space or click here to open topic submission website! \n (Please use the template at the signs)",
        callback: () => {
            WA.nav.openTab("miro-boards/html/blue_room.html");
        }
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

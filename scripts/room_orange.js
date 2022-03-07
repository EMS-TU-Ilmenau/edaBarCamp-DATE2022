WA.room.onEnterLayer('openBoard').subscribe(() => {
    const triggerMessage = WA.ui.displayActionMessage({
        message: "Press Space or click here to open the board for this session!",
        callback: () => {
            WA.nav.openTab("https://ems-tu-ilmenau.github.io/edaBarCamp-DATE2022/miro-boards/html/orange_room.html");
        }
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

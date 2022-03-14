
let triggerMessage = null;

// Messages for proposal cards
WA.room.onEnterLayer('topicSubmission').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }


    triggerMessage = WA.ui.displayActionMessage({
        message: "Press Space or click here to open topic submission website! \n (Please use the template at the signs)",
        callback: () => {
            WA.nav.openTab("https://cloud.tu-ilmenau.de/s/2qjgze9AopATe7M");
        }
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('proposalCardDownload').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "Press Space or click here to download the proposal card template! \n (Upload your proposals at the post boxes)",
        callback: () => {
            WA.nav.openTab("https://cloud.tu-ilmenau.de/s/kqZeDeLcToigTxr");
        }
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('jitsiCoffee1C').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "Press Space or click here to open the Miro board for this coffee table",
        callback: () => {
            WA.nav.openTab("https://ems-tu-ilmenau.github.io/edaBarCamp-DATE2022/static_html/coffee1-miro.html");
        }
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})



WA.room.onEnterLayer('jitsiCoffee2C').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "Press Space or click here to open the Miro board for this coffee table",
        callback: () => {
            WA.nav.openTab("https://ems-tu-ilmenau.github.io/edaBarCamp-DATE2022/static_html/coffee2-miro.html");
        }
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popupMrCoffee').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "What's all this churning and bubbling, you call that a radar screen? Now that I have my coffee, I'm ready to watch radar. Where is it?",
        callback: () => {}
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popupMrRadar').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "I always have coffee when I watch MrRadar!",
        callback: () => {}
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popupMrMarmelade').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "I hope nobody JAMs the radar. (strawberry jam)",
        callback: () => {}
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popupMrTime').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "Are you on time? If you don't know, check the schedule at the session wall.",
        callback: () => {}
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popupMrBrowser').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "Oh. I hope, I don't use one of those browsers.",
        callback: () => {}
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popupMrInfo').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "I don't know where I am. I should check the tutorial sign to the left.",
        callback: () => {}
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

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

WA.room.onEnterLayer('popUpMrCoffee').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "What's all this churning and bubbling, you call that a radar screen? Now that I have my coffee, I'm ready to watch radar. Where is it?",
        callback: () => void
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popUpMrRadar').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "I always have coffee when I watch MrRadar!",
        callback: () => void
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popUpMrMarmelade').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "I hope nobody JAMs the radar. (strawberry jam)",
        callback: () => void
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popUpMrTime').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "Are you on time? If you don't know, check the schedule at the session wall.",
        callback: () => void
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})

WA.room.onEnterLayer('popUpMrBrowser').subscribe(() => {
    if (triggerMessage !== null) {
        triggerMessage.remove();
    }

    triggerMessage = WA.ui.displayActionMessage({
        message: "Oh. I hope, I don't use one of those.",
        callback: () => void
    });

    setTimeout(() => {
        // later
        triggerMessage.remove();
    }, 10000);
})
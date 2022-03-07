
// Messages for proposal cards
WA.room.onEnterLayer('topicSubmission').subscribe(() => {
    const triggerMessage = WA.ui.displayActionMessage({
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
    const triggerMessage = WA.ui.displayActionMessage({
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
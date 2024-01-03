navigator.permissions.query({name: "clipboard-write"})
.then(({state}) => {
    console.log(`permission response: ${state}`);
    if (state === "granted") {
        const data = [new ClipboardItem({ "text/plain": new Blob([`The time is ${new Date()}`], { type: "text/plain" }) })];
        navigator.clipboard.write(data).then(
            () => {
                console.log("Clipboard write succeeded");
            },
            () => {
                console.error("Clipboard write failed");
            }
        );
    }
});
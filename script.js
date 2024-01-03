navigator.permissions.query({name: "clipboard-write"})
.then(({state}) => {
    console.log(`permission response: ${state}`);
    if (state === "granted") {
        const data = 'test';
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

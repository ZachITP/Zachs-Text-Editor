const installBtn = document.getElementById('buttonInstall');

//This event is triggered when the browser determines that the web app is installable.
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    installBtn.classList.toggle('hidden', false);
});

installBtn.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    installBtn.classList.toggle('hidden', true);
});

//This event is triggered after the app has been successfully installed on the user's device.
window.addEventListener('zachs text editor installed', (event) => {
    window.deferredPrompt = null;
});
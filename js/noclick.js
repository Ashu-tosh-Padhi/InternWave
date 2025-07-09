    // Prevent right-click
    window.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    // Prevent F12
    window.addEventListener('keydown', function(event) {
        if (event.key === 'F12') {
            event.preventDefault();
        }
    });

    // Prevent Ctrl+Shift+I
    window.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
            event.preventDefault();
        }
    });
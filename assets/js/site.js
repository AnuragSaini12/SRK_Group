(function () {
    "use strict";

    // Disable right-click context menu
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // Block common developer tool and source shortcuts
    document.addEventListener("keydown", function (e) {
        var key = (e.key || "").toLowerCase();

        // F12
        if (e.key === "F12") {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl + Shift + I / J / C
        if (e.ctrlKey && e.shiftKey &&
            (key === "i" || key === "j" || key === "c")) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl + U (View Source)
        if (e.ctrlKey && key === "u") {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl + S (Save page)
        if (e.ctrlKey && key === "s") {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);
})();

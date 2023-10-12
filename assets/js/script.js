$(document).ready(function () {
    function typeText(element, text, delay) {
        var i = 0;
        var $targetElement = $(element);

        function addCharacter() {
            if (i < text.length) {
                $targetElement.append(text.charAt(i));
                i++;
                setTimeout(addCharacter, delay);
            }
        }

        addCharacter();
    }

    typeText(".up", "HI!", 200);
    setTimeout(function () {
        typeText(".down", "I am Dede Didin", 200);
    }, 2000);
    setTimeout(function () {
        typeText(".header-subtitle", "WEB DEVELOPER", 200);
    }, 5000);
});

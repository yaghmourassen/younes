document.addEventListener('DOMContentLoaded', function () {
    // Wait for 1.5 seconds before fading in and starting the typing animation
    setTimeout(function() {
        const textElement = document.getElementById('typing-text');
        const text = textElement.innerHTML.replace(/<br>/g, '\n');
        textElement.innerHTML = '';
        let i = 0;

        function type() {
            if (i < text.length) {
                if (text.charAt(i) === '\n') {
                    textElement.innerHTML += '<br>';
                } else {
                    textElement.innerHTML += text.charAt(i);
                }
                i++;
                setTimeout(type, 35);
            }
        }

        // Fade in the text gradually
        const fadeInInterval = setInterval(function() {
            if (textElement.style.opacity < 1) {
                textElement.style.opacity = parseFloat(textElement.style.opacity) + 0.1;
            } else {
                clearInterval(fadeInInterval);
                // Start typing animation after fading in
                type();
            }
        }, 100);

    }, 1200); // Adjust the delay (in milliseconds) as needed
});



function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

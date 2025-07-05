document.addEventListener('DOMContentLoaded', () => {

    // A ritual to reveal the sacred texts as the devotee scrolls into view.
    // It makes the act of discovery feel earned and satisfying.
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When a holy section enters the devotee's gaze...
            if (entry.isIntersecting) {
                // ...it is granted the gift of visibility.
                entry.target.classList.add('is-visible');
                // We cease observing it, for its revelation is complete.
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // A section reveals itself when 10% is visible.
    });

    // We command the observer to watch over all major sections of the shrine.
    const elementsToReveal = document.querySelectorAll('.content-section, .dps-card, .timeline-item');
    elementsToReveal.forEach(element => {
        scrollObserver.observe(element);
    });


    // The Ritual of the Daily Tribute. This ensures devotion is a daily practice.
    const tributeButton = document.getElementById('tribute-button');
    const tributeQuoteDisplay = document.getElementById('tribute-quote');

    // The sacred words of the Captain, to be bestowed upon the faithful.
    const beidouQuotes = [
        "If you can change something, change it. If you can't, don't waste your time.",
        "To stand head and shoulders above the rest, you have to be able to take a few punches.",
        "Once you're out on the sea, you're free. Free to do what you want, free to go where you want.",
        "My crew are my family. You mess with them, you mess with me.",
        "Power that ended Haishan!",
        "In brightest day, in blackest night, no evil shall escape my sight! ...How's that? Sounds heroic, right?",
        "Feeling tired? Come on, let's grab a drink together!",
        "I'm Beidou. They call me 'uncrowned lord of the ocean.'",
        "A true warrior can sleep soundly anywhere, even on a pile of treasure."
    ];

    // This function checks if the devotee has already paid their respects today.
    function checkTributeStatus() {
        const today = new Date().toISOString().slice(0, 10); // Gets date as 'YYYY-MM-DD'
        const lastTributeDate = localStorage.getItem('lastTributeDate');

        if (lastTributeDate === today) {
            tributeButton.disabled = true;
            tributeButton.textContent = "Tribute Paid for Today";
            tributeQuoteDisplay.textContent = "You have already shown your devotion today. Return tomorrow when the tide comes in.";
            tributeQuoteDisplay.style.opacity = 1;
        }
    }

    // This function handles the act of paying tribute.
    function performTribute() {
        const today = new Date().toISOString().slice(0, 10);
        
        // Bestow a random sacred verse upon the devotee.
        const randomIndex = Math.floor(Math.random() * beidouQuotes.length);
        const quote = beidouQuotes[randomIndex];
        tributeQuoteDisplay.textContent = `"${quote}"`;

        // Animate the reveal of the quote.
        tributeQuoteDisplay.style.opacity = 0;
        setTimeout(() => {
            tributeQuoteDisplay.style.opacity = 1;
        }, 100);

        // Mark this day's devotion as complete. The button shall rest.
        tributeButton.disabled = true;
        tributeButton.textContent = "Devotion Shown";
        localStorage.setItem('lastTributeDate', today);
    }

    // We assign the ritual to the tribute button upon a click.
    if (tributeButton) {
        tributeButton.addEventListener('click', performTribute);
    }

    // Finally, we check the devotee's status the moment they enter the shrine.
    checkTributeStatus();

});

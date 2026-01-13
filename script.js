document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const paper = document.getElementById('paper');

    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
        setTimeout(() => {
            paper.classList.add('open');
        }, 500); // Delay to match flap animation
    });
});
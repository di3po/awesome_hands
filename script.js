document.addEventListener("DOMContentLoaded", function(event) {
    let hand = document.getElementById('sender_hand')
    hand.onclick = () => {
        hand.style.transform = 'rotate(60deg)';
    }

    document.getElementById('receiver').onclick = () => {
        hand.style.transform = 'rotate(0deg)';
    }
});

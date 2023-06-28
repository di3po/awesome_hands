document.addEventListener("DOMContentLoaded", function(event) {
    let hand = document.getElementById('sender_hand')
    hand.onmouseover = () => {
        hand.style.transform = 'rotate(60deg)';
    }
    hand.onmouseout = () => {
        hand.style.transform = 'rotate(0deg)';
    }

    /*
        hand.onclick = () => {
            hand.style.transform = 'rotate(60deg)';
        }
        
        document.getElementById('receiver').onclick = () => {
            hand.style.transform = 'rotate(0deg)';
    }*/
});

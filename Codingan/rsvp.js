document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    const responseMessage = `Thank you, ${name}! Your response has been recorded.`;

    document.getElementById('responseMessage').textContent = responseMessage;

});
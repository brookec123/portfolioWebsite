document.addEventListener("DOMContentLoaded", function () {
    fetch('contact-form.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-form').innerHTML = data;
        })
        .catch(error => console.error('Error loading contact-form:', error));
});

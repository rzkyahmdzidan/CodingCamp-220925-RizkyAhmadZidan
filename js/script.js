document.addEventListener("DOMContentLoaded", () => {
    const homeNameInput = document.getElementById("home-name");
    const welcomeMessage = document.getElementById("welcome-message");
    const homeBtn = document.getElementById("home-btn");

    function updateWelcome() {
        const name = homeNameInput.value.trim();
        if (name === "") {
            alert("Nama harus diisi!");
        } else {
            welcomeMessage.textContent = `Hi ${name}, Welcome to My Portfolio`;
            homeNameInput.value = "";
        }
    }

    homeNameInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            updateWelcome();
        }
    });

    homeBtn.addEventListener("click", updateWelcome);
});


const darkBtn = document.getElementById("dark-toggle");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "☀️";
    } else {
        darkBtn.textContent = "🌙";
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const homeNameInput = document.getElementById("home-name");
    const contactNameInput = document.getElementById("contact-name");


    homeNameInput.addEventListener("input", () => {
        contactNameInput.value = homeNameInput.value;
    });


    const savedName = localStorage.getItem("userName");
    if (savedName) {
        homeNameInput.value = savedName;
        contactNameInput.value = savedName;
    }


    homeNameInput.addEventListener("input", () => {
        localStorage.setItem("userName", homeNameInput.value);
    });
});


document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const output = document.getElementById("form-output");

    if (name === "" || email === "" || message === "") {
        output.textContent = "⚠️ Please fill in all fields.";
        output.style.color = "red";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        output.textContent = "⚠️ Invalid email format.";
        output.style.color = "red";
        return;
    }


    showMessagePreview(name, email, message);

    output.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
    output.style.color = "green";


    setTimeout(() => {
        document.getElementById("contact-form").reset();
        output.textContent = "";
        hideMessagePreview();
    }, 5000);
});

function showMessagePreview(name, email, message) {
    const messagePreview = document.getElementById("message-preview");
    const previewContent = document.getElementById("preview-content");

    const currentTime = new Date().toLocaleString();

    previewContent.innerHTML = `
        <div class="preview-header">
            <div class="preview-name">👤 From: ${name}</div>
            <div class="preview-email">📧 Email: ${email}</div>
            <div class="preview-time">🕐 Sent: ${currentTime}</div>
        </div>
        <div class="preview-message">
            <strong>💬 Message:</strong>
            <p>${message}</p>
        </div>
    `;


    messagePreview.classList.remove("hidden");
    messagePreview.classList.add("show");
}

function hideMessagePreview() {
    const messagePreview = document.getElementById("message-preview");
    messagePreview.classList.remove("show");
    messagePreview.classList.add("hidden");
}
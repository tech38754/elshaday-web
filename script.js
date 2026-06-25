// ገጾችን የመቀያየር ተግባር
function showSection(sectionId) {
    // ሁሉንም ገጾች ደብቅ
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // የተመረጠውን ገጽ ብቻ አሳይ
    const targetPage = document.getElementById(sectionId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // ሞባይል ላይ ከሆነ ሜኑውን ዝጋ
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.remove('active');
    }

    const dropdown = document.getElementById('navDrop');
    if (dropdown) {
        dropdown.classList.remove('show');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// የቀድሞው የቋንቋ እና የሞባይል ሜኑ ኮድ እዚህ ይቀጥላል...
function toggleLanguage() {
    document.body.classList.toggle('en-mode');
    document.body.classList.toggle('am-mode');
}

// Opens/closes the primary nav (Home/About/Gallery/Contact) on mobile
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Opens/closes the secondary "more" dropdown (Registration/Donate/Uploads/Terms)
function toggleMenu() {
    const overlay = document.getElementById("menuOverlay");
    
    // Toggles the 'open' class which slides the drawer inside/outside smoothly
    overlay.classList.toggle("open");
    const dropdown = document.getElementById('navDrop');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }}

function openDonateModal() {
    const modal = document.getElementById('donateModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }
}

function closeDonateModal() {
    const modal = document.getElementById('donateModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile hamburger (#mobile-menu) for the primary nav links ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileNav);
        mobileMenuBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileNav();
            }
        });
    }

    // --- Close the secondary dropdown when clicking outside of it ---
    window.addEventListener('click', (event) => {
        const dropdown = document.getElementById('navDrop');
        if (dropdown && dropdown.classList.contains('show') && !event.target.closest('.menu-container')) {
            dropdown.classList.remove('show');
        }
    });

    // --- Gallery image viewer ---
    const viewer = document.getElementById('imageViewer');
    const viewerImg = document.getElementById('viewerImg');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.photo-card img').forEach(img => {
        img.addEventListener('click', () => {
            if (viewer && viewerImg) {
                viewer.style.display = 'flex';
                viewerImg.src = img.src;
            }
        });
    });

    if (closeBtn && viewer) {
        closeBtn.addEventListener('click', () => {
            viewer.style.display = 'none';
        });
    }

    if (viewer) {
        viewer.addEventListener('click', (e) => {
            if (e.target !== viewerImg) {
                viewer.style.display = 'none';
            }
        });
    }

    // --- Fullscreen on video click (targets the <video> tags directly,
    //     not their wrapping .fullscreen-video article) ---
    document.querySelectorAll('.fullscreen-video video').forEach(video => {
        video.addEventListener('click', () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            }
        });
    });

    // --- Donate modal: close button + click-outside-to-close ---
    const donateModal = document.getElementById('donateModal');
    const donateCloseBtn = document.getElementById('donateCloseBtn');

    if (donateCloseBtn) {
        donateCloseBtn.addEventListener('click', closeDonateModal);
    }
    if (donateModal) {
        donateModal.addEventListener('click', (e) => {
            if (e.target === donateModal) {
                closeDonateModal();
            }
        });
    }

    // --- Upload form: live name-match validation ---
    const uploaderNameInput = document.getElementById('uploaderName');
    const registeredNameField = document.getElementById('registeredName');
    const fileInput = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    const nameFeedback = document.getElementById('nameFeedback');
    const submitBtn = document.getElementById('submitBtn');

    if (uploaderNameInput && registeredNameField && fileInput && fileNameDisplay && nameFeedback && submitBtn) {
        const registeredName = registeredNameField.value.trim().toLowerCase();

        function validateForm() {
            const enteredName = uploaderNameInput.value.trim().toLowerCase();
            const isFileSelected = fileInput.files.length > 0;

            if (enteredName === '') {
                nameFeedback.textContent = '';
                submitBtn.disabled = false;
                return;
            }

            if (enteredName === registeredName) {
                nameFeedback.textContent = '✓ Name matches registration record.';
                nameFeedback.className = 'feedback-msg success';
                submitBtn.disabled = !isFileSelected;
            } else {
                nameFeedback.textContent = '';
                nameFeedback.className = 'feedback-msg error';
                submitBtn.disabled = true;
            }
        }

        fileInput.addEventListener('change', () => {
            fileNameDisplay.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file chosen';
            validateForm();
        });

        uploaderNameInput.addEventListener('input', validateForm);
    }
});

// Replace with your actual Laravel local server URL
const API_URL = 'http://localhost:8000/api/elshaday-web-info';

function getElshadayData() {
    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            console.log(result.data);
            // Example: Inject data into an HTML element with id "content"
            document.getElementById('content').innerText = JSON.stringify(result.data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Run the function when the page loads
window.onload = getElshadayData;


function handleTikTok() {
    console.log("TikTok button clicked!");
    
    const displayArea = document.getElementById('dynamic-display-area');
    
    // Perform your function logic here
    displayArea.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #FE2C55; background: #f9f9f9;">
        </div>
    `;

    // Direct action: Open target link
        window.open('https://www.tiktok.com/@elshadaycharity', '_blank');
    }


// 2. Telegram Function
function handleTelegram() {
    console.log("Telegram button pressed. Running Telegram routine...");
    
    const displayArea = document.getElementById('dynamic-display-area');
    displayArea.innerHTML = `
        <div class="card">
        </div>
    `;
    
    window.open('https://t.me/@ኤልሻዳይ በጎ አድራጎት', '_blank');
}

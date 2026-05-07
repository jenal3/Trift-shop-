document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginPage = document.getElementById('login-page');
    const dashboardPage = document.getElementById('dashboard-page');
    const logoutBtn = document.getElementById('logout-btn');
    const errorMsg = document.getElementById('error-msg');

    // Cek LocalStorage untuk status login
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showPage('dashboard-page');
    }

    // Event: Login Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById('password').value;

        if (passwordInput === '123') {
            errorMsg.innerText = "";
            localStorage.setItem('isLoggedIn', 'true');
            showPage('dashboard-page');
        } else {
            errorMsg.innerText = "Password salah, silakan coba lagi";
            // Shake effect on error
            loginForm.classList.add('shake');
            setTimeout(() => loginForm.classList.remove('shake'), 500);
        }
    });

    // Event: Logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        showPage('login-page');
    });

    // Fungsi Navigasi Halaman
    function showPage(pageId) {
        // Sembunyikan semua halaman
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
            setTimeout(() => {
                page.style.display = 'none';
            }, 300);
        });

        // Tampilkan halaman tujuan
        setTimeout(() => {
            const target = document.getElementById(pageId);
            target.style.display = 'block';
            setTimeout(() => target.classList.add('active'), 50);
        }, 350);
    }
});

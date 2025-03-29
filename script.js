
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.body.appendChild(mobileMenuBtn);
        
        const sidebar = document.querySelector('.sidebar');
        
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
        document.addEventListener('click', function(event) {
            if (!sidebar.contains(event.target) && 
                event.target !== mobileMenuBtn && 
                !mobileMenuBtn.contains(event.target)) {
                sidebar.classList.remove('active');
            }
        });
    });

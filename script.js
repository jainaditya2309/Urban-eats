document.addEventListener('DOMContentLoaded', function() {
    // Fix the mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('change', function() {
            document.body.style.overflow = this.checked ? 'hidden' : '';
        });
    }

    // Close menu when clicking on menu items (for mobile)
    const menuItems = document.querySelectorAll('.menu-items a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (menuToggle) {
                menuToggle.checked = false;
                document.body.style.overflow = '';
            }
        });
    });
    
    // Date in footer if needed
    function newDate() {
        return new Date().getFullYear();
    }
    
    const autodate = document.getElementById("autodate");
    if (autodate) {
        autodate.innerHTML = newDate();
    }
});

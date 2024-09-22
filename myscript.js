var menuIcon = document.getElementById('menuicon');
        var sideNav = document.getElementById('sidenav');
        var closeNav = document.getElementById('closeNav');

        // Function to open the side navigation
        menuIcon.addEventListener('click', () => {
            sideNav.style.right = '0'; // Slide in the side nav
        });

        // Function to close the side navigation
        closeNav.addEventListener('click', () => {
            sideNav.style.right = '-50%'; // Slide out the side nav
        });
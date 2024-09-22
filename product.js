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


        var productContainer=document.getElementById("productContainer")
        var search =document.getElementById("search")
        var productlist=productContainer.querySelectorAll("div")

        search.addEventListener("keyup", function(){
            var enteredValue=event.target.value.toUpperCase()
            for(count=0;count<productlist.length;count=count+1)
            {
                var productname=productlist[count].querySelector("h1").textContent

                if(productname.toUpperCase().indexOf(enteredValue)<0)
                {
                    productlist[count].style.display="none"
                }
                else{
                    productlist[count].style.display="block"
                }
                }
        })
document.addEventListener("DOMContentLoaded", function() {
    const container=document.getElementById('container')
    const signIn=document.getElementById('signIn-updated')
    const signUp=document.getElementById('signup-updated')

    signUp.addEventListener('click',function () {
        container.classList.add("right-active")
        // console.log("added");
    })

    signIn.addEventListener('click',function () {
        container.classList.remove("right-active")
        // console.log("removed");
    })

        const form = document.getElementById("formSignup");
        // console.log(form);
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("nameId").value;
            // console.log(username);
            // Redirect to the next page with the username as a query parameter
            window.location.href = `../../index.html?username=${username}`;
        });
});

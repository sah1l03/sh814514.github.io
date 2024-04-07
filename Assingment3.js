
        function togggleForm(formId) {
            const form = document.getElementById(formId);
            form.style.display = (form.style.display === 'none') ? 'block' : 'none';
        }

        function formValidation(formId) {
            const form = document.getElementById(formId);
            const firstName = form.elements['fname'].value.trim();
            const lastName = form.elements['lname'].value.trim();
            const Mycontact = form.elements['email'].value.trim();
            const description = form.elements['description'].value.trim();
            const date = form.elements['date'].value;

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

            const errorDiv = document.getElementById(`${formId}-unfuctional`);

            errorDiv.textContent = '';

            if (firstName === '' || lastName === '' || email === '' || description === '' || date === '') {
                errorDiv.textContent = 'All fields are required';
                return false;
            }
            if (!emailPattern.test(email)) {
                errorDiv.textContent = 'Invalid email address';
                return false;
            }

            return true;
        }

        function setDateToMin() {
            const dateInputs = document.querySelectorAll('input[type="date"]');
            const today = new Date().toISOString().split('T')[0];

            dateInputs.forEach(input => {
                input.min = today;
            });
        }

        const colorSchemes = [
            ['lightblue'],
            ['lightgray']
        ];

        let currentSchemeIndex = 0;

        function backgroundColorChange() {
            const [backgroundColor] = colorSchemes[currentSchemeIndex];
            document.body.style.backgroundColor = backgroundColor;
            document.querySelector('.container-for-head').style.backgroundColor = backgroundColor;
            currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
        }

        function backgroundColorReset() {
            document.body.style.backgroundColor = '';
            document.querySelector('.container-for-head').style.backgroundColor = '';
            currentSchemeIndex = 0;
        }

        function togggleForm(formId) {
            const form = document.getElementById(formId);
            form.style.display = (form.style.display === 'none') ? 'block' : 'none';
        }

        document.querySelectorAll('#navigation-bar a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                const navbarHeight = document.querySelector('.container-for-head').offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            });
        });
   

/*======================================= SIDEBAR =============================================  */
document.addEventListener('DOMContentLoaded', function() {

  const dropdownToggles = document.querySelectorAll('.nav__dropdown > .nav__link');

  dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(event) {
          event.preventDefault();
          
          const dropdown = toggle.parentElement;
          const collapse = dropdown.querySelector('.nav__dropdown-collapse');
          const angleIcon = toggle.querySelector('.fa-angle-down');

          const allCollapses = document.querySelectorAll('.nav__dropdown-collapse');
          const allIcons = document.querySelectorAll('.fa-angle-down');
          allCollapses.forEach(item => {
              if (item !== collapse) {
                  item.classList.remove('show');
              }
          });
          allIcons.forEach(item => {
              if (item !== angleIcon) {
                  item.classList.remove('rotate');
              }
          });

          collapse.classList.toggle('show');
          angleIcon.classList.toggle('rotate');
      });
  });
});
/* ==============================  */
document.addEventListener("DOMContentLoaded", function () {
    const headerToggle = document.getElementById('header-toggle');
    const nav = document.getElementById('navbar');
    const toggleIcon = document.getElementById('toggle-icon');

    headerToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-x');
        } else {
            toggleIcon.classList.remove('fa-x');
            toggleIcon.classList.add('fa-bars');
        }
    });
});

function rld() {
    location.reload();
};
/* ================================== DOWNLOAD PDF ======================================= */
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelector('.nav__button').addEventListener('click', () => {
            // Get the element to convert to PDF
            const element = document.body;

            // Define the options for html2pdf
            const options = {
                margin:       [1,1,1,-10],
                filename:     'document.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 1, scrollX: 0, scrollY: 0, windowWidth: document.documentElement.offsetWidth },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // Generate the PDF
            html2pdf().from(element).set(options).save();
        });
    });
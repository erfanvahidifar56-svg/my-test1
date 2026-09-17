`javascript
// ================================
// Mobile Menu
// ================================

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });
}


// ================================
// Close Mobile Menu
// ================================

const mobileLinks = document.querySelectorAll("#mobile-nav a");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    mobileNav?.classList.remove("active");
  });
});


// ================================
// Smooth Scroll
// ================================

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ================================
// Footer Year
// ================================

const footerYear = document.getElementById("footer-year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}


// ================================
// Previous / Next Section
// ================================

const sections = document.querySelectorAll("section");

const sectionLinks = document.querySelectorAll(
  "[data-scroll-link]"
);

sectionLinks.forEach(link => {

  link.addEventListener("click", function (event) {

    event.preventDefault();

    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if (targetSection) {

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ================================
// Contact Form - Formspree
// ================================

const contactForm =
  document.getElementById("contact-form");

const formSuccess =
  document.getElementById("form-success");

const submitBtn =
  document.getElementById("submit-btn");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    async function (event) {

      // جلوگیری از رفتن به صفحه Formspree
      event.preventDefault();


      // ================================
      // گرفتن اطلاعات فرم
      // ================================

      const fullname =
        document.getElementById("fullname")?.value.trim();

      const email =
        document.getElementById("email")?.value.trim();

      const subject =
        document.getElementById("subject")?.value.trim();

      const message =
        document.getElementById("message")?.value.trim();


      // ================================
      // بررسی فرم
      // ================================

      if (
        !fullname ||
        !email ||
        !subject ||
        !message
      ) {

        alert(
          "لطفاً تمام فیلدها را پر کنید."
        );

        return;
      }


      // ================================
      // تغییر وضعیت دکمه
      // ================================

      if (submitBtn) {

        submitBtn.disabled = true;

        const btnText =
          submitBtn.querySelector(".btn-text");

        if (btnText) {
          btnText.textContent =
            "در حال ارسال...";
        }

      }


      // ================================
      // ارسال فرم به Formspree
      // ================================

      try {

        const response =
          await fetch(
            contactForm.action,
            {
              method: "POST",

              body:
                new FormData(contactForm),

              headers: {
                Accept: "application/json"
              }
            }
          );


        console.log(
          "Formspree response:",
          response.status
        );


        // ================================
        // ارسال موفق
        // ================================

        if (response.ok) {

          console.log(
            "FORM SENT SUCCESSFULLY"
          );


          // پاک کردن فرم
          contactForm.reset();


          // نمایش پیام موفقیت
          if (formSuccess) {

            formSuccess.textContent =
              "پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس خواهم گرفت.";

            formSuccess.hidden = false;


            // مخفی کردن پیام بعد از 5 ثانیه
            setTimeout(() => {

              formSuccess.hidden = true;

            }, 5000);

          }


        } else {

          alert(
            "ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید."
          );

        }


      } catch (error) {

        console.error(
          "FORM ERROR:",
          error
        );

        alert(
          "خطایی هنگام ارسال پیام رخ داد. لطفاً دوباره تلاش کنید."
        );

      }


      // ================================
      // فعال کردن دوباره دکمه
      // ================================

      finally {

        if (submitBtn) {

          submitBtn.disabled = false;

          const btnText =
            submitBtn.querySelector(".btn-text");

          if (btnText) {
            btnText.textContent =
              "ارسال پیام";
          }

        }

      }

    }
  );

}


// ================================
// Active Navigation
// ================================

const allSections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(
    'nav a[href^="#"]'
  );


window.addEventListener(
  "scroll",
  () => {

    let currentSection = "";


    allSections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;


      if (
        window.scrollY >= sectionTop
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navLinks.forEach(link => {

      link.classList.remove("active");


      if (
        link.getAttribute("href") ===
        `#${currentSection}`
      ) {

        link.classList.add("active");

      }

    });

  }
);


// ================================
// Console Message
// ================================

console.log(
  "ETWEBZO Website Loaded Successfully 🚀"
);
```

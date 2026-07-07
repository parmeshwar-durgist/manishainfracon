/**
 * Manisha Infracon Project Pvt. Ltd. - Core JavaScript
 * Handles custom animations, sticky headers, stats counter, filterable gallery, AOS animations, and chatbot.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 0. Inject Central Dynamic Header
  // ==========================================
  const injectHeader = () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = `
        <!-- Top Address Header Bar -->
        <div class="topbar d-none d-xl-block">
          <div class="container text-white d-flex justify-content-between align-items-center">
            <div class="topbar-info">
              <a href="tel:+917722052057" class="me-3"><i class="bi bi-telephone-fill text-orange me-2"></i>Enquiry: +91 77220 52057</a>
              <span class="topbar-divider me-3"></span>
              <a href="mailto:manisha.infracon99@gmail.com"><i class="bi bi-envelope-fill text-orange me-2"></i>manisha.infracon99@gmail.com</a>
            </div>
            <div class="topbar-hours">
              <i class="bi bi-geo-alt-fill text-orange me-2"></i>Plot No. 20, Bhagyodaya Housing Society, Savedi, Ahmednagar - 414 003.
            </div>
          </div>
        </div>

        <!-- Sticky Modern Glass Navbar -->
        <nav class="navbar navbar-expand-xl navbar-dark sticky-top">
          <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
              <img src="assets/images/logo.png" alt="Manisha Infracon Logo" style="height: 60px; width: auto; object-fit: contain;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
              aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNavbar">
              <ul class="navbar-nav ms-auto mb-2 mb-xl-0">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                
                <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                    <li><a class="dropdown-item" href="products.html?type=rmc">Ready Mix Concrete (RMC)</a></li>
                    <li><a class="dropdown-item" href="products.html?type=crusher">Crusher Materials</a></li>
                  </ul>
                </li>
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="processDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Process
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="processDropdown">
                    <li><a class="dropdown-item" href="manufacturing-process.html?type=rmc">RMC Process</a></li>
                    <li><a class="dropdown-item" href="manufacturing-process.html?type=crusher">Crusher Materials Process</a></li>
                  </ul>
                </li>

                <li class="nav-item"><a class="nav-link" href="infrastructure.html">Infrastructure</a></li>
                <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>

                <li class="nav-item"><a class="nav-link" href="quality-assurance.html">Quality</a></li>
                <li class="nav-item"><a class="nav-link" href="resources.html">Brochure</a></li>
                <li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
              </ul>
              <div class="ms-lg-3">
                <a href="contact.html" class="btn btn-primary-custom btn-custom"><i class="bi bi-boxes me-2"></i>Enquiry</a>
              </div>
            </div>
          </div>
        </nav>
      `;
    }
  };

  const injectFooter = () => {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = `
        <footer class="footer">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6">
                <a class="footer-logo d-flex align-items-center" href="index.html">
                  <img src="assets/images/logo.png" alt="Manisha Infracon Logo" style="height: 65px; width: auto; object-fit: contain;">
                </a>
                <p class="text-white-50 mb-4 pe-lg-4" style="font-size:0.9rem; line-height:1.6;">
                  Manisha Infracon Project Pvt. Ltd. is a leading manufacturer of Ready Mix Concrete (RMC) and premium blue basalt aggregates, supporting infrastructure, highways, and residential projects with high-integrity materials.
                </p>
                <div class="footer-social-links">
                  <a href="https://facebook.com" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                  <a href="https://x.com" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Twitter X"><i class="bi bi-twitter-x"></i></a>
                  <a href="https://youtube.com" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                  <a href="https://instagram.com" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                </div>
              </div>

              <div class="col-lg-2 col-md-6">
                <h5 class="footer-heading">Quick Links</h5>
                <ul class="footer-links">
                  <li><a href="index.html"><i class="bi bi-chevron-right"></i>Home</a></li>
                  <li><a href="about.html"><i class="bi bi-chevron-right"></i>About Us</a></li>
                  <li><a href="services.html"><i class="bi bi-chevron-right"></i>Contracting Services</a></li>
                  <li><a href="products.html?type=rmc"><i class="bi bi-chevron-right"></i>RMC Products</a></li>
                  <li><a href="products.html?type=crusher"><i class="bi bi-chevron-right"></i>Crusher Materials</a></li>
                  <li><a href="manufacturing-process.html"><i class="bi bi-chevron-right"></i>Process Flow</a></li>
                  <li><a href="infrastructure.html"><i class="bi bi-chevron-right"></i>Infrastructure</a></li>
                  <li><a href="projects.html"><i class="bi bi-chevron-right"></i>Our Projects</a></li>

                  <li><a href="quality-assurance.html"><i class="bi bi-chevron-right"></i>Quality & Safety</a></li>
                  <li><a href="faq.html"><i class="bi bi-chevron-right"></i>FAQ Database</a></li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6">
                <h5 class="footer-heading">Our Divisions</h5>
                <ul class="footer-links">
                  <li><a href="services.html"><i class="bi bi-chevron-right"></i>Bitumen & CC Roads</a></li>
                  <li><a href="services.html"><i class="bi bi-chevron-right"></i>Bridges & Flyovers</a></li>
                  <li><a href="services.html"><i class="bi bi-chevron-right"></i>Building Construction</a></li>
                  <li><a href="services.html"><i class="bi bi-chevron-right"></i>Land Development</a></li>
                  <li><a href="products.html?type=rmc"><i class="bi bi-chevron-right"></i>Ready Mix Concrete (RMC)</a></li>
                  <li><a href="products.html?type=crusher"><i class="bi bi-chevron-right"></i>Crusher Aggregates</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6">
                <h5 class="footer-heading">Downloads</h5>
                <ul class="footer-links">
                  <li><a href="#" data-brochure-download="company_profile"><i class="bi bi-file-earmark-arrow-down-fill text-orange me-2"></i>Download Company Profile</a></li>
                  <li><a href="#" data-brochure-download="service_catalogue"><i class="bi bi-file-earmark-arrow-down-fill text-orange me-2"></i>Download Service Catalogue</a></li>
                  <li><a href="#" data-brochure-download="quality_assurance"><i class="bi bi-file-earmark-arrow-down-fill text-orange me-2"></i>Download Quality Brochure</a></li>
                  <li><a href="resources.html" class="fw-bold text-orange mt-2 d-inline-block"><i class="bi bi-folder2-open me-2"></i>Resources & Downloads</a></li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6">
                <h5 class="footer-heading">Newsletter</h5>
                <p class="footer-newsletter-text" style="font-size:0.8rem; line-height:1.4;">
                  Subscribe to our corporate newsletter to receive regular updates on pricing tables and availability indices.
                </p>
                <form class="newsletter-form">
                  <div class="input-group">
                    <input type="email" class="form-control" placeholder="Your Email" required style="font-size:0.8rem;">
                    <button class="btn btn-primary-custom" type="submit" style="padding: 0 10px;"><i class="bi bi-send-fill" style="font-size:0.8rem;"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col-md-6 text-md-start mb-3 mb-md-0" style="font-size:0.85rem;">
                  &copy; 2026 Manisha Infracon Project Pvt. Ltd. All rights reserved.
                </div>
                <div class="col-md-6 text-md-end footer-bottom-links" style="font-size:0.85rem;">
                  <a href="privacy-policy.html">Privacy Policy</a>
                  <a href="terms-conditions.html">Terms & Conditions</a>
                  <a href="contact.html">Support</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      `;
    }
  };

  const injectFloatingButtons = () => {
    // Inject WhatsApp Floating Button dynamically
    if (!document.querySelector('.whatsapp-float')) {
      const waFloat = document.createElement('a');
      waFloat.href = "https://wa.me/917722052057?text=Hello%20Manisha%20Infracon,%20I%20would%20like%20more%20information.";
      waFloat.className = 'whatsapp-float';
      waFloat.target = '_blank';
      waFloat.setAttribute('aria-label', 'Chat on WhatsApp');
      waFloat.innerHTML = '<i class="bi bi-whatsapp"></i>';
      document.body.appendChild(waFloat);
    }

    // Inject Back to Top Button dynamically
    if (!document.querySelector('.back-to-top')) {
      const backToTop = document.createElement('button');
      backToTop.className = 'back-to-top';
      backToTop.setAttribute('aria-label', 'Back to top');
      backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
      document.body.appendChild(backToTop);
    }
  };

  // Inject dynamic header, footer, and modals before query selectors run
  injectHeader();
  injectFooter();
  injectBrochureModals();
  injectFloatingButtons();

  // ==========================================
  // 1. Preloader Fade Out
  // ==========================================
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const hidePreloader = () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
      }, 500); // 500ms smooth delay
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }
  }

  // ==========================================
  // 2. Sticky Navbar Scroll State
  // ==========================================
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check
  }

  // ==========================================
  // 3. Dynamic Active Navbar Links Based on Path
  // ==========================================
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Handle dropdown active state and highlight parent dropdown trigger
  dropdownItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href) {
      const file = href.split('?')[0];
      if (file === currentPath) {
        item.classList.add('active-item');
        const parentToggle = item.closest('.dropdown').querySelector('.nav-link');
        if (parentToggle) {
          parentToggle.classList.add('active');
        }
      }
    }
  });

  // ==========================================
  // 4. Initialize AOS Animations
  // ==========================================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-in-out'
    });
  }

  // ==========================================
  // 5. Animated Stats Counters
  // ==========================================
  const counterElements = document.querySelectorAll('.stat-num');
  if (counterElements.length > 0) {
    const startCounterAnimation = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const duration = 2000; // Animation duration in ms
      const stepTime = Math.max(Math.floor(duration / target), 15);
      let current = 0;
      const suffix = el.getAttribute('data-suffix') || '';

      const timer = setInterval(() => {
        current += Math.ceil(target / (duration / stepTime));
        if (current >= target) {
          el.textContent = target.toLocaleString() + suffix;
          clearInterval(timer);
        } else {
          el.textContent = current.toLocaleString() + suffix;
        }
      }, stepTime);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounterAnimation(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // ==========================================
  // 6. Back To Top Button Behavior
  // ==========================================
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 7. Interactive Filterable Gallery
  // ==========================================
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item-col');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (item.timeoutId) {
            clearTimeout(item.timeoutId);
          }

          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            item.timeoutId = setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            item.timeoutId = setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ==========================================
  // 8. Custom Lightbox Modal Injector
  // ==========================================
  const lightboxTriggers = document.querySelectorAll('[data-lightbox-src]');
  const lightboxModalEl = document.getElementById('lightboxModal');

  if (lightboxTriggers.length > 0 && lightboxModalEl) {
    const modalImage = lightboxModalEl.querySelector('.lightbox-modal-img');
    const modalCaption = lightboxModalEl.querySelector('.lightbox-modal-caption');

    lightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const src = trigger.getAttribute('data-lightbox-src');
        const caption = trigger.getAttribute('data-lightbox-caption') || '';

        if (modalImage) modalImage.setAttribute('src', src);
        if (modalCaption) modalCaption.textContent = caption;
      });
    });
  }

  // ==========================================
  // 9. Get Estimate Dynamic Modal Pre-fill
  // ==========================================
  const quoteModalEl = document.getElementById('quoteModal');
  if (quoteModalEl) {
    const productSelect = quoteModalEl.querySelector('#quoteProductSelect');

    quoteModalEl.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      if (button && productSelect) {
        const productName = button.getAttribute('data-product');
        if (productName) {
          productSelect.value = productName;
        }
      }
    });
  }

  // Brochure/Company Profile modal reset listener (Homepage)
  const brochureModalEl = document.getElementById('brochureModal');
  if (brochureModalEl) {
    const brForm = document.getElementById('brochureForm');
    const brSuccess = document.getElementById('brochureSuccess');
    brochureModalEl.addEventListener('hidden.bs.modal', () => {
      if (brForm) {
        brForm.reset();
        brForm.classList.remove('was-validated', 'd-none');
      }
      if (brSuccess) brSuccess.classList.add('d-none');
    });
  }

  // ==========================================
  // 10. Bootstrap Form Validation & Web3Forms / WhatsApp Submit
  // ==========================================
  const WEB3FORMS_CONFIG = {
    AccessKey: "ecde10e6-1391-4bd1-94ae-b51edc196dfe", // Web3Forms Access Key
    ToEmail: "manisha.infracon99@gmail.com"
  };


  // ecde10e6-1391-4bd1-94ae-b51edc196dfe manisha infracon
  // abda9378-b774-4cf5-8a5a-b4692df25017  parmeshwar 

  const WHATSAPP_CONFIG = {
    Number: "917722052057" // Default primary WhatsApp contact (formatted with country code)
  };

  const showErrorAlert = (form, errorMsg, submitBtn, originalBtnHTML) => {
    const existingAlerts = form.parentElement.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());

    const formParent = form.parentElement;
    const errorAlert = document.createElement('div');
    errorAlert.className = 'alert alert-danger alert-dismissible fade show mt-4';
    errorAlert.innerHTML = `
      <strong><i class="bi bi-exclamation-triangle-fill me-2"></i>Submission Failed</strong><br>
      ${errorMsg}
      <br>Please verify your inputs or contact us directly at <strong>+91 77220 52057</strong>.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    formParent.appendChild(errorAlert);
    errorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHTML;
  };

  const validatedForms = document.querySelectorAll('.needs-validation');
  validatedForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      form.classList.add('was-validated');

      const submitBtn = form.querySelector('[type="submit"]');
      const originalBtnHTML = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing...`;

      let payload = {
        access_key: WEB3FORMS_CONFIG.AccessKey,
        from_name: "",
        email: ""
      };

      let waText = `*New Inquiry: Manisha Infracon Project Pvt. Ltd.*\n\n`;
      let brochureToDownload = ""; // Key for instant download on success

      if (form.id === 'contactPageForm') {
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value;
        const product = document.getElementById('contactProduct').value;
        const message = document.getElementById('contactMsg').value;

        brochureToDownload = product ? 'service_catalogue' : 'company_profile';
        const brochureLink = window.location.origin + '/resources.html?download=' + brochureToDownload;

        payload.subject = `New Contact Inquiry from ${name}`;
        payload.from_name = name;
        payload.email = email;
        payload["Phone Number"] = phone;
        payload["Service / Material Required"] = product || 'Not specified';
        payload["Recommended Brochure Link"] = brochureLink;
        payload.message = message;

        waText += `*Name:* ${name}\n`;
        waText += `*Email:* ${email}\n`;
        waText += `*Phone:* ${phone}\n`;
        waText += `*Service/Material Required:* ${product || 'Not specified'}\n`;
        waText += `*Message:* ${message}\n`;
      } else if (form.id === 'homepageContactForm') {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const product = document.getElementById('concreteGrade').value; // mapping to aggregates select list
        const message = document.getElementById('message').value;

        brochureToDownload = product ? 'service_catalogue' : 'company_profile';
        const brochureLink = window.location.origin + '/resources.html?download=' + brochureToDownload;

        payload.subject = `New Homepage Inquiry from ${name}`;
        payload.from_name = name;
        payload.email = email;
        payload["Phone Number"] = phone;
        payload["Service / Material Required"] = product || 'Not specified';
        payload["Recommended Brochure Link"] = brochureLink;
        payload.message = message;

        waText += `*Name:* ${name}\n`;
        waText += `*Email:* ${email}\n`;
        waText += `*Phone:* ${phone}\n`;
        waText += `*Service/Material Required:* ${product || 'Not specified'}\n`;
        waText += `*Message:* ${message}\n`;
      } else if (form.id === 'quoteRequestForm') {
        const name = document.getElementById('quoteName').value;
        const email = document.getElementById('quoteEmail').value;
        const phone = document.getElementById('quotePhone').value;
        const product = document.getElementById('quoteProductSelect').value;
        const qty = document.getElementById('quoteQty').value;
        const message = document.getElementById('quoteMessage').value;

        brochureToDownload = 'service_catalogue';
        const brochureLink = window.location.origin + '/resources.html?download=' + brochureToDownload;

        payload.subject = `New Material Estimate Request from ${name}`;
        payload.from_name = name;
        payload.email = email;
        payload["Phone Number"] = phone;
        payload["Required Material / Service"] = product;
        payload["Estimated Tonnage (tons)"] = qty;
        payload["Recommended Brochure Link"] = brochureLink;
        payload.message = message || 'None';

        waText += `*Name:* ${name}\n`;
        waText += `*Email:* ${email}\n`;
        waText += `*Phone:* ${phone}\n`;
        waText += `*Material/Service:* ${product}\n`;
        waText += `*Quantity:* ${qty} Tons\n`;
        waText += `*Message:* ${message || 'None'}\n`;
      } else if (form.id === 'brochureForm') {
        const name = document.getElementById('brochureName').value.trim();
        const email = document.getElementById('brochureEmail').value.trim();
        const phone = document.getElementById('brochurePhone').value.trim();
        const company = document.getElementById('brochureCompany').value.trim();
        const product = document.getElementById('brochureProduct').value;
        const message = document.getElementById('brochureMessage').value.trim() || 'None';

        const brochureLink = window.location.origin + '/resources.html?download=' + activeBrochureKey;

        payload.subject = `New Brochure Lead: ${name} (${company})`;
        payload.from_name = name;
        payload.email = email;
        payload["Phone Number"] = phone;
        payload["Company Name"] = company;
        payload["Service / Material Required"] = product || 'Not specified';
        payload["Requested Brochure"] = activeBrochureKey;
        payload["Brochure Download Link"] = brochureLink;
        payload.message = message;

        // Save lead to localStorage
        const leadData = { name, phone, email, company, product, message };
        localStorage.setItem('brochure_lead', JSON.stringify(leadData));
      } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        return;
      }

      // Open WhatsApp directly for non-brochure forms
      if (form.id !== 'brochureForm') {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const waUrl = isMobile
          ? `whatsapp://send?phone=${WHATSAPP_CONFIG.Number}&text=${encodeURIComponent(waText)}`
          : `https://wa.me/${WHATSAPP_CONFIG.Number}?text=${encodeURIComponent(waText)}`;
        window.open(waUrl, '_blank');
      }

      // Submit to Web3Forms API in background
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200 || json.success) {
            if (form.id === 'brochureForm') {
              // Hide Modal
              const brochureModal = bootstrap.Modal.getInstance(document.getElementById('brochureModal'));
              if (brochureModal) brochureModal.hide();

              // Retrieve lead details
              const savedLead = localStorage.getItem('brochure_lead');
              let leadData = null;
              if (savedLead) {
                try { leadData = JSON.parse(savedLead); } catch (e) { }
              }

              // Trigger download or preview
              executeBrochureAction(activeBrochureKey, activeAction, leadData);

              // Reset form
              form.reset();
              form.classList.remove('was-validated');

              // Show confirmation alert
              alert(`Thank you, ${leadData ? leadData.name : 'Visitor'}! Your request has been verified. The download will start automatically.`);
            } else {
              form.reset();
              form.classList.remove('was-validated');

              const existingAlerts = form.parentElement.querySelectorAll('.alert');
              existingAlerts.forEach(alert => alert.remove());

              const formParent = form.parentElement;
              const successAlert = document.createElement('div');
              successAlert.className = 'alert alert-success alert-dismissible fade show mt-4';

              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              const waUrl = isMobile
                ? `whatsapp://send?phone=${WHATSAPP_CONFIG.Number}&text=${encodeURIComponent(waText)}`
                : `https://wa.me/${WHATSAPP_CONFIG.Number}?text=${encodeURIComponent(waText)}`;

              const brochureTitle = brochureToDownload === 'service_catalogue' ? 'Service Catalogue' : 'Company Profile';

              successAlert.innerHTML = `
                <strong><i class="bi bi-check-circle-fill me-2"></i>Inquiry Submitted Successfully!</strong><br>
                Your requirements have been recorded and we have automatically started downloading our <strong>${brochureTitle}</strong> brochure for you.
                <br>A brochure download link has also been requested for your email: <strong>${payload.email}</strong>.
                <br><br>
                <a href="${waUrl}" target="_blank" class="btn btn-success btn-sm text-white" style="font-size: 0.85rem; border-radius: 6px; padding: 6px 12px;">
                  <i class="bi bi-whatsapp me-1"></i> Send via WhatsApp Again
                </a>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              `;
              formParent.appendChild(successAlert);
              successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

              // Auto-trigger brochure download
              setTimeout(() => {
                executeBrochureAction(brochureToDownload, 'download', null);
              }, 800);

              const modalEl = form.closest('.modal');
              if (modalEl) {
                setTimeout(() => {
                  const bootstrapModal = bootstrap.Modal.getInstance(modalEl);
                  if (bootstrapModal) {
                    bootstrapModal.hide();
                  }
                }, 4500);
              }
            }
          } else {
            showErrorAlert(form, json.message || 'Error sending inquiry.', submitBtn, originalBtnHTML);
          }
        })
        .catch(error => {
          if (form.id === 'brochureForm') {
            // Fallback for brochure form
            const brochureModal = bootstrap.Modal.getInstance(document.getElementById('brochureModal'));
            if (brochureModal) brochureModal.hide();

            const savedLead = localStorage.getItem('brochure_lead');
            let leadData = null;
            if (savedLead) {
              try { leadData = JSON.parse(savedLead); } catch (e) { }
            }
            executeBrochureAction(activeBrochureKey, activeAction, leadData);
          } else {
            showErrorAlert(form, `Network or server error: ${error.message || error}`, submitBtn, originalBtnHTML);
          }
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        });
    }, false);
  });

  // ==========================================
  // 11. Newsletter Form Submit Message
  // ==========================================
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert('Thank you for subscribing to our corporate updates!');
        emailInput.value = '';
      }
    });
  });

  // ==========================================
  // 12. AI Agent Chatbot Widget Core Logic & Aggregates Q&A
  // ==========================================

  const CHAT_DATABASE = {
    rmc: {
      title: "Ready Mix Concrete (RMC)",
      questions: [
        {
          q: "What grades of Ready Mix Concrete (RMC) do you supply?",
          a: "We supply standard and high-performance RMC grades ranging from <strong>M7.5 to M80</strong>. This includes specialized formulations like Self-Compacting Concrete (SCC), Slab Concrete for IHB, Pump Concrete, and PP/Steel Fiber Reinforced Concrete."
        },
        {
          q: "What is your RMC production capacity?",
          a: "Our computerized, fully automated RMC batching plant has a high production capacity of <strong>120 Cu.M per hour</strong>, equipped with twin-shaft mixers that guarantee maximum concrete consistency and homogeneity."
        },
        {
          q: "What is Self-Compacting Concrete (SCC)?",
          a: "<strong>Self-Compacting Concrete (SCC)</strong> is a highly flowable concrete mix that flows easily into dense reinforcement structures and complex formworks without the need for mechanical vibration, eliminating internal honeycombing."
        },
        {
          q: "What concrete is best for residential roofs (IHB)?",
          a: "Our <strong>Slab Concrete for IHB (Individual House Builders)</strong> is optimized for residential slabs. It has balanced slump workability and specialized hydration rates to minimize early-age thermal cracks, giving a premium cured finish."
        }
      ]
    },
    crusher: {
      title: "Crusher Plant",
      questions: [
        {
          q: "Where is your Crusher Plant located and what is its capacity?",
          a: "Our advanced stone crusher plant is located in Ahilyanagar and has a production capacity of <strong>350 Tons per hour</strong>. We process premium blue basalt rocks using primary jaw crushers and secondary cone crushers."
        },
        {
          q: "What crusher materials do you manufacture?",
          a: "We manufacture high-grade <strong>Basalt Aggregates</strong> (sizes: 6mm, 10mm, 20mm, 40mm, 60mm, 80mm), <strong>GSB (Granular Sub Base)</strong> materials, and manufactured sands like <strong>M-Sand, Cone Sand, and washed sands</strong>."
        },
        {
          q: "What is the source of your crusher feedstock?",
          a: "We source our raw materials from our own certified high-density basalt quarries. This ensures total control over the raw stone density, strength, and geological properties before it enters our crushers."
        }
      ]
    },
    aggregates: {
      title: "Aggregates",
      questions: [
        {
          q: "What aggregate sizes do you manufacture?",
          a: "We manufacture high-grade aggregates in sizes: <strong>80 MM, 60 MM, 40 MM</strong> (for heavy infrastructure bases, drainage, and foundations) and VSI quality <strong>20 MM, 10 MM, and 6 MM</strong> (for structural concrete, RCC works, and paver blocks)."
        },
        {
          q: "What is VSI Aggregate and its benefits?",
          a: "<strong>VSI (Vertical Shaft Impact)</strong> aggregates are manufactured using VSI crushers which produce cubically shaped stones with zero flaky or elongated particles. This shape improves concrete workability, reduces cement/sand demands, and maximizes compressive strength."
        },
        {
          q: "Where is 40 MM and 60 MM aggregate used?",
          a: "<strong>40 MM Aggregate</strong> is primarily used for sub-base road construction, heavy concrete foundations, bulk retaining walls, and drainage works. <strong>60 MM and 80 MM Aggregates</strong> are suited for railway ballast, heavy road base courses, and soil stabilization."
        }
      ]
    },
    sands: {
      title: "M-Sand & Sands",
      questions: [
        {
          q: "What is M-Sand (Crush Sand)?",
          a: "<strong>M-Sand (Manufactured Sand)</strong> is a substitute for river sand. Our Crush Sand is crushed from hard blue basalt stones. It is graded to meet zone-II sand standards, contains no silt, and provides superior bonding and structural strength."
        },
        {
          q: "What are Cone Sand and Wash Sand?",
          a: "<strong>Cone Sand</strong> is a finely graded sand crushed through cone machines, ideal for brickwork masonry and plastering. <strong>Wash Sand</strong> is double-washed to remove micro-fine dust, resulting in premium quality sand for high-strength concrete mixes."
        },
        {
          q: "Why choose Manufactured Sand over River Sand?",
          a: "M-Sand is <strong>environmentally friendly</strong>, has zero silt content (river sand can contain up to 10% silt), is highly consistent in grain size, and contains no organic impurities, making it stronger and more reliable for structural concrete."
        }
      ]
    },
    gsb: {
      title: "GSB Materials",
      questions: [
        {
          q: "What is GSB (Granular Sub Base)?",
          a: "<strong>Granular Sub Base (GSB)</strong> is a blend of crushed stone aggregates and rock dust. It serves as the primary load-bearing foundation layer in road and highway construction, distributing the wheel load and facilitating water drainage."
        },
        {
          q: "What standards does your GSB meet?",
          a: "Our GSB material conforms strictly to <strong>MORTH (Ministry of Road Transport and Highways) specifications</strong>, ensuring optimum particle size distribution, moisture contents, and high dry density compaction parameters."
        }
      ]
    },
    quality: {
      title: "Quality & Testing",
      questions: [
        {
          q: "How do you test your materials?",
          a: "Our testing processes include: <strong>Flakiness and Elongation index tests, Sieve Particle Size Analysis, Aggregate Impact Values (AIV), Aggregate Crushing Values (ACV)</strong>, and moisture content testing conducted daily at our certified testing laboratory."
        },
        {
          q: "Do your materials and services have quality certifications?",
          a: "Yes, all our stone materials, services, and manufactured sands are fully tested to meet <strong>Indian Standards (IS:383)</strong> codes. We provide material test certificates (MTC) with every major bulk dispatch."
        }
      ]
    },
    delivery: {
      title: "Delivery & Orders",
      questions: [
        {
          q: "What is the delivery lead time?",
          a: "Orders are processed immediately. Depending on the size of the order and site location, we typically dispatch and deliver materials <strong>within 12 to 24 hours</strong> of booking confirmations."
        },
        {
          q: "What vehicles are in your transportation fleet?",
          a: "Our fleet consists of over <strong>50 transit dumpers, heavy-duty tippers, and multi-axle trucks</strong>. This allows us to supply infrastructure materials continuously, 24/7, directly to highway or commercial construction sites."
        },
        {
          q: "How can I get a quotation?",
          a: "Simply click the <strong>'Get Quote'</strong> button in the navigation or on any service card, fill in your required tonnage, and submit it. Our sales engineers will send a custom proposal, or you can call us at <strong>+91 77220 52057</strong>."
        }
      ]
    }
  };

  const injectChatbot = () => {
    const chatWidgetHTML = `
      <div class="chat-widget" id="chatWidget">
        <style>
          .chat-chip-container {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 12px;
            margin-bottom: 8px;
          }
          .chat-chip {
            background-color: rgba(11, 61, 145, 0.05);
            color: #0b3d91;
            border: 1px solid rgba(11, 61, 145, 0.15);
            border-radius: 16px;
            padding: 5px 10px;
            font-size: 0.72rem;
            cursor: pointer;
            transition: all 0.2s ease;
            font-weight: 600;
          }
          .chat-chip:hover {
            background-color: #ff6b00;
            color: #ffffff;
            border-color: #ff6b00;
          }
          .chat-chip.active {
            background-color: #0b3d91;
            color: #ffffff;
            border-color: #0b3d91;
          }
          .chat-questions-list {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 8px;
            animation: fadeInChat 0.3s ease;
            border-top: 1px solid #f1f5f9;
            padding-top: 10px;
          }
          .chat-question-item {
            background-color: #ffffff;
            color: #334155;
            border: 1px dashed #ff6b00;
            border-radius: 8px;
            padding: 8px 12px;
            font-size: 0.76rem;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s ease;
            line-height: 1.35;
          }
          .chat-question-item:hover {
            background-color: #fff7ed;
            color: #ff6b00;
            border-style: solid;
          }
          .chat-message.bot .message-content strong {
            color: #ff6b00;
          }
          @keyframes fadeInChat {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>

        <button class="chat-toggle-btn" id="chatToggleBtn" aria-label="Open Chat">
          <i class="bi bi-chat-right-text-fill"></i>
          <span class="chat-badge d-none">1</span>
        </button>
        <div class="chat-window d-none" id="chatWindow">
          <div class="chat-header">
            <div class="d-flex align-items-center">
              <div class="chat-avatar bg-orange text-white me-2 d-flex align-items-center justify-content-center" style="width:36px; height:36px; border-radius:50%; border:2px solid rgba(255,255,255,0.2);">
                <i class="bi bi-gear-fill"></i>
              </div>
              <div>
                <h6 class="mb-0 fw-bold text-white" style="font-size:0.9rem; line-height:1.2;">Manisha Crusher Assistant</h6>
                <small class="text-white-50 text-xs" style="font-size:0.7rem; display:block; margin-top:2px;">Online Support Assistant</small>
              </div>
            </div>
            <button class="chat-close-btn" id="chatCloseBtn" aria-label="Close Chat">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <div class="chat-body" id="chatBody">
            <div class="chat-message bot">
              <div class="message-content">
                Hello! Welcome to <strong>Manisha Infracon Project Pvt. Ltd.</strong> How can I help you today with your Ready Mix Concrete (RMC), aggregates, crusher materials, or sand requirements?
                <br><br>
                Please choose a category below to see answers to frequently asked questions, or type your question directly!
              </div>
              <span class="message-time">Just now</span>
            </div>
            
            <!-- Category Chips -->
            <div class="chat-chip-container" id="chatCategoryChips"></div>
            
            <!-- Questions List -->
            <div class="chat-questions-list" id="chatQuestionsList"></div>
          </div>
          <div class="chat-footer">
            <form id="chatForm" class="d-flex align-items-center w-100 m-0">
              <input type="text" id="chatInput" class="form-control me-2" placeholder="Ask a question..." required autocomplete="off">
              <button type="submit" class="btn btn-primary-custom p-0 d-flex align-items-center justify-content-center" style="width: 42px; height: 42px; border-radius: 6px; flex-shrink:0;">
                <i class="bi bi-send-fill"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = chatWidgetHTML.trim();
    document.body.appendChild(div.firstChild);
  };

  // Inject the chatbot elements
  injectChatbot();

  const chatWidget = document.getElementById('chatWidget');
  const chatToggleBtn = document.getElementById('chatToggleBtn');
  const chatWindow = document.getElementById('chatWindow');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatBody = document.getElementById('chatBody');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBadge = chatWidget.querySelector('.chat-badge');
  const chatCategoryChips = document.getElementById('chatCategoryChips');
  const chatQuestionsList = document.getElementById('chatQuestionsList');

  let hasOpenedChat = false;

  const saveChatState = () => {
    const messages = [];
    const messageElements = chatBody.querySelectorAll('.chat-message');
    messageElements.forEach((el, index) => {
      // Skip the first welcome message
      if (index === 0) return;
      messages.push({
        type: el.classList.contains('user') ? 'user' : 'bot',
        content: el.querySelector('.message-content').innerHTML
      });
    });

    const state = {
      isOpen: !chatWindow.classList.contains('d-none'),
      messages: messages,
      hasOpenedChat: hasOpenedChat
    };

    localStorage.setItem('manisha_chat_state', JSON.stringify(state));
  };

  const loadChatState = () => {
    const saved = localStorage.getItem('manisha_chat_state');
    if (!saved) return;

    try {
      const state = JSON.parse(saved);
      hasOpenedChat = state.hasOpenedChat || false;
      if (state.isOpen) {
        chatWindow.classList.remove('d-none');
        if (chatBadge) chatBadge.classList.add('d-none');
      }

      if (state.messages && state.messages.length > 0) {
        state.messages.forEach(msg => {
          const msgHTML = `
            <div class="chat-message ${msg.type}">
              <div class="message-content">${msg.content}</div>
              <span class="message-time">Just now</span>
            </div>
          `;
          chatCategoryChips.insertAdjacentHTML('beforebegin', msgHTML);
        });

        if (chatBadge) chatBadge.classList.add('d-none');
        hasOpenedChat = true;
      }
    } catch (e) {
      console.error("Error loading chat state:", e);
    }
  };

  // Load chat state immediately
  loadChatState();

  chatToggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('d-none');
    if (!hasOpenedChat) {
      hasOpenedChat = true;
      chatBadge.classList.add('d-none');
    }
    setTimeout(() => {
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 100);
    saveChatState();
  });

  chatCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    chatWindow.classList.add('d-none');
    saveChatState();
  });

  setTimeout(() => {
    if (!hasOpenedChat && chatBadge) {
      chatBadge.classList.remove('d-none');
    }
  }, 4000);

  // Render Category Chips
  const renderCategoryChips = () => {
    chatCategoryChips.innerHTML = "";
    Object.keys(CHAT_DATABASE).forEach((key, index) => {
      const chip = document.createElement('div');
      chip.className = `chat-chip ${index === 0 ? 'active' : ''}`;
      chip.textContent = CHAT_DATABASE[key].title;
      chip.setAttribute('data-category', key);
      chip.addEventListener('click', () => {
        chatCategoryChips.querySelectorAll('.chat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderQuestions(key);
      });
      chatCategoryChips.appendChild(chip);
    });
  };

  // Render Questions inside list
  const renderQuestions = (categoryKey) => {
    chatQuestionsList.innerHTML = "";
    const category = CHAT_DATABASE[categoryKey];
    if (!category) return;

    category.questions.forEach(item => {
      const qItem = document.createElement('div');
      qItem.className = "chat-question-item";
      qItem.textContent = item.q;
      qItem.addEventListener('click', () => {
        triggerBotQA(item.q, item.a);
      });
      chatQuestionsList.appendChild(qItem);
    });
  };

  // Bot response triggers
  const triggerBotQA = (userQuestion, botAnswer) => {
    const userMsgHTML = `
      <div class="chat-message user">
        <div class="message-content">${userQuestion}</div>
        <span class="message-time">Just now</span>
      </div>
    `;
    chatCategoryChips.insertAdjacentHTML('beforebegin', userMsgHTML);
    saveChatState();

    const messages = chatBody.querySelectorAll('.chat-message');
    const lastUserMsg = messages[messages.length - 1];
    if (lastUserMsg) {
      lastUserMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const typingHTML = `
      <div class="typing-indicator" id="typingIndicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    chatCategoryChips.insertAdjacentHTML('beforebegin', typingHTML);
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
      if (typingIndicator) typingIndicator.remove();

      const botMsgHTML = `
        <div class="chat-message bot">
          <div class="message-content">${botAnswer}</div>
          <span class="message-time">Just now</span>
        </div>
      `;
      chatCategoryChips.insertAdjacentHTML('beforebegin', botMsgHTML);
      saveChatState();

      const botMessages = chatBody.querySelectorAll('.chat-message.bot');
      const lastBotMsg = botMessages[botMessages.length - 1];
      if (lastBotMsg) {
        lastBotMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 800);
  };

  // Simple string matcher for custom user input
  const getBotResponse = (message) => {
    const text = message.toLowerCase().trim();

    let bestMatch = null;
    let maxMatches = 0;

    Object.keys(CHAT_DATABASE).forEach(categoryKey => {
      CHAT_DATABASE[categoryKey].questions.forEach(item => {
        const questionWords = item.q.toLowerCase().split(/\s+/);
        let matches = 0;
        questionWords.forEach(word => {
          if (word.length > 3 && text.includes(word)) {
            matches++;
          }
        });
        if (matches > maxMatches) {
          maxMatches = matches;
          bestMatch = item.a;
        }
      });
    });

    if (maxMatches >= 2 && bestMatch) {
      return bestMatch;
    }

    // Keyword Match Fallbacks
    if (text.includes('rmc') || text.includes('ready mix') || text.includes('concrete') || text.includes('m10') || text.includes('m20') || text.includes('m40') || text.includes('m80')) {
      return "Our automated, computerized **RMC Batching Plant** delivers custom concrete grades from **M7.5 up to M80** (including Self-Compacting SCC, IHB Slab mix, and Fiber Reinforced concrete) at a capacity of **120 Cu.M per hour**.";
    }
    if (text.includes('crusher') || text.includes('crushing') || text.includes('plant') || text.includes('quarry') || text.includes('feedstock')) {
      return "Our state-of-the-art **Basalt Crushing Plant** processes raw high-density basalt stone sourced directly from our own quarries, featuring primary jaw and secondary cone crushers with a production rate of **350 Tons per hour**.";
    }
    if (text.includes('sizes') || text.includes('mm') || text.includes('aggregate') || text.includes('stone')) {
      return "We manufacture aggregates in sizes: <strong>80 MM, 60 MM, 40 MM, 20 MM, 10 MM, and 6 MM</strong>. All crushed under advanced machinery, and sorted for optimal grading properties.";
    }
    if (text.includes('sand') || text.includes('plaster') || text.includes('m-sand') || text.includes('crush sand')) {
      return "Our manufactured sands include: <strong>Crush Sand (M-Sand)</strong> for high-strength concrete works, <strong>Cone Sand</strong> for smooth brickwork/plastering, and <strong>Wash Sand</strong> which is double washed to clear all basalt dust.";
    }
    if (text.includes('gsb') || text.includes('road') || text.includes('sub base')) {
      return "Our <strong>GSB (Granular Sub Base)</strong> materials are blended to match strict MORTH highway specifications, maximizing drainage capacity and foundation stability.";
    }
    if (text.includes('price') || text.includes('cost') || text.includes('rate') || text.includes('quote') || text.includes('ton')) {
      return "Basalt stone material pricing is calculated per metric ton. Rates vary based on aggregate sizes, distance, and quantity order. Click <strong>'Get Quote'</strong> to submit a message, or call our sales desk directly at <strong>+91 77220 52057</strong>.";
    }
    if (text.includes('quality') || text.includes('test') || text.includes('lab') || text.includes('certified')) {
      return "Quality is our guarantee. All basalt materials and services are tested daily for AIV, ACV, flakiness, and particle size distribution. We conform fully with **Indian Road Congress (IRC)** and **IS:383** aggregate standards.";
    }
    if (text.includes('delivery') || text.includes('transport') || text.includes('fleet') || text.includes('vehicle')) {
      return "We manage a fleet of 50+ logistics trucks to guarantee prompt, 24/7 delivery direct to your infrastructure site. Standard delivery takes <strong>12 to 24 hours</strong> from confirmations.";
    }

    return "Thank you for asking. Our basalt crusher plants are located in Ahilyanagar. For direct sales, pricing catalogs, and custom service and material distributions, please write to us at <strong>manisha.infracon99@gmail.com</strong> or call our dispatch offices at <strong>+91 77220 52057</strong>.";
  };

  // Custom User text query submission handler
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const queryText = chatInput.value.trim();
    if (!queryText) return;

    chatInput.value = "";

    // 1. Render User Message
    const userMsgHTML = `
      <div class="chat-message user">
        <div class="message-content">${queryText}</div>
        <span class="message-time">Just now</span>
      </div>
    `;
    chatCategoryChips.insertAdjacentHTML('beforebegin', userMsgHTML);
    chatBody.scrollTop = chatBody.scrollHeight;
    saveChatState();

    // 2. Render Typing Indicator
    const typingHTML = `
      <div class="typing-indicator" id="typingIndicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    chatCategoryChips.insertAdjacentHTML('beforebegin', typingHTML);
    chatBody.scrollTop = chatBody.scrollHeight;

    const typingIndicator = document.getElementById('typingIndicator');

    // 3. Render Bot Response Match
    setTimeout(() => {
      if (typingIndicator) typingIndicator.remove();

      const botResponse = getBotResponse(queryText);
      const botMsgHTML = `
        <div class="chat-message bot">
          <div class="message-content">${botResponse}</div>
          <span class="message-time">Just now</span>
        </div>
      `;
      chatCategoryChips.insertAdjacentHTML('beforebegin', botMsgHTML);
      chatBody.scrollTop = chatBody.scrollHeight;
      saveChatState();
    }, 1000);
  });

  // ==========================================
  // 13. Dynamic Brochure and Lead Generation System
  // ==========================================

  // Dynamic Injection of modals
  function injectBrochureModals() {
    if (document.getElementById('brochureModal')) return;

    const modalsHTML = `
      <!-- Brochure Lead Modal -->
      <div class="modal fade" id="brochureModal" tabindex="-1" aria-labelledby="brochureModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg" style="border-radius: 12px;">
            <div class="lead-modal-header d-flex justify-content-between align-items-center">
              <h5 class="modal-title fw-bold m-0" id="brochureModalLabel"><i class="bi bi-file-earmark-arrow-down-fill me-2"></i>Download Resources</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="lead-modal-body">
              <p class="text-muted small mb-4">Please submit your details below to access our premium corporate brochures, service catalogues, and capacity sheets. A direct PDF download will begin immediately.</p>
              
              <form id="brochureForm" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label for="brochureName" class="form-label small fw-bold">Full Name</label>
                  <input type="text" class="form-control" id="brochureName" required placeholder="Enter your full name">
                  <div class="invalid-feedback">Please enter your name.</div>
                </div>
                
                <div class="mb-3">
                  <label for="brochurePhone" class="form-label small fw-bold">Mobile Number</label>
                  <input type="tel" class="form-control" id="brochurePhone" required placeholder="10-digit mobile number" pattern="[0-9]{10}">
                  <div class="invalid-feedback">Please enter a valid 10-digit mobile number.</div>
                </div>
                
                <div class="mb-3">
                  <label for="brochureEmail" class="form-label small fw-bold">Email Address</label>
                  <input type="email" class="form-control" id="brochureEmail" required placeholder="Enter your email address">
                  <div class="invalid-feedback">Please enter a valid email address.</div>
                </div>
                
                <div class="mb-3">
                  <label for="brochureCompany" class="form-label small fw-bold">Company Name</label>
                  <input type="text" class="form-control" id="brochureCompany" required placeholder="Company or Firm Name">
                  <div class="invalid-feedback">Please enter your company name.</div>
                </div>
                
                <div class="mb-3">
                  <label for="brochureProduct" class="form-label small fw-bold">Required Service / Material</label>
                  <select class="form-select" id="brochureProduct" required>
                    <option value="" disabled selected>Select required material...</option>
                    <option value="GSB">Granular Sub Base (GSB)</option>
                    <option value="80 MM Aggregate">80 MM Aggregate</option>
                    <option value="60 MM Aggregate">60 MM Aggregate</option>
                    <option value="40 MM Aggregate">40 MM Aggregate</option>
                    <option value="VSI 20 MM">VSI 20 MM Aggregate</option>
                    <option value="VSI 10 MM">VSI 10 MM Aggregate</option>
                    <option value="VSI 6 MM">VSI 6 MM Aggregate</option>
                    <option value="Crush Sand">Crush Sand (M-Sand)</option>
                    <option value="Cone Sand">Cone Sand</option>
                    <option value="Wash Sand">Wash Sand</option>
                  </select>
                  <div class="invalid-feedback">Please select a service or material.</div>
                </div>
                
                <div class="mb-3">
                  <label for="brochureMessage" class="form-label small fw-bold">Message / Remarks (Optional)</label>
                  <textarea class="form-control" id="brochureMessage" rows="2" placeholder="Briefly describe your enquiry..."></textarea>
                </div>
                
                <div class="mb-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="brochureConsent" required checked>
                    <label class="form-check-label text-muted small" for="brochureConsent">
                      I agree to receive company information and material estimates.
                    </label>
                    <div class="invalid-feedback">You must agree to the terms to proceed.</div>
                  </div>
                </div>
                
                <button type="submit" id="brochureSubmitBtn" class="btn btn-primary-custom btn-custom w-100 py-3">
                  <i class="bi bi-file-earmark-arrow-down me-2"></i>Download Brochure
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- PDF Preview Modal -->
      <div class="modal fade" id="pdfPreviewModal" tabindex="-1" aria-labelledby="pdfPreviewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered preview-modal-dialog">
          <div class="modal-content border-0 shadow-lg" style="border-radius: 12px;">
            <div class="lead-modal-header d-flex justify-content-between align-items-center">
              <h5 class="modal-title fw-bold m-0" id="pdfPreviewModalLabel"><i class="bi bi-eye-fill me-2"></i>Document Preview</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
              <div class="preview-frame-container">
                <div class="preview-loader" id="pdfPreviewLoader">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="mt-3 text-muted fw-semibold">Generating Branded PDF Preview...</p>
                </div>
                <iframe src="" class="preview-iframe" id="pdfPreviewIframe"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalsHTML.trim();
    while (wrapper.firstChild) {
      document.body.appendChild(wrapper.firstChild);
    }
  }

  // State Management
  let activeBrochureKey = "";
  let activeAction = ""; // "download" or "preview"

  // Load jsPDF library
  const loadjsPDF = (callback) => {
    if (window.jspdf) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = () => {
      callback();
    };
    script.onerror = () => {
      alert("Failed to load PDF engine. Please verify internet connectivity.");
    };
    document.head.appendChild(script);
  };

  // Helper to draw header on PDF pages
  const drawPDFHeader = (doc, title) => {
    doc.setFillColor(11, 61, 145); // Navy Blue
    doc.rect(0, 0, 210, 20, 'F');
    doc.setFillColor(255, 107, 0); // Orange
    doc.rect(0, 20, 210, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("MANISHA INFRACON PROJECT PVT. LTD.", 15, 12);
    doc.setFont("helvetica", "normal");
    doc.text(title.toUpperCase(), 195, 12, { align: "right" });
  };

  // Helper to draw footer on PDF pages
  const drawPDFFooter = (doc, pageNum, totalPages) => {
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);
    doc.line(15, 280, 195, 280);
    doc.setTextColor(11, 61, 145);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text("Email: manisha.infracon99@gmail.com | Enquiry: +91 77220 52057 | Director: +91 97635 55777", 15, 286);
    doc.text(`Page ${pageNum} of ${totalPages}`, 195, 286, { align: "right" });
  };

  // Compile PDF document
  const compilePDF = (brochureKey, leadData) => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const today = new Date().toLocaleDateString();

    const name = leadData ? leadData.name : "Guest Visitor";
    const company = leadData ? leadData.company : "N/A";
    const product = leadData ? leadData.product : "General Aggregate";

    if (brochureKey === "company_profile") {
      // 7-Page PDF Branded Document

      // Page 1: COVER
      doc.setFillColor(11, 61, 145); // Primary Navy Blue
      doc.rect(0, 0, 210, 297, 'F');

      // Header orange block
      doc.setFillColor(255, 107, 0); // Orange
      doc.rect(0, 40, 210, 10, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.text("MANISHA INFRACON", 20, 90);

      doc.setTextColor(255, 107, 0);
      doc.setFontSize(20);
      doc.text("PROJECT PVT. LTD.", 20, 105);

      doc.setDrawColor(255, 255, 255);
      doc.setLineWidth(1.5);
      doc.line(20, 120, 100, 120);

      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text("Building Strong Foundations for Tomorrow", 20, 135);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("CORPORATE COMPANY PROFILE", 20, 220);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Basalt Stone Quarrying & Crusher Plants", 20, 230);
      doc.text(`Issued: ${today}`, 20, 240);

      // User Lead Info Badge at the bottom
      doc.setFillColor(6, 35, 84);
      doc.rect(20, 255, 170, 25, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.text(`Prepared exclusively for: ${name} | Firm: ${company} | Interest: ${product}`, 25, 270);

      // Page 2: OVERVIEW
      doc.addPage();
      drawPDFHeader(doc, "COMPANY OVERVIEW");

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("Manisha Infracon Project Pvt. Ltd. is a premier manufacturer of high-grade blue basalt aggregates,", 15, 50);
      doc.text("M-Sand, and sub-base materials located in Ahilyanagar. Supporting key industrial, commercial, and", 15, 56);
      doc.text("national infrastructure road projects, we are committed to engineering strong foundations.", 15, 62);

      // Vision block
      doc.setFillColor(248, 249, 250);
      doc.rect(15, 80, 180, 45, 'F');
      doc.setTextColor(11, 61, 145);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("OUR VISION", 20, 92);
      doc.setTextColor(51, 65, 85);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.text("To supply high-integrity blue basalt materials that enable sustainable state and national", 20, 102);
      doc.text("infrastructure development, while promoting green mining practices.", 20, 108);

      // Mission block
      doc.setFillColor(248, 249, 250);
      doc.rect(15, 140, 180, 45, 'F');
      doc.setTextColor(11, 61, 145);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("OUR MISSION", 20, 152);
      doc.setTextColor(51, 65, 85);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.text("Employ state-of-the-art crusher and VSI technology to manufacture aggregates matching strict", 20, 162);
      doc.text("MORTH and IS:383 standards, backed by timely dispatch and client trust.", 20, 168);

      // Values block
      doc.setTextColor(11, 61, 145);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("OUR CORE VALUES", 15, 205);
      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("* SAFETY FIRST: Uncompromising protocols across extraction, blasting, and loading.", 20, 217);
      doc.text("* QUALITY ASSURANCE: Continuous lab monitoring of ACV, AIV, and flakiness indexes.", 20, 225);
      doc.text("* INTEGRITY & TRUST: Accurate tonnage billing, transparent grading certifications.", 20, 233);
      doc.text("* CLIENT FOCUS: 24/7 delivery operation matching large infrastructure milestones.", 20, 241);

      drawPDFFooter(doc, 2, 7);

      // Page 3: INFRASTRUCTURE
      doc.addPage();
      drawPDFHeader(doc, "MANUFACTURING INFRASTRUCTURE");

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Our stone crusher facilities are built to support massive, continuous supply requirements:", 15, 50);

      const infra = [
        { title: "Basalt Quarry Site", desc: "Located in Ahilyanagar, producing premium hard blue basalt rock with excellent mechanical values." },
        { title: "Primary & Secondary Crushers", desc: "Equipped with advanced heavy-duty jaw and cone crushers ensuring continuous aggregate reduction." },
        { title: "VSI (Vertical Shaft Impact) Units", desc: "Specialized VSI shaping machinery yields cubical aggregate particles with minimal flaky index." },
        { title: "Wet Sand Washing Plant", desc: "Hydro-cyclone washing units that double-wash crushed basalt sand to yield silt-free concrete sand." },
        { title: "Logistics & Fleet Fleet", desc: "Over 50 heavy-duty dumpers, mechanical tippers, and loaders ensuring prompt 24/7 dispatch." }
      ];

      let yPos = 65;
      infra.forEach(item => {
        doc.setFillColor(241, 245, 249);
        doc.rect(15, yPos, 180, 22, 'F');
        doc.setDrawColor(11, 61, 145);
        doc.setLineWidth(0.8);
        doc.line(15, yPos, 15, yPos + 22);

        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(item.title, 20, yPos + 8);

        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(item.desc, 20, yPos + 16);
        yPos += 30;
      });

      drawPDFFooter(doc, 3, 7);

      // Page 4: PRODUCT RANGE
      doc.addPage();
      drawPDFHeader(doc, "OUR PREMIUM MATERIALS CATALOGUE");

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("All basalt materials conform to IS:383 and MORTH highway specifications.", 15, 50);

      const items = [
        ["Granular Sub Base (GSB)", "Road foundation sub-base compaction support", "MORTH Spec"],
        ["80 MM & 60 MM Aggregates", "Railway ballast, road bases, heavy civil castings", "Blue Basalt"],
        ["40 MM Coarse Aggregate", "Drainage layers, retainment walls, bulk concrete", "Hard Stone"],
        ["VSI 20 MM & 10 MM", "High-strength structural concrete, columns, slabs", "Cubical Shape"],
        ["VSI 6 MM Aggregate", "Paver blocks, designer concretes, smooth castings", "Premium Micro"],
        ["Crush Sand (M-Sand)", "Zone-II concrete grade sand, zero organic silt", "IS:383 Zone-II"],
        ["Cone Sand", "Masonry mortars, smooth internal/external plastering", "Ultra-Fine"],
        ["Wash Sand", "Double-washed premium concrete sand, zero rock dust", "Hydro-Washed"]
      ];

      // Table Header
      doc.setFillColor(11, 61, 145);
      doc.rect(15, 60, 180, 10, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("Service Name", 20, 66);
      doc.text("Typical Application", 75, 66);
      doc.text("Standard", 160, 66);

      yPos = 78;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      items.forEach(row => {
        doc.setTextColor(33, 37, 41);
        doc.text(row[0], 20, yPos);
        doc.setTextColor(71, 85, 105);
        doc.text(row[1], 75, yPos);
        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.text(row[2], 160, yPos);
        doc.setFont("helvetica", "normal");

        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.5);
        doc.line(15, yPos + 4, 195, yPos + 4);
        yPos += 14;
      });

      drawPDFFooter(doc, 4, 7);

      // Page 5: PROCESS
      doc.addPage();
      drawPDFHeader(doc, "MANUFACTURING PROCESS TIMELINE");

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("We operate a strict closed-loop flow ensuring maximum material strength:", 15, 50);

      const process = [
        { step: "01", title: "Stone Quarrying", desc: "Carefully planned excavation and blasting of blue basalt formations." },
        { step: "02", title: "Primary & Secondary Crushing", desc: "Jaw and cone crushers reduce rock boulders to aggregate particles." },
        { step: "03", title: "VSI Cubical Shaping", desc: "Vertical Shaft Impact machines remove flaky edges for cubic stones." },
        { step: "04", title: "Sorting & Screening", desc: "Multi-deck screens sort aggregates strictly into 10/20/40/60/80mm sizes." },
        { step: "05", title: "Washing & Dust Extraction", desc: "Hydro-washing units wash sands to separate micro-fine silt." },
        { step: "06", title: "Laboratory Quality Testing", desc: "Hourly sieve analysis and load test logs at our certified lab." },
        { step: "07", title: "Dispatch & 24/7 Logistics", desc: "Loaded onto multi-axle dumpers and weighed via computerized weighbridge." }
      ];

      yPos = 62;
      process.forEach(step => {
        doc.setFillColor(255, 107, 0); // Orange circle
        doc.circle(23, yPos + 6, 8, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.text(step.step, 21, yPos + 9);

        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text(step.title, 36, yPos + 6);

        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(step.desc, 36, yPos + 12);

        // Timeline connector line
        if (step.step !== "07") {
          doc.setDrawColor(226, 232, 240);
          doc.setLineWidth(1.5);
          doc.line(23, yPos + 14, 23, yPos + 22);
        }
        yPos += 26;
      });

      drawPDFFooter(doc, 5, 7);

      // Page 6: PROJECT INVOLVEMENTS
      doc.addPage();
      drawPDFHeader(doc, "INFRASTRUCTURE PROJECT SUPPLY HIGHLIGHTS");

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Manisha Infracon supplies materials to crucial road and infrastructure developers:", 15, 50);

      const projects = [
        { type: "National Highway Bases", detail: "Supplying GSB and 60mm base course aggregates for NH road expansions." },
        { type: "RCC Bridge Castings", detail: "VSI quality 20mm and 10mm cubical stones supplied continuously for RCC works." },
        { type: "Commercial Foundations", detail: "Providing coarse aggregates and double-washed M-Sand for deep piling foundations." },
        { type: "Brick & Plaster Works", detail: "Cone sand and wash sand supplied directly to residential township builders." }
      ];

      yPos = 65;
      projects.forEach(p => {
        doc.setFillColor(248, 250, 252);
        doc.rect(15, yPos, 180, 24, 'F');
        doc.setDrawColor(255, 107, 0);
        doc.setLineWidth(0.8);
        doc.line(15, yPos, 15, yPos + 24);

        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(p.type, 20, yPos + 8);

        doc.setTextColor(51, 65, 85);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(p.detail, 20, yPos + 16);
        yPos += 34;
      });

      drawPDFFooter(doc, 6, 7);

      // Page 7: CONTACT INFORMATION
      doc.addPage();
      drawPDFHeader(doc, "CONTACT & INQUIRY CHANNELS");

      doc.setFillColor(241, 245, 249);
      doc.rect(15, 50, 180, 180, 'F');

      doc.setTextColor(11, 61, 145);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("MANISHA INFRACON PROJECT PVT. LTD.", 25, 65);

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("Crusher Plant Address:", 25, 85);
      doc.setFont("helvetica", "normal");
      doc.text("Plot No. 20, Bhagyodaya Housing Society, Savedi, Ahmednagar - 414 003.", 25, 93);

      doc.setFont("helvetica", "bold");
      doc.text("Sales & Booking Hotline:", 25, 110);
      doc.setFont("helvetica", "normal");
      doc.text("+91 77220 52057", 25, 118);

      doc.setFont("helvetica", "bold");
      doc.text("Email Correspondence:", 25, 135);
      doc.setFont("helvetica", "normal");
      doc.text("manisha.infracon99@gmail.com", 25, 143);

      doc.setFont("helvetica", "bold");
      doc.text("Quality & Certification Certificates:", 25, 160);
      doc.setFont("helvetica", "normal");
      doc.text("MTC sheets are dispatched with every dumper dispatch. Certified IS:383 compliance.", 25, 168);

      // Dynamic closing badge
      doc.setFillColor(11, 61, 145);
      doc.rect(25, 185, 160, 30, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Looking for custom tonnage pricing? Contact us on WhatsApp!", 35, 198);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.text("Direct Line: +91 77220 52057 | Director: +91 97635 55777", 35, 206);

      drawPDFFooter(doc, 7, 7);

    } else if (brochureKey === "service_catalogue") {
      // 2-Page Service Catalogue PDF
      drawPDFHeader(doc, "SERVICE CATALOGUE & SPECIFICATIONS");
      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Manisha Infracon manufactures cubical, durable basalt aggregates matching IRC and IS:383 codes.", 15, 50);

      const items = [
        { n: "Granular Sub Base (GSB)", a: "Highway sub-grade base coarse foundation compaction." },
        { n: "80 MM Aggregate", a: "Base course road base, ballast packing, and foundation base." },
        { n: "60 MM Aggregate", a: "Soil stabilization, drainage courses, and heavy infrastructure bases." },
        { n: "40 MM Aggregate", a: "Bulk retaining walls, coarse structural concrete foundation bases." },
        { n: "VSI 20 MM Aggregate", a: "Premium structural RCC castings, slabs, columns, and commercial concrete." }
      ];

      yPos = 65;
      items.forEach(item => {
        doc.setFillColor(248, 250, 252);
        doc.rect(15, yPos, 180, 18, 'F');
        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.text(item.n, 20, yPos + 6);
        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(item.a, 20, yPos + 12);
        yPos += 24;
      });
      drawPDFFooter(doc, 1, 2);

      doc.addPage();
      drawPDFHeader(doc, "SERVICE CATALOGUE & SPECIFICATIONS");

      const items2 = [
        { n: "VSI 10 MM Aggregate", a: "Precast slabs, structural RCC columns, high density packing concrete." },
        { n: "VSI 6 MM Aggregate", a: "Architectural thin concrete, paver block layouts, concrete tiles." },
        { n: "Crush Sand (M-Sand)", a: "Zone-II concrete grade sand, zero organic contents, high bonding strength." },
        { n: "Cone Sand", a: "Finely crushed cone sand, ideal for internal and external masonry plaster." },
        { n: "Wash Sand", a: "Double washed hydro-sands to clear rock dust, premium quality RCC mixes." }
      ];

      yPos = 50;
      items2.forEach(item => {
        doc.setFillColor(248, 250, 252);
        doc.rect(15, yPos, 180, 18, 'F');
        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.text(item.n, 20, yPos + 6);
        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(item.a, 20, yPos + 12);
        yPos += 24;
      });
      drawPDFFooter(doc, 2, 2);

    } else if (brochureKey === "infrastructure") {
      // 2-Page Infrastructure PDF
      drawPDFHeader(doc, "MANUFACTURING ASSETS & PLANT DEPOT");
      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Our infrastructure includes modern high-capacity crushing machinery located in Ahilyanagar.", 15, 50);

      const infra = [
        { title: "Blue Basalt Quarry Site", detail: "Self-owned excavation lease ensuring a continuous rock supply." },
        { title: "Advanced Jaw Crushers", detail: "Primary rock reduction stage, handling boulders up to 800mm in width." },
        { title: "VSI Cubical Machinery", detail: "Removes flaky and elongated shapes to conform to IS:383 grading specifications." },
        { title: "Multi-Deck Sorting Screens", detail: "Permits strict segregation into distinct sizes (6mm, 10mm, 20mm, 40mm, etc.)." }
      ];

      yPos = 65;
      infra.forEach(item => {
        doc.setFillColor(248, 250, 252);
        doc.rect(15, yPos, 180, 20, 'F');
        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.text(item.title, 20, yPos + 7);
        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(item.detail, 20, yPos + 14);
        yPos += 26;
      });
      drawPDFFooter(doc, 1, 2);

      doc.addPage();
      drawPDFHeader(doc, "MANUFACTURING ASSETS & PLANT DEPOT");

      const infra2 = [
        { title: "Hydro-Cyclone Sand Washing Plant", detail: "Rinses sand to strip silt and rock dust, improving concrete bonding." },
        { title: "Computerized Weighbridges", detail: "Two independent in-house weighbridges checking correct dispatch tonnage." },
        { title: "Loader & Excavator Fleets", detail: "Active fleet of Volvo/JCB excavators and bucket loaders at loading points." },
        { title: "50+ Tipper Logistics Fleets", detail: "Fleet of multi-axle dumpers providing continuous supply on a 24/7 basis." }
      ];

      yPos = 50;
      infra2.forEach(item => {
        doc.setFillColor(248, 250, 252);
        doc.rect(15, yPos, 180, 20, 'F');
        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.text(item.title, 20, yPos + 7);
        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(item.detail, 20, yPos + 14);
        yPos += 26;
      });
      drawPDFFooter(doc, 2, 2);

    } else if (brochureKey === "quality_assurance") {
      // 1-Page Quality Brochure
      drawPDFHeader(doc, "QUALITY STANDARDS & COMPLIANCE SCHEDULING");
      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Our testing procedures ensure all materials meet strict structural specifications:", 15, 50);

      const tests = [
        { name: "Sieve Grading Analysis", limit: "Conforms to IS:383 Zone-II bounds. Conducted hourly." },
        { name: "Flakiness & Elongation Index", limit: "Target combined value below 15%. Prevents concrete cracking." },
        { name: "Aggregate Impact Value (AIV)", limit: "Target below 18%. Yields maximum load capacity." },
        { name: "Aggregate Crushing Value (ACV)", limit: "Target below 22%. Guarantees high durability under traffic." },
        { name: "Specific Gravity Analysis", limit: "Typical range 2.80 to 2.92. Assures highly dense blue basalt rocks." }
      ];

      yPos = 65;
      doc.setFontSize(9);
      tests.forEach(test => {
        doc.setFillColor(248, 250, 252);
        doc.rect(15, yPos, 180, 16, 'F');
        doc.setTextColor(11, 61, 145);
        doc.setFont("helvetica", "bold");
        doc.text(test.name, 20, yPos + 6);
        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        doc.text(test.limit, 20, yPos + 12);
        yPos += 22;
      });

      doc.setFillColor(11, 61, 145);
      doc.rect(15, 185, 180, 25, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.text("Quality Guarantee Statement:", 20, 192);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.text("All dispatches are accompanied by Material Test Certificates (MTC) stating actual lab test logs.", 20, 199);

      drawPDFFooter(doc, 1, 1);

    } else if (brochureKey === "plant_capacity") {
      // 1-Page Plant Capacity Brochure
      drawPDFHeader(doc, "PLANT CAPACITY & PRODUCTION METRICS");
      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Our production plants handle massive infrastructure order schedules:", 15, 50);

      const metrics = [
        ["Basalt Crusher Plant (Ahilyanagar)", "250 TPH (Tons Per Hour)", "Operational 24/7"],
        ["VSI Shaping Plant", "150 TPH (Tons Per Hour)", "Operational 24/7"],
        ["Hydro Sand Washing Plant", "100 TPH (Tons Per Hour)", "Operational 24/7"],
        ["Monthly Material Production Cap", "120,000 Tons per Month", "Maximum Capacity"],
        ["Transportation Fleet Capabilities", "4,000 Tons delivered daily", "Active Fleet"]
      ];

      doc.setFillColor(11, 61, 145);
      doc.rect(15, 60, 180, 10, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("Manufacturing Unit", 20, 66);
      doc.text("Throughput Capacity", 85, 66);
      doc.text("Schedule", 155, 66);

      yPos = 78;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      metrics.forEach(row => {
        doc.setTextColor(33, 37, 41);
        doc.text(row[0], 20, yPos);
        doc.setTextColor(71, 85, 105);
        doc.text(row[1], 85, yPos);
        doc.setTextColor(255, 107, 0);
        doc.setFont("helvetica", "bold");
        doc.text(row[2], 155, yPos);
        doc.setFont("helvetica", "normal");

        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.5);
        doc.line(15, yPos + 4, 195, yPos + 4);
        yPos += 14;
      });

      doc.setFillColor(248, 250, 252);
      doc.rect(15, 160, 180, 40, 'F');
      doc.setTextColor(11, 61, 145);
      doc.setFont("helvetica", "bold");
      doc.text("Bulk Supply Commitments:", 20, 172);
      doc.setTextColor(71, 85, 105);
      doc.setFont("helvetica", "normal");
      doc.text("Our quarry sites maintain a reserve exceeding 10 million tons of basalt stone, securing long-term", 20, 182);
      doc.text("continuous aggregate supply chains for government highway and airport projects.", 20, 188);

      drawPDFFooter(doc, 1, 1);
    }

    return doc;
  };

  // Perform PDF actions (download or preview)
  const executeBrochureAction = (brochureKey, action, leadData) => {
    loadjsPDF(() => {
      const doc = compilePDF(brochureKey, leadData);

      const titleMap = {
        company_profile: "Manisha_Infracon_Company_Profile.pdf",
        service_catalogue: "Manisha_Infracon_Service_Catalogue.pdf",
        infrastructure: "Manisha_Infracon_Infrastructure_Details.pdf",
        quality_assurance: "Manisha_Infracon_Quality_Assurance_Standards.pdf",
        plant_capacity: "Manisha_Infracon_Plant_Production_Capacity.pdf"
      };

      const fileName = titleMap[brochureKey] || "Manisha_Infracon_Brochure.pdf";

      if (action === "download" || action === "enquiry") {
        doc.save(fileName);
      } else if (action === "preview") {
        const previewLoader = document.getElementById('pdfPreviewLoader');
        const previewIframe = document.getElementById('pdfPreviewIframe');
        const previewModalEl = document.getElementById('pdfPreviewModal');

        if (previewLoader) previewLoader.classList.remove('d-none');
        if (previewIframe) {
          previewIframe.src = "";
          const blob = doc.output('blob');
          const blobURL = URL.createObjectURL(blob);
          previewIframe.src = blobURL;

          previewIframe.onload = () => {
            if (previewLoader) previewLoader.classList.add('d-none');
          };
        }

        const previewModal = new bootstrap.Modal(previewModalEl);
        previewModal.show();
      }
    });
  };

  // Brochure lead form handles automatically in needs-validation loop

  // Intercept trigger buttons on pages
  const handleResourceRequest = (brochureKey, action, productVal) => {
    activeBrochureKey = brochureKey;
    activeAction = action;

    if (action === "enquiry") {
      triggerLeadForm(productVal);
    } else {
      // Check localStorage cache
      const savedLead = localStorage.getItem('brochure_lead');
      if (savedLead) {
        try {
          const leadData = JSON.parse(savedLead);
          executeBrochureAction(brochureKey, action, leadData);
        } catch (err) {
          localStorage.removeItem('brochure_lead');
          triggerLeadForm(productVal);
        }
      } else {
        triggerLeadForm(productVal);
      }
    }
  };

  const triggerLeadForm = (productVal) => {
    // Set active product selection
    const productSelect = document.getElementById('brochureProduct');
    if (productSelect) {
      if (productVal) {
        productSelect.value = productVal;
      } else {
        productSelect.selectedIndex = 0;
      }
    }

    // Pre-fill from cache if available
    const savedLead = localStorage.getItem('brochure_lead');
    if (savedLead) {
      try {
        const leadData = JSON.parse(savedLead);
        if (document.getElementById('brochureName')) document.getElementById('brochureName').value = leadData.name || "";
        if (document.getElementById('brochurePhone')) document.getElementById('brochurePhone').value = leadData.phone || "";
        if (document.getElementById('brochureEmail')) document.getElementById('brochureEmail').value = leadData.email || "";
        if (document.getElementById('brochureCompany')) document.getElementById('brochureCompany').value = leadData.company || "";
        if (leadData.product && productSelect) productSelect.value = leadData.product;
      } catch (err) { }
    }

    let brochureModal = bootstrap.Modal.getInstance(document.getElementById('brochureModal'));
    if (!brochureModal) {
      brochureModal = new bootstrap.Modal(document.getElementById('brochureModal'));
    }
    brochureModal.show();
  };

  // Global event delegation for data-brochure attributes
  document.addEventListener('click', (e) => {
    if (!e.target || typeof e.target.closest !== 'function') return;
    const downloadBtn = e.target.closest('[data-brochure-download]');
    const enquiryBtn = e.target.closest('[data-brochure-enquiry]');
    const previewBtn = e.target.closest('[data-brochure-preview]');

    if (downloadBtn) {
      e.preventDefault();
      const brochureKey = downloadBtn.getAttribute('data-brochure-download');
      const productVal = downloadBtn.getAttribute('data-product') || "";
      handleResourceRequest(brochureKey, "download", productVal);
    } else if (enquiryBtn) {
      e.preventDefault();
      const brochureKey = enquiryBtn.getAttribute('data-brochure-enquiry');
      const productVal = enquiryBtn.getAttribute('data-product') || "";
      handleResourceRequest(brochureKey, "enquiry", productVal);
    } else if (previewBtn) {
      e.preventDefault();
      const brochureKey = previewBtn.getAttribute('data-brochure-preview');
      const productVal = previewBtn.getAttribute('data-product') || "";
      handleResourceRequest(brochureKey, "preview", productVal);
    }
  });

  // Render initial chips and questions
  renderCategoryChips();
  renderQuestions(Object.keys(CHAT_DATABASE)[0]);

  // ==========================================
  // 14. Query Parameter Auto-Download Trigger
  // ==========================================
  const urlParams = new URLSearchParams(window.location.search);
  const autoDownload = urlParams.get('download');
  if (autoDownload) {
    setTimeout(() => {
      executeBrochureAction(autoDownload, 'download', null);
    }, 1000);
  }

  // Trigger category routing based on URL type parameter
  const categoryType = urlParams.get('type');
  if (categoryType === 'rmc' || categoryType === 'crusher') {
    window.switchCategory(categoryType);
  } else {
    // Default to rmc active
    window.switchCategory('rmc');
  }

});

// ==========================================
// 15. Global RMC & Crusher Category Switcher
// ==========================================
window.switchCategory = (category) => {
  const btnRmc = document.getElementById('tab-rmc');
  const btnCrusher = document.getElementById('tab-crusher');
  const secRmc = document.getElementById('rmc-catalog-section');
  const secCrusher = document.getElementById('crusher-catalog-section');

  const procRmc = document.getElementById('rmc-process-section');
  const procCrusher = document.getElementById('crusher-process-section');

  const projRmc = document.getElementById('rmc-projects-section');
  const projCrusher = document.getElementById('crusher-projects-section');

  if (category === 'rmc') {
    if (btnRmc) btnRmc.classList.add('active');
    if (btnCrusher) btnCrusher.classList.remove('active');

    if (secRmc) secRmc.classList.remove('d-none');
    if (secCrusher) secCrusher.classList.add('d-none');

    if (procRmc) procRmc.classList.remove('d-none');
    if (procCrusher) procCrusher.classList.add('d-none');

    if (projRmc) projRmc.classList.remove('d-none');
    if (projCrusher) projCrusher.classList.add('d-none');
  } else {
    if (btnRmc) btnRmc.classList.remove('active');
    if (btnCrusher) btnCrusher.classList.add('active');

    if (secRmc) secRmc.classList.add('d-none');
    if (secCrusher) secCrusher.classList.remove('d-none');

    if (procRmc) procRmc.classList.add('d-none');
    if (procCrusher) procCrusher.classList.remove('d-none');

    if (projRmc) projRmc.classList.add('d-none');
    if (projCrusher) projCrusher.classList.remove('d-none');
  }
};

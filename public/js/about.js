// jshint esversion:6
// Cushion so dropdowns are activated at correct element view position
const cushion = window.innerWidth * 0.0025 * -1;

var mutex = false;
var updatingSectionUrl = false;
var enableCall = true;
var currSection = '';

// Jump to a section when it is clicked. For links with dropdowns, jump only
// if the dropdown is closed. Do no jump if the section url is being updated.
let jumpToSection = function(sectionName) {
  let sectionLinkName = sectionName + '-link';
  let sidebarLink = $('#' + sectionLinkName);
  let collapsed = sidebarLink.attr('aria-expanded');

  if (!mutex) {
    // Close all other collapsed dropdowns
    closeAllCollapsed(sectionLinkName);

    // Do not jump to section if dropdown is being closed
    // Do not jump to section of scrolling (messes up scroll animation)
    if (collapsed == 'false' && !updatingSectionUrl)
      window.location.hash = sectionName;
  }
};

// Close open dropdowns but the one on link clicked, if any
let closeAllCollapsed = function(sectionName) {
  let sidebarLinks = $('.multi-collapse');

  // Disable collapse features while current function is executing
  mutex = true;

  for (const link of sidebarLinks) {
    // Click link element if it is open and it is not currently clicked link
    if (link.id != sectionName && link.getAttribute('aria-expanded') == 'true')
      link.click();
  }

  // Make mutex available again
  mutex = false;
};

// Update section url on scroll
document.addEventListener('scroll', function(event) {
  // Prevent function from being called during timeout
  if (!enableCall) return;
  enableCall = false;

  // Get window top and sections
  let sections = $('section');
  let section;
  let sectionTop;
  let sectionNavLink;
  let collapsed;

  for (let i = sections.length - 1; i >= 0; --i) {
    // Get next section
    section = sections[i];
    // Get next section top
    sectionTop = section.getBoundingClientRect().top;
    // If section is at top of page, update url and open dropdown
    if (sectionTop + cushion <= 0) {
      // Do nothing if still on same section
      if (currSection == section.id)
        break;
      // Prevent section jumping while url is updating
      updatingSectionUrl = true;
      // Update current section tracker
      currSection = section.id;
      // Click section link to activate dropdown if it is not already down
      sectionNavLink = $('#' + section.id + '-link');
      collapsed = sectionNavLink.attr('aria-expanded');
      if (collapsed == 'false' || !collapsed)
        sectionNavLink.click();
      // Update url
      window.history.pushState({}, document.title, '/about#' + section.id);
      // Allow section jumping once done
      updatingSectionUrl = false;
      // Stop execution of function or url will be overwritten with
      // top most section id
      break;
    }

    // Set a timeout for throttle control
    setTimeout(() => enableCall = true, 300);
  }
});









//EOF

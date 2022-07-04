var openHeaderTabletMobile = document.querySelector('#content__header-tablet-mobile-icon');
var sidebarClose = document.querySelector('.sidebar__header-icon');
var sidebarTabletMobile = document.querySelector('#sidebar');
var overlayModal = document.querySelector('.modal');

function hideSidebar() {
    sidebarTabletMobile.classList.add('hide_on_tablet_and_mobile')
}

function showOverlayModal() {
    overlayModal.style.display = 'block';
}

function hideOverlayModal() {
    overlayModal.style.display = 'none';
}

function showSidebar() {
    sidebarTabletMobile.classList.remove('hide_on_tablet_and_mobile')
}

openHeaderTabletMobile.addEventListener('click', showSidebar)
openHeaderTabletMobile.addEventListener('click', showOverlayModal)

sidebarClose.addEventListener('click', hideSidebar)
sidebarClose.addEventListener('click', hideOverlayModal)

overlayModal.addEventListener('click', hideOverlayModal)
overlayModal.addEventListener('click', hideSidebar)

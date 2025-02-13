function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(45.579591,9.164906); 
  var mapOptions = {center: myCenter, zoom: 13};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordions__item, .accordions__item1'); // Inclui .accordions__item1
  
  accordions.forEach(el => {
      el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const control = self.querySelector('.accordions__control');
          const content = self.querySelector('.accordions__content');

          self.classList.toggle('open');

          if (self.classList.contains('open')) {
              control.setAttribute('aria-expanded', true);
              content.setAttribute('aria-hidden', false);
              content.style.maxHeight = content.scrollHeight + 'px';
          } else {
              control.setAttribute('aria-expanded', false);
              content.setAttribute('aria-hidden', true);
              content.style.maxHeight = null;
          }
      });
  });
});
  document.querySelector('.btnmore').addEventListener('click', function() {
  const hiddenItems = document.querySelectorAll('.accordions__item.hidden');
  hiddenItems.forEach((item, index) => {
    if (index < 5) {
      item.classList.remove('hidden');
    }
  });
  
  // Se todos os itens estiverem visíveis, esconda o botão
  if (document.querySelectorAll('.accordions__item.hidden').length === 0) {
    this.style.display = 'none';
  }
});
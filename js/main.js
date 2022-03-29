document.addEventListener("DOMContentLoaded", () => {
    let menu = new Menu({
        'trigger': 'menu-trigger',
        'items': ['.site-header', '.container'],
        'links': '.site-header__links > a',
        'activeClass': 'active'
    });
    menu.watch();
    ymaps.ready(init);
    function init(){
        const myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 12
        });
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.77, 37.69]
            }
        });
        myMap.geoObjects.add(myGeoObject); 
    }
});
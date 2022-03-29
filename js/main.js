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
            center: [59.939099, 30.315877],
            zoom: 10
        });
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [59.95, 30.35]
            }
        });
        myMap.geoObjects.add(myGeoObject); 
    }
});
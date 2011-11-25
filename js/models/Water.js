/*global $, _, Backbone, granny */
$(document).ready(function () {
    window.granny = window.granny || {};
    
    granny.Water = Backbone.Model.extend({
    
        defaults: {
            name: 'water',
            speed: 6,
            positionX: 50,
            positionY: 100,
            width: 22,
            height: 43,
            waterSprite: 1,
            spriteCounter: 0,
            frameSwitchSpeed: 20, // lower = faster
            addSound: $('#water-drop').get(0)
        },
        
        
        initialize: function () {        
            var image1 = new Image(),
                image2 = new Image();
            
            image1.src = 'img/water1.png';
            image2.src = 'img/water2.png';
            
            this.set({
                image1: image1,
                image2: image2
            });
        }
        
    });
});
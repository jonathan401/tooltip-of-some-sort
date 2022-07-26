"use strict";
var avatar = document.querySelector('.avatar');
var box = document.querySelector('.box');
var box2 = document.querySelector('.box2');
// toolbar class
var Toolbar = /** @class */ (function () {
    function Toolbar(container, width, height, color, position) {
        var _this = this;
        this.setPosition = function (toolbar) {
            switch (_this.position) {
                case 'bottom-right':
                    toolbar.style.transformOrigin = 'left top';
                    toolbar.style.left = "".concat((_this.container.offsetWidth / 2));
                    break;
                case 'bottom-left':
                    toolbar.style.transformOrigin = 'right top';
                    toolbar.style.right = "".concat((_this.container.offsetWidth / 2));
                    break;
                case 'center':
                    toolbar.style.transformOrigin = 'top center';
                    toolbar.style.right = "".concat((-1 * toolbar.offsetWidth / 2) + (_this.container.offsetWidth / 2));
                    break;
                default:
                    toolbar.style.transformOrigin = 'top right';
                    toolbar.style.right = "".concat((_this.container.offsetWidth / 2));
                    break;
            }
            ;
        };
        this.init = function () {
            var toolbar = document.createElement('div');
            // add structure and style to toolbar
            toolbar.style.background = _this.color ? "".concat(_this.color) : '#888';
            toolbar.style.width = "".concat(_this.width, "px");
            toolbar.style.height = "".concat(_this.height, "px");
            toolbar.classList.add('toolbar');
            // append the toolbar to the container
            _this.container.appendChild(toolbar);
            _this.setPosition(toolbar);
            _this.container.addEventListener('click', function () {
                toolbar.classList.toggle('open');
            });
        };
        this.container = container;
        this.width = width;
        this.height = height;
        this.color = color;
        this.position = position;
    }
    return Toolbar;
}());
;
// testing the class
var avatarToolBar = new Toolbar(avatar, 90, 40, '#888', 'bottom-left');
var boxToolBar = new Toolbar(box, 90, 40, '#666', 'center');
var box2ToolBar = new Toolbar(box2, 90, 40, '#444', 'bottom-right');
avatarToolBar.init();
boxToolBar.init();
box2ToolBar.init();

/**
 * Created by SimonG on 1/22/2015.
 */

// TODO use those
var RIGHT = 1;
var LEFT = -1;

Carousel = function () {
    var currentIndex = 0;
    var size = document.getElementById("items").children.length;

    var that = {};

    // TODO implement this and bind it to arrows
    that.goTo = function (index) {
        if (index < size) {
            currentIndex = index;
        }
    }

    that.nextItem = function () {
        var newIndex = currentIndex + 1;
        if (newIndex === size) {
            newIndex = 0;
        }
        slide(currentIndex, newIndex, RIGHT, function () {
            document.getElementsByClassName("carousel-indicator")[0].children[currentIndex].className = "";
            document.getElementsByClassName("carousel-indicator")[0].children[newIndex].className = "active";
            currentIndex = newIndex;
        });
    }

    that.start = function () {
        window.setInterval(function () {
            that.nextItem();
        }, 3000)
    }

    // TODO fix the scrolling direction
    slide = function (fromIndex, toIndex, slideDirection, callback) {
        var items = document.getElementById("items").children;
        var fromItem = items[fromIndex];
        var toItem = items[toIndex];

        var offset = fromItem.style.left;
        offset = parseInt(offset.substring(0, offset.length - 2));

        offset += 10;
        fromItem.style.left = offset + 'px';
        toItem.style.left = (offset - 800) + 'px';

        if (offset < 800) {
            window.setTimeout(function () {
                slide(fromIndex, toIndex, slideDirection, callback);
            }, 10);
        } else {
            callback();
        }
    }

    return that;
}



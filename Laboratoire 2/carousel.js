/**
 * Created by SimonG on 1/22/2015.
 */

// TODO use those
var RIGHT = 1;
var LEFT = -1;
var REFRESH_INTERVAL = 3000;

Carousel = function () {
    var currentIndex = 0;
    var size = document.getElementById("items").children.length;
    var refreshIntervalId = 0;

    var that = {};

    that.goTo = function (index) {
        if(currentIndex == index) {
            return;
        }
        restartRefreshInterval();
        if(index < currentIndex){
            slide(currentIndex, index, RIGHT);
        } else {
            slide(currentIndex, index, LEFT);
        }
        restartRefreshInterval();
    }

    that.slideLeft = function () {
        restartRefreshInterval();
        that.previousItem();
    }

    that.slideRight = function () {
        restartRefreshInterval();
        that.nextItem();
    }

    that.nextItem = function () {
        var newIndex = currentIndex + 1;
        if (newIndex === size) {
            newIndex = 0;
        }
        slide(currentIndex, newIndex, LEFT);
    }

    that.previousItem = function(){
        var newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = size - 1;
        }
        slide(currentIndex, newIndex, RIGHT);
    }

    that.start = function () {
        refreshIntervalId = window.setInterval(function () {
            that.nextItem();
        }, REFRESH_INTERVAL);
    }

    restartRefreshInterval = function () {
        clearInterval(refreshIntervalId);
        refreshIntervalId = window.setInterval(function () {
            that.nextItem();
        }, REFRESH_INTERVAL);
    }

    slide = function (fromIndex, toIndex, slideDirection) {
        var items = document.getElementById("items").children;
        var fromItem = items[fromIndex];
        var toItem = items[toIndex];

        var onAnimationEnd = function (e) {
            e.target.removeEventListener(e.type, arguments.callee);
            document.getElementsByClassName("carousel-indicator")[0].children[currentIndex].className = "";
            document.getElementsByClassName("carousel-indicator")[0].children[toIndex].className = "active";
            fromItem.className = "item";
            toItem.className = "active";
            currentIndex = toIndex;
        }

        toItem.addEventListener("webkitTransitionEnd", onAnimationEnd);
        if (slideDirection === LEFT) {
            fromItem.className = "item left";
            toItem.className = "item next-left left";
        } else {
            fromItem.className = "item right";
            toItem.className = "item next-right right";
        }
    }

    return that;
}



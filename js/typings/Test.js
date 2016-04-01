var shapes;
(function (shapes) {
    var Square = (function () {
        function Square(x, y, size) {
            this.x = x;
            this.y = y;
            this.width = this.height = size;
        }
        Square.prototype.draw = function (context) {
            context.strokeRect(this.x, this.y, this.width, this.height);
        };
        return Square;
    })();
    shapes.Square = Square;
})(shapes || (shapes = {}));
var client;
(function (client) {
    var Square = shapes.Square;
    var s = new Square(10, 10, 100);
    var context;
    window.onload = function (e) {
        context = document.getElementById("canvas").getContext("2d");
        animate("right");
    };
    function animate(pDirection) {
        window.requestAnimationFrame(function () {
            if (pDirection == "right") {
                s.x++;
            }
            if (pDirection == "left") {
                s.x--;
            }
            if (pDirection == "up") {
                s.y--;
            }
            if (pDirection == "down") {
                s.y++;
            }
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            if ($('#remplissage').prop("checked") == true) {
                context.beginPath();
                context.rect(s.x, s.y, s.width, s.height);
                context.fillStyle = "red";
                context.fill();
            }
            s.draw(context);
            if (s.x < 390 && s.y == 10) {
                animate("right");
            }
            if (s.x == 390 && s.y < 390) {
                animate("down");
            }
            if (s.y == 390 && s.x > 10) {
                animate("left");
            }
            if (s.x == 10 && s.y > 10) {
                animate("up");
            }
        });
    }
})(client || (client = {}));

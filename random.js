const Random = {

    number: function (from, to) {
        from = from || 0;
        to = to || 100;
        return Math.floor(Math.random() * (to - from)) + from;
    },

    color: function () {
        let r = Math.pow(2, Random.number(0, 8));
        let g = Math.pow(2, Random.number(0, 8));
        let b = Math.pow(2, Random.number(0, 8));
        let a = Random.number(0, 10) / 10;
        return new Color(r, g, b, a);
    },

    radius: function (max) {
        return Random.number(10, max);
    },

    velocity: function (max) {
        return Random.number(-max, +max);
    },

    position: function (bound, radius) {
        let pos;
        do {
            pos = Random.number(0, bound);
        } while (pos < radius || pos > bound - radius);
        return pos;
    },
};
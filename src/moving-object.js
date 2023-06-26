
export default class MovingObject {
    constructor(options = {}) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.draw()
        
    }
    draw() {

        const canvas = document.getElementById("game-canvas");
        
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color
        ctx.fill();

    }
      
}

window.mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
})

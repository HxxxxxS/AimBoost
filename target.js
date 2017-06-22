function Target() {

    this.x = Math.random() * (width-target_size-canvas_border*2 - target_size/2+canvas_border) + target_size/2+canvas_border;
    this.y = Math.random() * (height-target_size-canvas_border*2 - target_size/2+canvas_border) + target_size/2+canvas_border;
    this.w = 15;
    this.dir = 1;
    this.col = "red";

    this.update = function() {

        if(this.dir && this.col == "red"){
            this.w += growth_rate;
        }
        else{
            this.w -= growth_rate;
        }

        stroke(this.col);
        if(this.col)
        strokeWeight(4);
        noFill();
        ellipse(this.x,this.y,this.w);
        ellipse(this.x,this.y,2);

        if(this.w > target_size){
            this.dir = 0
        }
    }
}

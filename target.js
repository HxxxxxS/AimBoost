function Target() {

    this.x = Math.floor(Math.random()*(width - 100))+50;
    this.y = Math.floor(Math.random()*(height - 100))+50;
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

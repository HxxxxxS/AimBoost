var wSlider,hSlider,rSlider,sSlider,gSlider,rButton,sButton;

function Controls(){

    this.controls = null;

    this.initStorage = function(){
        if(localStorage.getItem("cWidth"))
            cWidth = int(localStorage.getItem("cWidth"));
        if(localStorage.getItem("cHeight"))
            cHeight = int(localStorage.getItem("cHeight"));
        if(localStorage.getItem("target_size"))
            target_size = int(localStorage.getItem("target_size"));
        if(localStorage.getItem("spawn_rate"))
            spawn_rate = int(localStorage.getItem("spawn_rate"));
        if(localStorage.getItem("sound"))
            sound = boolean(localStorage.getItem("sound"));
        //if(localStorage.getItem("growth_rate"))
        //    growth_rate = int(localStorage.getItem("growth_rate"));
    }

    this.initControls = function() {
        this.controls = createDiv('<b>Settings</b>');
        this.controls.style("color","white");

        var conWidth = createDiv("Width of the canvas");
        wSlider = createSlider(0,window.innerWidth,cWidth,10);
        conWidth.child(wSlider);
        this.controls.child(conWidth);
        var conHeight = createDiv("Height of the canvas");
        hSlider = createSlider(0,window.innerHeight,cHeight,10);
        conHeight.child(hSlider);
        this.controls.child(conHeight);
        var conRate = createDiv("Spawnrate of targets");
        rSlider = createSlider(0,10,spawn_rate,1);
        conRate.child(rSlider);
        this.controls.child(conRate);
        var conSize = createDiv("Max target size before shrinking");
        sSlider = createSlider(0,500,target_size,10);
        conSize.child(sSlider);
        this.controls.child(conSize);
        var conSound = createDiv("");
        sBox = createCheckbox("Sound",sound);
        sBox.changed(toggleSound);
        conSound.child(sBox);
        this.controls.child(conSound);
        this.controls.child(createElement("br"));
        //var conGrowth = createDiv("Target growth rate");
        //gSlider = createSlider(0,1,0.5,0.1)
        //conGrowth.child(gSlider);
        //controls.child(conGrowth);
        this.controls.child(createP("Settings might require a CTRL+R"));
        this.controls.child(createP('Download me from <a style="color:white; font-size: 16px;" href="https://github.com/HxxxxxS/AimBoost/">GitHub</a> for backup in case you find yourself without internet one day.'));
    }

    this.checkSliders = function() {
        if(wSlider.value() != width){
            localStorage.setItem("cWidth",wSlider.value());
        }
        if(hSlider.value() != height){
            localStorage.setItem("cHeight",hSlider.value());
        }
        if(rSlider.value() != spawn_rate){
            localStorage.setItem("spawn_rate",rSlider.value());
        }
        if(sSlider.value() != target_size){
            localStorage.setItem("target_size",sSlider.value());
        }
        //if(gSlider.value() != growth_rate){
        //    localStorage.setItem("growth_rate",gSlider.value())
        //}
    }
    this.setVolume = function() {
        if(!sound){
            hitSound.setVolume(0);
            missSound.setVolume(0);
        }else{
            hitSound.setVolume(0.4);
            missSound.setVolume(0.3);
        }
    }
}

toggleSound = function(){
        sound = !sound;
        localStorage.setItem("sound",boolean(sound));
}

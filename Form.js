class Form{

    constructor(){
        this.title = createElement('h1');
        this.button = createButton('Play')
    }

    hide(){
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Space Shooter")
        this.title.position(275, 100)
        this.title.style('color','lightpink');
        this.title.style('font-size','100px');
        this.button.position(600,400)
        this.button.style('background', 'lightpink');
        this.button.style('width', '100px');
        this.button.style('height', '50px');

        this.button.mousePressed(()=>{
            gameState= 2;
            
        });
    }



}
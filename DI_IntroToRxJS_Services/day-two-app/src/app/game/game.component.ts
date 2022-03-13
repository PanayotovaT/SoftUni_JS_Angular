import { Component } from "@angular/core";

interface Game {
    title: string;
    price: number;
    img: string;
}

@Component({
    selector: 'su-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent {
    shouldShowContent?: boolean;
    
    games: Game[] = [
        { title: 'Minecraft', price:10, img: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png' },
        { title: 'Candy Crush', price: 0, img: 'https://cms.qz.com/wp-content/uploads/2013/09/candy-crush.jpg?quality=75&strip=all&w=450&h=357&crop=1'  },
        { title: 'Counter Strike', price:120, img: 'https://media.moddb.com/images/downloads/1/221/220419/thumb-counter-strike-1.6.jpg'  }
    ]

    public handleExpandContent(): void {
        this.shouldShowContent = this.shouldShowContent ? false : true;
    }
}

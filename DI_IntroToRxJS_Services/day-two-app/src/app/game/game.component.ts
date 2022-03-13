import { Component } from "@angular/core";

interface Game {
    title: string;
}

@Component({
    selector: 'su-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent {
    games: Game[] = [
        { title: 'Minecraft' },
        { title: 'Candy Crush' },
        { title: 'Counter Strike' }
    ]
}
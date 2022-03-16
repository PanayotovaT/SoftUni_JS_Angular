import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges, DoCheck } from "@angular/core";

export interface Game {
    title: string;
    price: number;
    img: string;
}

@Component({
    selector: 'su-game-item',
    templateUrl:'./game-item.component.html'
})

export class GameItemComponent implements OnInit, OnDestroy, OnChanges , DoCheck{
    @Input() sourceGame!: Game;

    ngOnInit(): void {
        console.log('Game Item Componnet created')
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('GameItemComponent input changes', changes)
    }

    ngDoCheck() :void {
        console.log('GameItemComponent checking')

    }

     ngOnDestroy(): void {
        console.log('Game Item component destroyed')
    }
}
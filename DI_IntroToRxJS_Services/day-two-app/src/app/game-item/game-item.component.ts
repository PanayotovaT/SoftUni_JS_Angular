import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges, DoCheck, ViewChild, ElementRef } from "@angular/core";

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
    @ViewChild('title')
    title: ElementRef<HTMLElement>
    
    @Input() sourceGame!: Game;

    ngOnInit(): void {
        console.log('Game Item Componnet created', this.title)
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('GameItemComponent input changes', changes)
    }

    ngDoCheck() :void {
        console.log('GameItemComponent checking')

    }

    ngAfterViewInit(): void {
        console.log('GameItemComponent after view init title', this.title)
    }

     ngOnDestroy(): void {
        console.log('Game Item component destroyed')
    }
}
import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pv-person-mood',
    templateUrl: 'pv-person-mood.html'
})
export class PersonMoodComponent implements OnInit, OnChanges {
    @Input() moodLevel: number;
    imageUrl: string;

    ngOnInit(): void {
        this.setImageUrl();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setImageUrl();
    }

    setImageUrl(): void{
        switch(this.moodLevel){
            case -1:
                this.imageUrl = './images/triste.jpg';
                break;
            case 0:
                this.imageUrl = './images/neutral.jpg';
                break;
            case 1:
                this.imageUrl = './images/feliz.jpg';
                break;
            default:
                this.imageUrl = './images/question.jpg';
                break;
        }
    }

}
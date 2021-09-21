
import { _decorator, Component, Node } from 'cc';
import { LiteEvent } from './LiteEvent';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    
    private score: number = 0;

    public get Score (): number {
        return this.score;
    }

    private set Score (value: number) {
        this.score = value;

        // This triggers the event and send the data to it's listeners
        GameManager.onScoreChanged.trigger (this.score);
    }

    start () {
        this.schedule(()=> {
            this.Score++;
        }, 1);
    }

    // If you want to listen to only one instance of the object, suggest you use node.on

    // The event other scripts can subscribe to.
    public static readonly onScoreChanged: LiteEvent<number> = new LiteEvent<number> ();

    
}


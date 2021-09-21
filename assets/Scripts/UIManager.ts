
import { _decorator, Component, Node, Label } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    
    @property(Label)
    private scoreText: Label | null = null;

    onEnable () {
        // Listen to the event that sents the score changes.
        GameManager.onScoreChanged.on (this.onScoreChanged.bind(this));
    }

    onDisable () {
        // Remember to unsubscribe after your done.
        GameManager.onScoreChanged.off (this.onScoreChanged.bind(this));
    }

    private onScoreChanged (score: number) : void {
        this.scoreText.string = `Score: ${score}`;
    }
}


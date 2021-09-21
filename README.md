# Cocos Creator Custom Events

If you're missing the C# delegates and events, which is a lot similar to `systemEvent.on()`. You can use this custom events system with more than 5 arguments limited by `node.on` also it only listens to instances.

## Usage
In the GameManger.ts

`public  static  readonly  onScoreChanged:  LiteEvent<number> =  new  LiteEvent<number> ();`

Can trigger the event by using

`GameManager.onScoreChanged.trigger (this.score);`

On the other class (UIManager.ts)

```
onEnable () {
	// Listen to the event that sents the score changes.
	GameManager.onScoreChanged.on (this.onScoreChanged.bind(this));
}
onDisable () {
	// Remember to unsubscribe after your done.
	GameManager.onScoreChanged.off (this.onScoreChanged.bind(this));
}

private onScoreChanged (score: number): void {
	console.log(score);
}
```
### Interface Example
```
// GameManager
GameManager.onScoreChanged.trigger ({index: 0, score: 10});

public static readonly onScoreChanged: LiteEvent<PlayerScore> = new LiteEvent<PlayerScore>();

export interface PlayerScore {
	index: number,
	score: number
}

// UI Manager
onEnable () {
	GameManager.onScoreChanged.on (this.onScoreChanged.bind(this));
}

private onScoreChanged(playerScore: PlayerScore): void {
	console.log ('PlayerIndex:'+ playerScore.index);
	console.log ('PlayerScore:'+ playerScore.score); 
}
```
<script>
  import CardsGrid from "./Cards/CardsGrid.svelte";

  const EMOJIS = ["🥔", '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍']
  const FULL_EMOJIS  = EMOJIS.reduce((m, i) => m.concat([i,i]),[]);

  const shuffle = FULL_EMOJIS.sort(() => Math.random() - 0.5);

  let tiles = [] 

  let currentTile = {};
  let nextTile = {};

  let first = true;
  let click = true;

  let score = 0;
  let finished = false;

  const createTiles = () => {
    for(let i = 0; i < shuffle.length; i++){
      tiles = [...tiles, { emoji: shuffle[i], active: true, key:i }];
    }
  }

  createTiles();

  const startGame =() => {
    setTimeout(() => {
      for(let i = 0; i < tiles.length; i++){
        tiles[i].active = false;
      }
    }, 1500)
  }

  const restartGame = () => {
    tiles.sort(() => Math.random() - 0.5);
    for(let i = 0; i < tiles.length; i++){
      tiles[i].active = true;
    }
    startGame()
    score = 0;
    if(finished == true){
      finished = false;
    }
  }

  startGame();

  const evaluate = (current, next) => {
    if(currentTile.character != nextTile.character && currentTile.index != nextTile.index){
      setTimeout(() => {
        tiles[currentTile.index].active = false;
        tiles[nextTile.index].active = false;
      }, 700)
    }
    else
      score++;
  }

  const flipTile = (event) => {
    const direction = parseInt(event.target.id);
    const icon = event.target.getAttribute("data")

    if(first == true){
      currentTile = {index: direction, character: icon}
      first = false;
      tiles[direction].active = true;
    }else if(first == false && direction !== currentTile.index){
      nextTile = {index:direction, character: icon}
      tiles[direction].active = true;
      first = true;
      evaluate(currentTile, nextTile)
    }
  }

  $:if(tiles.every((item) => item.active == true) && score != 0){
    finished = true;
  }else{
    finished = false;
  }

</script>

<main>
  <h1>Score: {score}</h1>
  {#if finished == false}
    <CardsGrid emojis={tiles} onClick={flipTile}/>
    <button on:click={restartGame}>Restart</button>
  {:else}
    <div id="modal">
      <h2>Game finished!! Congratulations</h2>
      <h2>This is your score: {score}</h2>
      <button on:click={restartGame}>Restart</button>
    </div>
  {/if}

</main>

<style>
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:100vw;
    height: 100vh;
  }
  button{
    margin: 10px;
    border-radius: 20px;
    cursor: pointer;
    background-color: white;
  }
  h1{
    color: white;
  }
  #modal{
    background-color: white;
    display: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    border-radius: 20px;
  }

</style>

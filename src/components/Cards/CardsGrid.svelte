<script>
  import Card from "./Card.svelte";
  export let emojis;
  export let onClick;
</script>

<main>
  {#each emojis as emoji, i}
    <Card emoji={emoji} onClick={onClick} key={i}/>   
  {/each}
</main>

<style>
  main{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }
</style>

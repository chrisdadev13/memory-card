<script>
  export let emoji;
  export let onClick;
  export let key;
</script>

<main  on:click={(event) => onClick(event)}>
  {#if emoji.active == false}
    <div id={key} data={emoji.emoji}>
      ?
    </div>
  {:else}
    <div id={key} data={emoji.emoji}>
      {emoji.emoji}
    </div>
  {/if}
</main>

<style>
  main{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin:15px;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
  }
  div{
    margin-top: 15px;
    color: #6e67d2;
    width:85px;
    height:70px;
    font-size: 36px;
  }
  @media(max-width: 550px){
    div{
      width: 70px;
      height: 60px;
    }
  }
  @media(max-width: 450px){
    div{
      width: 55px;
      height: 40px;
    }
  }
</style>

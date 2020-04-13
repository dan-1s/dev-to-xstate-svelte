<script>
    import Fetch from "./Fetch.svelte"
    let show = true;

    const reload = () => {
      show = false;
      setTimeout(() => show = true, 100)
    }

</script>

<style>
    main {
        max-width: 600px;
        margin: auto;
    }

    button {
        margin-bottom: 2rem;
    }
</style>

<main>
    <button on:click={reload}>Reload</button>

    {#if show}
        <Fetch />
    {/if}
</main>


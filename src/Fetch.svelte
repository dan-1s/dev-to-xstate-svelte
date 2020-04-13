<script>
    import machine, {FETCH, RETRY, REJECT, RESOLVE} from './machine/fetchMachine'
    import useMachine from './machine/machineStore';

    const [current, send] = useMachine(machine);

    const fetch = () => send(FETCH);
    const resolve = () => send(RESOLVE);
    const retry = () => send(RETRY);
    const reject = () => send(REJECT);

</script>

<style>
    .state {
        font-weight: 900;
        color: #ff1150;
        margin: 0;
    }

    button + button {
        margin-left: 1rem;
    }

    .final {
        color: #ff1150;
    }

    .matches {
        margin: 2rem 0;
    }

    .info {
        line-height: 1.4;
    }

    em {
        color: #ff1150;
    }

    div {
        padding: 1rem;
        border: 1px solid #ccc  ;
    }

</style>

<p class="info">
    All buttons are active for demonstration purposes, and if we click <em>Fetch</em> when in the <em>loading</em> state
    nothing will happen, same if we try to click <em>Retry</em> if we're not in the <em>failure</em> state.
</p>


<div>

    <p>
        state:
        <span class="state">
        {$current.value}
    </span>
        {#if $current.done}
            <span class="final">(final)</span>
        {/if}
    </p>

    <pre>
    {JSON.stringify($current.context, null, 2)}
</pre>

    <button on:click={fetch}>Fetch</button>
    <button on:click={resolve}>Resolve</button>
    <button on:click={reject}>Reject</button>
    <button on:click={retry}>Retry</button>

    <p class="matches">
        {#if $current.matches("loading")}
            ⏱️ Alright I'll wait ...
        {/if}

        {#if $current.matches("success")}
            🎉 Made it!
        {/if}

        {#if $current.matches("failure")}
            💩 Oh no!
        {/if}
    </p>
</div>




<script>
    import {tasks} from '$lib/data/tasks'
</script>

<h1>7 GUIs - Svelte 5</h1>
<p>This site should showcase the 7 GUIs Programming Benchmark from Eugen Kiss in the Svelte 5 framework.</p>
<p>For more information visit: <a href="https://eugenkiss.github.io/7guis/">7GUIs: A GUI Programming Benchmark</a></p>
<p>Here is a list of all 7 GUIs created in Svelte 5:</p>
<ol>
    {#each tasks.filter(({name}) => name !== "Home") as {name, path}}
        <li><a href={`/${path}`}>{name}</a></li>
    {/each}
</ol>

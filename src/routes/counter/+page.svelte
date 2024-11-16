<script lang="ts">
    import {routes, type Route} from '$lib/routes';
    import {page} from '$app/stores';

    const {name, challenge, task} : Route = routes.filter(({path}) => path === $page.url.pathname)[0];

    let count: number = $state(0);
</script>

<h1>{name}</h1>
<p><b>Challenge:</b> {challenge}</p>
<p><b>Task:</b> {task}</p>

<input type="number" disabled bind:value={count} />
<button onclick={() => count++}>Count</button>

<style>
    /* Title */
    h1 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #5d5d5d;
    }

    /* Task description */
    p {
        font-size: 16px;
        color: #666;
        margin-bottom: 20px;
    }
</style>
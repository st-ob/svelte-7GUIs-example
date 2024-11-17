<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>{data.name}</h1>
<dl>
    <dt>Challenge:</dt>
    <dd>{data.challenge}</dd>
    <dt>Task:</dt>
    <dd>{data.description}</dd>
</dl>

<div class="results">
    <h2>Challenge Results</h2>
    {#await import(`$lib/components/${data.path.charAt(0).toUpperCase() + data.path.slice(1)}.svelte`) then component}
        <component.default />
    {:catch}
        <p>Component not found!</p>
    {/await}
</div>

<style>
    /* Basic reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Styling the h1 */
    h1 {
        font-family: 'Arial', sans-serif;
        font-size: 2.5rem;
        color: #333;
        text-align: center;
        margin-bottom: 20px;
    }

    /* Styling the description list (dl) */
    dl {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f9;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    /* Styling the term (dt) */
    dt {
        font-weight: bold;
        font-size: 1.2rem;
        color: #0077cc;
        margin-top: 10px;
    }

    /* Styling the definition (dd) */
    dd {
        font-size: 1rem;
        color: #555;
        margin-bottom: 10px;
        padding-left: 20px;
    }

    /* Styling the results section */
    .results {
        max-width: 600px;
        margin: 20px auto 0;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .results h2 {
        font-size: 1.8rem;
        color: #333;
        margin-bottom: 10px;
    }

    .results p {
        font-size: 1.1rem;
        color: #555;
        line-height: 1.6;
        margin-bottom: 20px;
    }
</style>
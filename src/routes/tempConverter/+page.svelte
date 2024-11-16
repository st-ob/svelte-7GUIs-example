<script lang="ts">
    import {routes, type Route} from '$lib/routes';
    import {page} from '$app/stores';

    const {name, challenge, task} : Route = routes.filter(({path}) => path === $page.url.pathname)[0];

    class Temperature {
        #c = $state(-32);
        #f = $state(0);

        get celsius() {
            return this.#c;
        }

        set celsius(c) {
            this.#c = c;
            this.#f = c * 9/5 + 32;
        }

        get fahrenheit() {
            return this.#f;
        }

        set fahrenheit(f) {
            this.#f = f;
            this.#c = (f - 32) * 5/9;
        }
    }

    let temperature = new Temperature();
</script>

<h1>{name}</h1>
<p><b>Challenge:</b> {challenge}</p>
<p><b>Task:</b> {task}</p>


<input type="number" bind:value={temperature.celsius} /> Celsius =
<input type="number" bind:value={temperature.fahrenheit}/> Fahrenheit

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

    input {
        width: 80px;
        margin: 0 10px;
    }
</style>
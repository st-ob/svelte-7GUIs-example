<script lang="ts">
    class Temperature {
        #c = $state(-32);
        #f = $state(0);

        get celsius() {
            return this.#c;
        }

        set celsius(c) {
            this.#c = c;
            this.#f = c ? c * 9/5 + 32 : NaN;
        }

        get fahrenheit() {
            return this.#f;
        }

        set fahrenheit(f) {
            this.#f = f;
            this.#c = f ? (f - 32) * 5/9 : NaN;
        }
    }

    let temperature = new Temperature();
</script>

<input type="number" bind:value={temperature.celsius} /> Celsius =
<input type="number" bind:value={temperature.fahrenheit}/> Fahrenheit
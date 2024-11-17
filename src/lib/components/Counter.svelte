<script lang="ts">
    let count: number = $state(0);
</script>

<input type="number" disabled bind:value={count} />
<button onclick={() => count++}>Count</button>
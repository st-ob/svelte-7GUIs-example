<script lang="ts">
    type Circle = {
        id: string;
        cx: number;
        cy: number;
        r: number;
    };

    type Status = 'drawing' | 'editing';

    let status = $state<Status>('drawing');
    let circles = $state<Circle[]>([]);
    let selected = $state<Circle>()!;

    let snapshots : Circle[][] = [];
    let history = $state(-1);
    
    function drawCircle(e: MouseEvent) {
        if(status === 'editing') {
            status = 'drawing';
            snapshot();
            return;
        }

        circles.push({
            id: crypto.randomUUID(),
            cx: +(e.offsetX).toFixed(),
            cy: +(e.offsetY).toFixed(),
            r: 40
        });
        snapshot();
    }

    function snapshot() {
        snapshots.push($state.snapshot(circles));
        history++;
    }
</script>

<button onclick={() => {circles = snapshots[--history]}} disabled={history === -1}>Undo</button>
<button onclick={() => {circles = snapshots[++history]}} disabled={history === snapshots.length-1}>Redo</button>

{#if status === 'editing'}
    <div class="alert">
        <span>Adjust diameter of circle at ({selected.cx}, {selected.cy})</span>
        <input type="range" bind:value={selected.r} />
    </div>
{/if}


<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<svg onclick={drawCircle}>
    {#each circles as circle}
        <circle {...circle} class:selected={selected?.id === circle.id} 
        onclick={(e) => {
            e.stopPropagation();
            selected = circle;
        }} 
        oncontextmenu={(e) => {
            if(status === 'editing') {
                snapshot();
            };
            e.preventDefault();
            status = 'editing';
            selected = circle;
        }}/>
    {/each}
</svg>

<style>
    svg {
        width: 500px;
        height: 250px;
        border: 1px solid #000000;
        margin: 5px;
    }

    circle {
        stroke: #000;
        stroke-width: 2;
        fill: transparent;
    }

    .selected {
        fill: #444;
    }

    /* Centered alert styling */
    .alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center it */
    background-color: #333; /* Dark background */
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 9999; /* Ensure it appears above other content */
    width: 300px; /* Fixed width */
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px; /* Space between elements */
    font-size: 16px;
    }

    /* Styling for the range input */
    .alert input[type="range"] {
    width: 100%;
    margin-top: 10px;
    background-color: #444;
    border: none;
    height: 8px;
    border-radius: 5px;
    outline: none;
    transition: background-color 0.3s ease;
    }

    .alert input[type="range"]:hover {
    background-color: #555;
    }
</style>
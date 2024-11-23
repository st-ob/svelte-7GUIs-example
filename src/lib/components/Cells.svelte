<script lang="ts">
    let data = $state(Array.from(Array(100), () => new Array(26).fill({value: "", editing: false})));

    function parseFormula(formula: string) : string {
        let parsedFormula = formula.replace(/([A-Z][0-9]+)/g, (match) => {
            console.log(match);
            let value = getCellValue(match);
            return value !== undefined ? value !== '' ? value : 0 : 0;
        });
        console.log(parsedFormula);
        return eval(parsedFormula.replace('=',''));
    }

    function getCellValue(cell: string) {
        let col = cell.charCodeAt(0) - 'A'.charCodeAt(0);
        let row = parseInt(cell.substring(1));
        return data[row][col].value;
    }   
</script>

<table>
    <thead>
        <tr>
            <th></th>
            {#each Array(26) as _, columnIndex}
                <th>{String.fromCharCode(65 + columnIndex)}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as row, i}
            <tr>
                <th>{i}</th>
                {#each row as cell}
                    <td ondblclick={() => cell.editing = true} onfocusout={() => cell.editing = false}>
                        {#if cell.editing}
                            <!-- svelte-ignore a11y_autofocus -->
                            <input type="text" bind:value={cell.value} autofocus/>
                        {:else}
                            {@const displayContent = cell.value[0] !== "=" ? cell.value : parseFormula(cell.value)}
                            <span>{displayContent}</span>
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    /* Make the table itself scrollable */
    table {
    width: 100%;
    height: 100%;
    max-height: 500px;  /* Adjust the max height */
    table-layout: fixed; /* Ensure columns are fixed-width */
    border-collapse: collapse; /* For consistent cell borders */
    overflow: auto; /* Allow scrolling */
    display: block; /* Make the table a block-level element */
    }

    /* Set a minimum width for columns */
    table td {
    min-width: 100px; /* Columns won't shrink smaller than 100px */
    text-align: center;
    }

    /* Style the table header row */
    thead th {
    background-color: #f2f2f2;
    position: sticky;
    top: 0; /* Stick to the top of the table container */
    z-index: 2; /* Ensure the header stays on top */
    border-bottom: 2px solid #ddd; /* Optional: add a border */
    padding: 10px;
    }

    /* Style the first column */
    tbody td:first-child,
    thead th:first-child {
    position: sticky;
    left: 0; /* Stick to the left of the table */
    background-color: #f9f9f9; /* Optional: distinguish the first column */
    z-index: 1; /* Keep it below the header */
    border-right: 2px solid #ddd; /* Optional: add a vertical divider */
    }

    /* Style for table rows and cells */
    tbody td, tbody th {
    border: 1px solid #ddd;
    text-align: center;
    }

    /* Input fields in table cells */
    input[type="text"], span {
    width: 100%; /* Make input fill the cell */
    padding: 4px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    text-align: center;
    }

    /* Optional: Custom scrollbar styling */
    table::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }

    table::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    }

    table::-webkit-scrollbar-track {
    background: #f1f1f1;
    }
</style>
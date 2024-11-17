<script lang="ts">
    let flightType : "one-way" | "return"= $state("one-way");
    let startDate : string = $state(getTodayDate());
    let endDate : string = $state(getTodayDate());

    function getTodayDate() {
        return new Date().toISOString().slice(0, 10);
    }
    function handleSubmit(e: Event) {
        e.preventDefault();
        alert(`You have booked a ${flightType} flight on ${startDate}.`);
    }
</script>

<form onsubmit={handleSubmit}>
    <select bind:value={flightType}>
        <option value="one-way">one-way flight</option>
        <option value="return">return flight</option>
    </select>
    <input type="date" bind:value={startDate} min={getTodayDate()}/>
    <input type="date" bind:value={endDate} min={getTodayDate()} disabled={flightType==="one-way"}/>
    <button type="submit" disabled={!startDate || (startDate > endDate && flightType==="return")}>
        Book
    </button>
</form>

{#if startDate > endDate && flightType!=="one-way"}
    <p>Start Date needs to be before Return Date</p>
{/if}
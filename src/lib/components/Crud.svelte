<script lang="ts">
    type Person = {
        name: string;
        surname: string
    };

    let people: Person[] = $state([]);
    let selected = $state<Person>();
    let person = $state({name: '', surname: ''});
    let prefix = $state("");

    const filteredPeople = $derived(
        prefix ? people.filter(({surname}) => surname.toLowerCase().startsWith(prefix)) : people
    );

    $effect(() => {
        person = {
            name: selected?.name ?? '',
            surname: selected?.surname ?? ''
        }
    });

    function createPerson() {
        if(person.name !== "" && person.surname !== "") {
            people.push(person);
            clearInput();
        }
    }

    function updatePerson() {
        if(selected) {
            const index = people.indexOf(selected);
            people[index] = {name: person.name, surname: person.surname};
            clearInput();
        }
    }

    function deletePerson() {
        if(selected) {
            people = people.filter(p => p !== selected);
            clearInput();
        }    
    }

    function clearInput() {
        person = {name: '', surname: ''};
    }
</script>

<form>
    <div class="left-section">
        <label for="prefix">Filter prefix:</label>
        <input id="prefix" type="text" bind:value={prefix} />
        <select id="select-name" size="5" bind:value={selected}>
            {#each filteredPeople as person}
                <option value={person}>{person.surname}, {person.name}</option>
            {/each}
        </select>
    </div>

    <div class="right-section">
        <label for="name">Name:</label>
        <input id="name" type="text" bind:value={person.name}/>
        <label for="surname">Surname:</label>
        <input id="surname" type="text" bind:value={person.surname}/>
    </div>

    <div class="form-buttons">
        <button type="submit" onclick={createPerson}>Create</button>
        <button type="button" onclick={updatePerson}>Update</button>
        <button type="button" onclick={deletePerson}>Delete</button>
    </div>
</form>

<style>
    form {
        width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .left-section,
    .right-section {
        display: flex;
        flex-direction: column;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input, select {
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 10px;
        width: 90%; /* Ensure both input and select take up full width */
    }

    select {
        height: 150px;
        overflow-y: scroll;
    }

    .form-buttons {
        grid-column: span 2;
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        margin-top: 20px;
    }

    button {
        padding: 8px 15px;
        font-size: 14px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button[type="submit"] {
        background-color: #4CAF50;
        color: white;
    }

    button[type="button"] {
        background-color: #f44336;
        color: white;
    }

    button[type="button"]:nth-child(2) {
        background-color: #ffa500;
    }
</style>
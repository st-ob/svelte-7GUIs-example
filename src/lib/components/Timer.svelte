<script lang="ts">
    let duration = $state(0);
    let time = $state(0);

    $effect(() => {
      if(!duration) return;
      let timerID = setInterval(() => {
            time += 0.01;
            if(time >= duration) {
              clearInterval(timerID);
            }
      }, 10);

      return () => {
          clearInterval(timerID);
      }
    })

</script>


<label for="timer">Elapsed Time: </label>
<meter id="timer" value={time} min="0" max={duration}>{time} out of {duration}</meter>
<p>{time.toFixed(2)} s</p>
<label for="slider">Duration: </label>
<input id="slider" type="range" bind:value={duration} min="0" max="60" />
<button onclick={() => {time = 0}}>Reset</button>

<style>
    label {
      font-size: 1rem;
      color: #555;
      margin-bottom: 8px;
      font-weight: bold;
      text-align: left;
      display: block;
    }

    meter {
      width: 100%;
      max-width: 300px;
      height: 20px;
      margin-bottom: 15px;
      border-radius: 10px;
      background-color: #f1f1f1;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    meter::-webkit-meter-bar {
      background: #f1f1f1;
      border-radius: 10px;
    }

    meter::-webkit-meter-optimum-value {
      background: #4caf50;
      border-radius: 10px;
    }

    meter::-webkit-meter-suboptimum-value {
      background: #ffeb3b;
      border-radius: 10px;
    }

    meter::-webkit-meter-even-less-good-value {
      background: #f44336;
      border-radius: 10px;
    }

    p {
      font-size: 1.1rem;
      color: #555;
      margin-top: 5px;
      font-weight: bold;
    }

    input[type="range"] {
      width: 100%;
      max-width: 300px;
      height: 10px;
      margin: 15px 0;
      background: #ddd;
      border-radius: 5px;
      -webkit-appearance: none;
      appearance: none;
      transition: background 0.3s ease;
    }

    input[type="range"]::-webkit-slider-runnable-track {
      background: #ddd;
      height: 10px;
      border-radius: 5px;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: #4caf50;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    input[type="range"]:hover::-webkit-slider-thumb {
      background: #388e3c;
    }

    input[type="range"]:active::-webkit-slider-thumb {
      background: #2e7d32;
    }
</style>
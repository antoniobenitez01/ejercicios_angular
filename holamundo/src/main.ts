import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 style="font-size:10vw; margin-bottom:2vh">el juego</h1>
    <h2>
      Has perdido el juego
    </h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

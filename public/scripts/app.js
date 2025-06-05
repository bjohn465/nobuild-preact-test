import { h, render } from 'preact'
import { useState } from 'preact/hooks'
import htm from 'htm'

const html = htm.bind(h)

function App() {
	let [count, setCount] = useState(0)

	return html`
		<div>
			<p>Count: ${count}</p>
			<button onClick=${() => setCount(count + 1)}>Increment</button>
		</div>
	`
}

render(html`<${App} />`, document.body)

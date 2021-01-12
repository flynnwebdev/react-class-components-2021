import React from "react"
import Clock from "./Clock"

const App = () => {
	const plus8 = new Date()
	plus8.setHours(plus8.getHours() - 8)
	return (
		<>
			<Clock date={new Date()} />
			<Clock date={plus8} zone="Bulgaria" />
		</>
	)
}

export default App

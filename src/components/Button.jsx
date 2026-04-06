function Button({ call_to_action = "Click Me!", action }) {
        //
        //<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        return (
                //<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <button className="btn btn-blue" onClick={action}>
                        { call_to_action }
                </button>
        )
}

export default Button

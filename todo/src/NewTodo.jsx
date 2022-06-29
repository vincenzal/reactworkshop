function NewTodo() {
    return (<form>
        <h2>WU TODO Liste</h2>
        <input
            type="text"
            placeholder="Neue Aufgabe..."
            autoFocus
            />
        <button className="addBtn">Add</button>
    </form>)
}

export default NewTodo;
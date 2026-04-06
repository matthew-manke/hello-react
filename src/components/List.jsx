function List({ listItems = [] }) {
        const items = listItems.map(item => <li>{item}</li>);
        return (
                <>
                        <ul className="list-none ">
                                {items}
                        </ul>
                </>
        )
}

export default List

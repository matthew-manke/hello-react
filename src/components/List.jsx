function List({ listItems = [] }) {
  if (listItems.length === 0) {
    return <div>No quotes yet?</div>;
  }
  return (
    <>
      <ul className="list-none ">
        {listItems.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  )
}

export default List

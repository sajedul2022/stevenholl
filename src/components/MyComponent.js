function MyComponent() {

    
  const myList = ["apple", "banana", "orange"];

  const handleClick = (item) => {
    console.log("You clicked:", item);
  };

  return (
    <ul>
      {myList.map((item) => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
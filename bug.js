```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Component mounted!');
    return () => {
      // Cleanup function to run when component unmounts or updates
      console.log('Component unmounting or updating!');
    };
  }, []); // Empty dependency array ensures only one execution

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
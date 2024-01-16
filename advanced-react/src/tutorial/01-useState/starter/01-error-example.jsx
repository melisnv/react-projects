const ErrorExample = () => {

  let count=0;

  const handleClick=()=>{
    count = count+1;
    return count;
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="button">
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;

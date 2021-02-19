import useFetch from "./useFetch";

const Character = () => {
  const { data, isPending, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  const handleButton = () => {
    window.location.reload();
  };

  return (
    <div className="Character">
      {isPending && (
        <div
          style={{
            color: "#6ec72d",
          }}
        >
          loading.....
        </div>
      )}
      {error && (
        <div
          style={{
            color: "#6ec72d",
          }}
        >
          {error}
        </div>
      )}

      {data && (
        <div className="Character__jokes">
          <img src={`${data.icon_url}`} alt="" />
          <h2>{data.value}</h2>
          {/* <p>Written by {blogs.author}</p>
            <div>{blogs.body}</div> */}
          <button onClick={handleButton}>New Joke</button>
        </div>
      )}
    </div>
  );
};

export default Character;

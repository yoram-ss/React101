import { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // page end in 280

  useEffect(() => {
    fetch(`https://gorest.co.in/public/v2/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [page]);

  const handlePagination = (e, status) => {
    if (status === "next") {
      setPage((prevPage) => prevPage + 1);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="App mb">
      <h2>User Lists</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong!</div>}
      {user.length > 0 ? (
        <ul className="user-list mb">
          {user.map((e) => (
            <li className="user-item" key={e.id}>
              <div>
                <strong>
                  {e.name} ({e.id})
                </strong>
              </div>
              <div className="sm">{e.email}</div>
              <div>
                {e.gender} - {e.status}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="App mb">No user found...</div>
      )}
      <button onClick={handlePagination} disabled={page <= 1 && true}>
        Prev
      </button>
      <button onClick={(e) => handlePagination(e, "next")}>Next</button>
    </div>
  );
};

export default Fetch;

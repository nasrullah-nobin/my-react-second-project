export default function Data({ data }) {
  const {
    name,
    company: { name: names },
    address: { city },
  } = data;
  return (
    <div className="card">
      <h3>User Name: {name}</h3>
      <h4>Company Name: {names} </h4>
      <h5>City: {city} </h5>
    </div>
  );
}

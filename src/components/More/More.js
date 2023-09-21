import './More.css';

function More({handleaddMoreMovies}) {
  return (
    <section className="more">
        <button onClick={handleaddMoreMovies} type='button' className="more__button">Ещё</button>
    </section>
  );
}

export default More;
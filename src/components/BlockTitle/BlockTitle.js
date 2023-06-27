import './BlockTitle.css';

function BlockTitle({title}) {
  return (
    <section className="blockTitle">
       <h2 className='blockTitle__title'>{title}</h2>
    </section>
  );
}

export default BlockTitle;
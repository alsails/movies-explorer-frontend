import './BlockTitle.css';

function BlockTitle({title}) {
  return (
    <section className="blockTitle">
       <p className='blockTitle__title'>{title}</p>
    </section>
  );
}

export default BlockTitle;
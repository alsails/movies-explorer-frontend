import './BlockTitle.css';

function BlockTitle({title}) {
  return (
    <div className="blockTitle">
       <h2 className='blockTitle__title'>{title}</h2>
    </div>
  );
}

export default BlockTitle;
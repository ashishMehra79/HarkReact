import './popupCards.css';
function PopupCards(props){
  return(props.trigger) ? (
    <div className='popup-card'>
      <ul className='article-share'>
        <li className='article-shareItem share-icon'>
          <a><i className='fa-brands fa-facebook-square'></i></a>
        </li>
        <li className='article-shareItem share-icon'>
          <a><i className='fa-brands fa-twitter'></i></a>
        </li>
        <li className='article-shareItem share-icon'>
          <a><i className='fa-solid fa-link'></i></a>
        </li>
        <li className='article-shareItem share-icon'>
          <a><i className='fa-solid fa-envelope'></i></a>
        </li>
      </ul>
    </div>
  ): "";
  
}

export default PopupCards;

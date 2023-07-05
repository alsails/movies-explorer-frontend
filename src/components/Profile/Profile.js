import './Profile.css';
import profile from '../../utils/profile'

function Profile() {
  return (
    <section className="profile">
        <div className='profile__container'>
            <h2 className='profile__title'>Привет, {profile.name}!</h2>
            <div className='profile__info'>
                <p className='profile__info__title'>Имя</p>
                <p className='profile__info__text'>{profile.name}</p>
            </div>
            <div className='profile__info'>
                <p className='profile__info__title'>E-mail</p>
                <p className='profile__info__text'>{profile.email}</p>
            </div>
            <button className='profile__edit'>Редактировать</button>
            <button className='profile__signout'>Выйти из аккаунта</button>
        </div>
    </section>
  );
}

export default Profile;
import "./NotFound.css";
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <main>
            <div className="notFound">
                <div className="notFound__container">
                    <h1 className="notFound__title">404</h1>
                    <p className="notFound__description">Страница не найдена</p>
                    <button onClick={goBack} type="button" className="notFound__return">Назад</button>
                </div>
            </div>
        </main>
    );
}

export default NotFound;

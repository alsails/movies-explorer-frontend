import "./NotFound.css";

function NotFound() {
    return (
        <main>
            <div className="notFound">
                <div className="notFound__container">
                    <h1 className="notFound__title">404</h1>
                    <p className="notFound__description">Страница не найдена</p>
                    <button type="button" className="notFound__return">Назад</button>
                </div>
            </div>
        </main>
    );
}

export default NotFound;

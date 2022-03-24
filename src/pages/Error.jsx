//fixme: make an error context, so that there can be a message sent depending on what error occurred (for example, if the data fetched two of the same resources, this page should detail that -- if there was an error in server connecting initially then output that, too!). Make sure the proper components (Ontap) are subscribed to this context only for this pages output purposes.
// Make sure to include in app description that is potential manufacturing of an error is part of showcasing additional routing skills
const Error = () => {
    const clickHandler = (e) => {
        window.location.href = "/";
    };
    return (
        <div>
            This is the error page
            <button onClick={clickHandler} className="btn btn-ghost">
                here to reload app
            </button>
        </div>
    );
};

export default Error;

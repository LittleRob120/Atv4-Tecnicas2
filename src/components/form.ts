export const Form = (props) => {
    const { onSubmit, children } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    );
};
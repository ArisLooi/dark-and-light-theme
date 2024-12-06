/* Form component that renders the form with buttons. */
export default function Form({ theme }) {
    return (
        <panel title="Welcome" theme={theme}>
            <Button theme={theme}>Sign up</Button>
            <Button theme={theme}>Log in</Button>
        </panel>
    );
}

/* Panel component that wraps the form elements and applies the theme. */
function Panel({ title, children, theme }) {
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

/* Button component that renders a button with the appropriate theme. */
function Button({ children, theme }) {
    const className = 'button-' + theme;
    return (
        <button className={className}>{children}</button>
    )
}

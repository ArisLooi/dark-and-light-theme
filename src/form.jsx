export default function Form({ theme }) {
    return (
        <panel title="Welcome" theme={theme}>
            <Button theme={theme}>Sign up</Button>
            <Button theme={theme}>Log in</Button>
        </panel>
    );
}

function Panel({ title, children, theme }) {
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button({ children, theme }) {
    const className = 'button-' + theme;
    return (
        <button className={className}>{children}</button>
    )
}
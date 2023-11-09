const ItemListConteiner = ({greeting}) => {
    const greetingStyles = {
        fontSize: '20px',
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return(
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
};

export default ItemListConteiner;
// 인라인 스타일 예
export const InlineStyle = () => {
    const containerStyle = {
        border: 'solid 2px #392eff',
        borderRadius: '20px',
        padding: '8px',
        justifyContent: 'space-around',
        alignItems: 'center'
    };
    const titleStyle = {
        margin: 0,
        color: '#3d84a8'
    };
    const buttonStyle = {
        backgroundColor: '#abdee8'
    };

    return(
        <div style={containerStyle}>
            <p style={titleStyle}>Inline Style</p>
            <button style={buttonStyle}>APPLY</button>
        </div>
    )
}
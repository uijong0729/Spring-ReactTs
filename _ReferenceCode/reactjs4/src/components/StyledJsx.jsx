export const StyledJsx = () => {
    return (
        <div className="container">
            <p className="title"> Styled Jsx </p>
            <button className="button">APPLY</button>
            <style jsx="true">
            {`
                .container {
                    border: solid 2px #392eff;
                    border-radius: 20px;
                    padding: 8px;
                    justify-content: space-around;
                    align-items: center
                }

                .title {
                    margin: 0;
                    color: #3d84a8;
                }

                .button {
                    background-color: #abdee8;
                    &:hover{
                        background-color: #392eff;
                        color: aliceblue;
                        cursor: pointer;
                    }
                };
            `}
            </style>
        </div>
    )
}
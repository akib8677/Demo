import { memo } from "react";

const Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h1>My Todos</h1>
            {
                todos.map((t, i) => {
                    return (
                        <p key={i}>{t}</p>
                    )
                })
            }
        </>
    )
}

export default memo(Todos);
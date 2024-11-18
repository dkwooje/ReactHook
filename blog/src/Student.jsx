

export default function Student({name, dispatch, id}){
    return(
        <div>
            <span>{name}</span>
            <button onClick={() => {
                dispatch({type: 'delete-student', payload: {id}})
            }}>삭제</button>
        </div>
    )
}
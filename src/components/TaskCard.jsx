
const TaskCard = ({task}) =>{
    return(
    <div>
    <h2>{task.title}</h2>
    <h5>{task.description}</h5>
</div>)
}

export default TaskCard;
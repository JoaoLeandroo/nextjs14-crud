import { deleteEmployee } from "@/lib/action";

const DeleteButton = ({ id }: {id: string}) => {
    
    const DeleteEmployeeWithId = deleteEmployee.bind(null, id)
    
    return ( 
        <form action={DeleteEmployeeWithId}>
            <button className="btn btn-warning">Delete</button>
        </form>
     );
}
 
export default DeleteButton;
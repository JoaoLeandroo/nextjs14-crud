// import { getEmployeeList } from "@/lib/action"
import { getData } from "@/lib/action"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import DeleteButton from "./delete"

const TableData = async ({query}: {query: string}) => {

    // const listEmployee = await getEmployeeList(query)
    const listEmployee = await getData(query)
    return (
        <table className="table table-zebra">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Phone Number</th>
                    <th className="py-3 px-6">Create At</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {listEmployee.map((todo, index): any => (
                    <tr className="bg-white border-b" key={todo.id}>
                        <td className="py-3 px-6">{todo.id.length > 8 ? `${todo.id.substring(0, 8)}...` : todo.id}</td>
                        <td className="py-3 px-6">{todo.name}</td>
                        <td className="py-3 px-6">{todo.email}</td>
                        <td className="py-3 px-6">{todo.phone}</td>
                        <td className="py-3 px-6">{formatDate(todo.createAt.toString())}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <Link
                                href={`/employee/edit/${todo.id}`}
                                className="btn btn-info"
                            >
                                Edit
                            </Link>
                            <DeleteButton id={todo.id}/>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

    )
}

export default TableData
"use client";

import { UpdateEmployee } from "@/lib/action";
import { useFormState } from "react-dom";
import { Employee } from "@prisma/client";

const UpdateForm = ({ employee }: { employee: Employee }) => {
  const UpdateEmployeeWithId = UpdateEmployee.bind(null, employee.id);
  const [state, formAction] = useFormState(UpdateEmployeeWithId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1"
          >
            Nome completo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full"
            placeholder="Nome completo"
            defaultValue={employee.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered input-primary w-full"
            placeholder="usuario1212@example.com"
            defaultValue={employee.email}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1"
          >
            Telefone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="input input-bordered input-primary w-full"
            placeholder="Número de telefone"
            defaultValue={employee.phone}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>

        <button className="btn btn-accent w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;

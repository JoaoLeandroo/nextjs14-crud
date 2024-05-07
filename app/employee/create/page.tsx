"use client";

import { useFormState } from "react-dom";
import { saveEmployee } from "@/lib/action";

const CreateEmployeePage = () => {
  const [state, formState] = useFormState(saveEmployee, null);

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-11">Adicionar novo Funcionario</h1>
      <div className="bg-zinc-700 rounded-lg">
        <form action={formState} className="w-full flex flex-col p-5">
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
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
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
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white mb-1"
            >
              Número do telefone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="input input-bordered input-primary w-full"
              placeholder="Informe o seu número"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
          </div>

          <button className="btn btn-primary">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeePage;

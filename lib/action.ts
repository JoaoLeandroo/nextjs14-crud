"use server"

import { z } from "zod"
import { prisma } from './prisma';
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const EmployeeSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(6),
    phone: z.string().min(11),
})


// Salvar usuario
export const saveEmployee = async (prevSate: any, formData: FormData) => {
    const validatedFields = EmployeeSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        await prisma.employee.create({
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone
            },
        })
    }catch(error) {
        return {message: "Failed to create new employee"}
    }
    
    revalidatePath("/employee")
    redirect("/employee")
}

// Exibir todos os usuarios
export const getEmployeeList = async (query: string) => {
    try {
        const employee = await prisma.employee.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                createAt: true,
            },
            orderBy: {
                createAt: "desc"
            }
        })
        return employee
    }catch(error) {
        throw new Error("Failed to fetch employees data")
    }
}

// Atualizar usuario

export const getEmployeeId = async (id: string) => {
    try {
        const employee = await prisma.employee.findUnique({
            where: {id},
        })
        return employee
        
    } catch(error) {
        throw new Error("Failed to fetch contact data")
    }
}

export const UpdateEmployee = async (id: string, prevSate: any, formData: FormData) => {

    const validatedFields = EmployeeSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.employee.update({
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
            },
            where: {id},
        })
    }catch(error) {
        return {message: "Falha ao atualizar o usuario"}
    }

    revalidatePath("/employee")
    redirect("/employee")
}


// Deletar um usuario
export const deleteEmployee = async (id: string) => {
    try {
        await prisma.employee.delete({
            where: {id},
        })
    }catch(error) {
        return {message: "Falha ao deletar usuario"}
    }

    revalidatePath("/employee")
}


export const getData = async (query: string) => {
    try {
        const employee = await prisma.employee.findMany({
            where: {
                name: {
                    contains: query,
                }
            },
            orderBy: {
                createAt: "desc",
            }
        })
        return employee
    }catch(error) {
        throw new Error("Falha ao buscar o usuario")
    }
}
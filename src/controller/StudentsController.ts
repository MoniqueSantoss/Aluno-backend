import { getRepository } from "typeorm";
import { Students } from '../entity/Students';
import { Request, Response } from "express";
 
export const getStudents = async(request: Request, response: Response) => 
{
    const students = await getRepository(Students).find()
    return response.json(students);
};

export const saveStudent = async(request: Request, response: Response) => {
    const student = await getRepository(Students).save(request.body)
    return response.json(student);
};

export const getStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const student = await getRepository(Students).findOne(id)
    return response.json(student);
};

export const updateStudent = async(request: Request, response: Response) => 
{
    const {id} = request.params
    const student = await getRepository(Students).update(id, request.body)
 
    if (student.affected == 1){
        const studentUpdated = await getRepository(Students).findOne(id)
        return response.json(studentUpdated);
    } else{
        return response.status(404).json( {message: 'Aluno não encontrada!'} )
    }
};
 
export const deleteStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const student = await getRepository(Students).delete(id)
 
    if (student.affected == 1){
        return response.status(200).json( {message: "Aluno excluída com sucesso!"} );
    } else{
        return response.status(404).json( {message: 'Aluno não encontrada!'} )
    }
};
 
export const matriculadoStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const student = await getRepository(Students).update(id, {
        matriculado : false,
    })
 
    if (student.affected == 1){
        const studentMatriculado = await getRepository(Students).findOne(id)
        return response.json(studentMatriculado);
    } else{
        return response.status(404).json( {message: 'Aluno não encontrada!'} )
    }
};


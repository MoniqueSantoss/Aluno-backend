import { Router, request, response, Request, Response} from 'express'
 
import { getStudents } from './controller/StudentsController';
import { saveStudent } from './controller/StudentsController';
import { getStudent} from './controller/StudentsController';
import { updateStudent } from './controller/StudentsController';
import { deleteStudent} from './controller/StudentsController';
import { matriculadoStudent } from './controller/StudentsController';

const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/students', getStudents)
routes.post('/students',saveStudent)
routes.get('/students/:id', getStudent)
routes.put('/students/:id', updateStudent)
routes.delete('/students/:id', deleteStudent)
routes.patch('/students/:id', matriculadoStudent)

export default routes

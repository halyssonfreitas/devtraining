import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService){}

    @Get()
    findAll() {
        return this.coursesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        const course = this.coursesService.findOne(id)

        if (!course){
            throw new HttpException(
                `Course ID ${id} not found`,
                HttpStatus.NOT_FOUND
            )
        }

        return course
    }

    @Post()
    create(@Body() body){
        return this.coursesService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.coursesService.update(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coursesService.delete(id)
    }
}

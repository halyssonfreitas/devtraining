import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

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
    create(@Body() createCourseDto:CreateCourseDto){
        return this.coursesService.create(createCourseDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto:UpdateCourseDto){
        return this.coursesService.update(id, updateCourseDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coursesService.delete(id)
    }
}

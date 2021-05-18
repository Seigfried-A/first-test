import { Controller, Get, Param } from '@nestjs/common';
import { SquareService } from './square.service';

@Controller()
export class SquareController {
    constructor(private readonly squareService: SquareService) {}

    @Get('square/:number')
    calcSqr(@Param() params): number{
        return parseInt(params.number) * parseInt(params.number);
    }

    @Get('square-root/:number')
    getOneBook(@Param() params): number {
        return Math.sqrt(params.number)
            
    }

}

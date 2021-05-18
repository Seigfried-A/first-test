import { Module } from '@nestjs/common';
import { SquareModule } from './square/square.module';

@Module({
  imports: [SquareModule],
  
})
export class AppModule {}

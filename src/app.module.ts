import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tip } from './entities/Tip';
import { TipCategory } from './entities/TipCategory';
import { TipPhoto } from './entities/TipPhoto';
import { TipsModule } from './tips/tips.module';

@Module({
  imports: [
    TipsModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'host',
      port: 1433,
      username: 'username',
      password: 'password',
      database: 'database',
      //entities: ['dist/**/*.entity{.ts,.js}'], not working
      entities: [Tip, TipPhoto, TipCategory],
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

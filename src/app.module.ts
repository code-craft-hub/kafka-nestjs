import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { ConsumeService } from './consume.service';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [AppService, ConsumeService],
})
export class AppModule {}

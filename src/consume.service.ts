import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './kafka/consumer.service';

@Injectable()
export class ConsumeService implements OnModuleInit {
  constructor(private readonly consumerService: ConsumerService) {}

  async onModuleInit() {
    await this.consumerService.consume(
      {
        topics: ['test'],
        fromBeginning: false,
      },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log('LOGGING FROM CONSUME SERVICE _________ :', {
            value: message.value?.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
            offset: message.offset,
            timestamp: message.timestamp,
          });
        },
      },
    );
  }
}

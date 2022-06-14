import { SQSEvent } from "aws-lambda";

const aws_sdk = require('aws-sdk');

export const handler = async(event: SQSEvent) => {
  const s3 = new aws_sdk.S3();
  const params = {
    Bucket: process.env.BUCKET,
    CopySource: event.Records[0].body,
    Key: 'my-data.txt'
  }
  let response = await s3.copyObject(params).promise();
}
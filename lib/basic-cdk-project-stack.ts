import { Stack, StackProps } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BasicCdkProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    let _lambda = new NodejsFunction(this, 'myLambda', {
      functionName: 'myLambda',
      handler: 'myLambda.ts'
    });

    let _bucket = new Bucket(this, 'myBucket', {
      bucketName: 'myBucket',
    });

    _bucket.grantReadWrite(_lambda);
    _lambda.addEnvironment('BUCKET', _bucket.bucketName);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'BasicCdkProjectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

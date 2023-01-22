import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const configs = new pulumi.Config();
const stack = pulumi.getStack();
const org = pulumi.getOrganization();
const ec2Ref = new pulumi.StackReference(`${org}/${configs.require('dest')}/${stack}`)

// Create an AWS resource (S3 Bucket)
// const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
export const connection = {
    user: ec2Ref.getOutput('user'),
    host: ec2Ref.getOutput('publicIp')
}
export const dynamicConfigsPath = 'swarm-controller/configs/traefik'
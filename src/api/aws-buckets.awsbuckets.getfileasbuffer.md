<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@hapoosjs/aws-buckets](./aws-buckets.md) &gt; [AWSBuckets](./aws-buckets.awsbuckets.md) &gt; [getFileAsBuffer](./aws-buckets.awsbuckets.getfileasbuffer.md)

## AWSBuckets.getFileAsBuffer() method

Download file contents

<b>Signature:</b>

```typescript
getFileAsBuffer(bucketName: string, filePath: string): Promise<BucketFile>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  bucketName | string | Bucket name |
|  filePath | string | File key or fully qualified name |

<b>Returns:</b>

Promise&lt;[BucketFile](./api-buckets.bucketfile.md)<!-- -->&gt;

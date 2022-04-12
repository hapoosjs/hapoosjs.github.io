<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@hapoosjs/api-buckets](./api-buckets.md) &gt; [Buckets](./api-buckets.buckets.md) &gt; [setEncryption](./api-buckets.buckets.setencryption.md)

## Buckets.setEncryption() method

Turn default server side encryption of bucket files on or off

<b>Signature:</b>

```typescript
setEncryption(bucketName: string, flag: boolean, options?: SetEncryptionOptions): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  bucketName | string | Bucket name |
|  flag | boolean | true if you want to encrypt files in this bucket by default |
|  options | [SetEncryptionOptions](./api-buckets.setencryptionoptions.md) | <i>(Optional)</i> |

<b>Returns:</b>

Promise&lt;void&gt;

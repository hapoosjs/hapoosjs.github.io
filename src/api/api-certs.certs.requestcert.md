<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@hapoosjs/api-certs](./api-certs.md) &gt; [Certs](./api-certs.certs.md) &gt; [requestCert](./api-certs.certs.requestcert.md)

## Certs.requestCert() method

Request a new certificate

<b>Signature:</b>

```typescript
requestCert(domain: string, options?: RequestCertOptions): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  domain | string | Primary domain for the certificate |
|  options | [RequestCertOptions](./api-certs.requestcertoptions.md) | <i>(Optional)</i> Additional certificate domains |

<b>Returns:</b>

Promise&lt;string&gt;

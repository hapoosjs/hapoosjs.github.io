# Hapoos.js
## What is Hapoos.js?
Hapoos.js is a progressive framework for building cloud-native applications. The framework has three key goals:

* Reduce complexity of developing cloud-native applications
* Minimize cost of deployment
* Make cloud applications secure by design

Hapoos.js provides an API, defined as a collection of Typescript interfaces,  that abstracts cloud resource management. It provides a concrete implementation of the APIs on major cloud platforms. It further offers a higher layer of APIs that encapsulates best practices for developing cost-effective and secure cloud applications. All APIs are accompanied by a Command Line Interface (CLI) to enable interactive usage of complete Hapoos.js functionality.
## Installation
Hapoos.js is availble as a set of NPM packages, each package providing an API or implementation of a type of cloud resource such as cloud buckets. Currently, the following packages are available:
* @hapoosjs/api-common - Common classes and interfaces shared by all Hapoos.js modules
* @hapoosjs/api-buckets - API for managing cloud buckets
* @hapoosjs/api-certs - API for managing SSL/TLS certificates
* @hapoosjs/aws-buckets - AWS implementation of buckets API
* @hapoosjs/aws-certs - AWS implementation of Certificates API
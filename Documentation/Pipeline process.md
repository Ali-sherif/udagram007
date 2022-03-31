# Pipeline Process

when make any change in code and commit this change and push it in github the pipeline will work and series of events will excute

- Docker container set up
- setup environment
- install node.js
- install aws cli
- configure aws keys
- install eb
- install dependencies udagram-frontend
- install dependencies udagram-api
- build udagram-frontend
- build udagram-api
- deploy udagram-fronend inside s3 bucket
- deploy udagram-api that live in elastic beanstalk

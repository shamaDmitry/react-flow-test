import LambdaFunction from 'react-aws-icons/dist/aws/iot/LambdaFunction';
import DBM from 'react-aws-icons/dist/aws/db/DBM';

// export const nodes = [
//   {
//     id: "customer",
//     position: { x: 10, y: 10 },
//     type: "input",
//     data: {
//       label: "Customer"
//     }
//   },
//   {
//     id: 'clientDataLayer',
//     data: { label: 'test' },
//     type: 'group',
//     position: { x: 50, y: 100 },
//     style: {
//       width: 300,
//       height: 300,
//     },
//   },
//   {
//     id: 'clientDataLayerLambda',
//     data: { label: <LambdaFunction size={44} /> },
//     position: { x: 75, y: 10 },
//     parentNode: 'clientDataLayer',
//     extent: 'parent',
//   },
//   {
//     id: 'clientDataLayerStorageEngine',
//     type: 'output',
//     data: {
//       label: <div><p style={{ margin: 0 }}>Storage engine</p><DBM size={44} /></div>
//     },
//     position: { x: 75, y: 150 },
//     parentNode: 'clientDataLayer',
//     extent: 'parent',
//   },
//   {
//     id: 'AWSCloud',
//     data: { label: 'test' },
//     type: 'group',
//     position: { x: 400, y: 100 },
//     style: {
//       width: 300,
//       height: 300,
//     },
//   },
//   {
//     id: 'apiGateway',
//     data: {
//       label: <div><p>API Gateway</p></div>
//     },
//     position: { x: 50, y: 0 },
//     parentNode: 'AWSCloud',
//     extent: 'parent',
//   },
//   {
//     id: 'awsEC2',
//     data: {
//       label: <div><p>awsEC2</p></div>
//     },
//     position: { x: 50, y: 100 },
//     parentNode: 'AWSCloud',
//     extent: 'parent',
//   },
//   {
//     id: 'awsS3',
//     type: 'output',
//     data: {
//       label: <div><p>aws S3</p></div>
//     },
//     position: { x: 50, y: 200 },
//     parentNode: 'AWSCloud',
//     extent: 'parent',
//   },
// ];

// export const edges = [
//   { id: 'customer-clientDataLayerLambda', source: 'customer', target: 'clientDataLayerLambda', label: 'API Call' },
//   {
//     id: 'clientDataLayerLambda-clientDataLayerStorageEngine',
//     source: 'clientDataLayerLambda',
//     target: 'clientDataLayerStorageEngine',
//     label: 'Store data'
//   },
//   {
//     id: 'clientDataLayerLambda-apiGateway',
//     source: 'clientDataLayerLambda',
//     target: 'apiGateway',
//     label: 'Call backend'
//   },
//   {
//     id: 'apiGateway-awsEC2',
//     source: 'apiGateway',
//     target: 'awsEC2',
//     label: 'Compute'
//   },
//   {
//     id: 'awsEC2-awsS3',
//     source: 'awsEC2',
//     target: 'awsS3',
//     label: 'Store'
//   },
// ];

export const nodes = [
  {
    "id": "1",
    "type": "AWS:MobileClient",
    "type": "default",
    "position": { x: 0, y: 0 },
    "data": {
      "label": "Customer"
    }
  },
  {
    "id": "2",
    "type": "input",
    "position": { x: 0, y: 100 },
    "data": {
      "label": "Client data layer"
    },
    style: {
      width: 300,
      height: 300,
    },
  },
  {
    "id": "2a",
    "type": "AWS:LambdaFunction",
    "position": { x: 50, y: 50 },
    "parentNode": "2",
    "data": {
      "label": "Greengrass lambda"
    }
  },
  {
    "id": "2b",
    "type": "AWS:DB",
    "position": { x: 50, y: 100 },
    "parentNode": "2",
    "data": {
      "label": "Storage engine"
    }
  },
  {
    "id": "3",
    "position": { x: 400, y: 100 },
    "type": "AWS:AWSCloud",
    "data": {
      "label": "AWS cloud"
    },
    style: {
      width: 300,
      height: 300,
    },
  },
  {
    "id": "3a",
    "type": "AWS:APIGateway",
    "position": { x: 50, y: 50 },
    "parentNode": "3",
    "data": {
      "label": "API gateway"
    }
  },
  {
    "id": "3b",
    "type": "AWS:EC2",
    "position": { x: 50, y: 100 },
    "parentNode": "3",
    "data": {
      "label": "AWS EC2"
    }
  },
  {
    "id": "3c",
    "position": { x: 50, y: 150 },
    "type": "AWS:S3",
    "parentNode": "3",
    "data": {
      "label": "Object storage"
    }
  }
]

export const edges = [
  {
    "id": "e1-2a",
    "source": "1",
    "target": "2a",
    "data": {
      "label": "API call"
    }
  },
  {
    "id": "e2a-2b",
    "source": "2a",
    "target": "2b",
    "data": {
      "label": "API call"
    }
  },
  {
    "id": "e2a-3a",
    "source": "2a",
    "target": "3a",
    "data": {
      "label": "Call backend"
    }
  },
  {
    "id": "e3a-3b",
    "source": "3a",
    "target": "3b",
    "data": {
      "label": "Make computation"
    }
  },
  {
    "id": "e3b-3c",
    "source": "3b",
    "target": "3c",
    "data": {
      "label": "Write to S3"
    }
  }
]
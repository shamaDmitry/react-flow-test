import LambdaFunction from 'react-aws-icons/dist/aws/iot/LambdaFunction';
import DBM from 'react-aws-icons/dist/aws/db/DBM';

export const nodes = [
  {
    id: "customer",
    position: { x: 10, y: 10 },
    type: "input",
    data: {
      label: "Customer"
    }
  },
  {
    id: 'clientDataLayer',
    // type: 'output',
    position: { x: 50, y: 100 },
    style: {
      width: 300,
      height: 300,
    },
  },
  {
    id: 'clientDataLayerLambda',
    type: 'input',
    data: { label: <LambdaFunction size={44} /> },
    position: { x: 75, y: 10 },
    parentNode: 'clientDataLayer',
    extent: 'parent',
  },
  {
    id: 'clientDataLayerStorageEngine',
    type: 'output',
    data: {
      label: <div><p>Storage engine</p><DBM size={44} /></div>
    },
    position: { x: 75, y: 90 },
    parentNode: 'clientDataLayer',
    extent: 'parent',
  },
  {
    id: 'apiGateway',
    data: {
      label: <div><p>API Gateway</p></div>
    },
    position: { x: 250, y: 250 },
  },
  {
    id: 'awsEC2',
    data: {
      label: <div><p>awsEC2</p></div>
    },
    position: { x: 350, y: 350 },
  },
  {
    id: 'awsS3',
    data: {
      label: <div><p>aws S3</p></div>
    },
    position: { x: 450, y: 450 },
  },
];

export const edges = [
  { id: 'customer-clientDataLayer', source: 'customer', target: 'clientDataLayer', label: 'API Call' },
  {
    id: 'clientDataLayerLambda-clientDataLayerStorageEngine',
    source: 'clientDataLayerLambda',
    target: 'clientDataLayerStorageEngine',
    label: 'Store data'
  },
  // { id: 'lambda-storageEngine', source: 'lambda', target: 'storageEngine' },
  // { id: 'lambda-apiGateway', source: 'lambda', target: 'apiGateway' },
  // { id: 'apiGateway-awsEC2', source: 'apiGateway', target: 'awsEC2' },
  // { id: 'awsEC2-awsS3', source: 'awsEC2', target: 'awsS3' },
];


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
//     id: 'lambda',
//     data: { label: <LambdaFunction size={44} /> },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: 'storageEngine',
//     data: {
//       label: <div><p>Storage engine</p><DBM size={44} /></div>
//     },
//     position: { x: 200, y: 200 },
//   },
//   {
//     id: 'apiGateway',
//     data: {
//       label: <div><p>API Gateway</p></div>
//     },
//     position: { x: 250, y: 250 },
//   },
//   {
//     id: 'awsEC2',
//     data: {
//       label: <div><p>awsEC2</p></div>
//     },
//     position: { x: 350, y: 350 },
//   },
//   {
//     id: 'awsS3',
//     data: {
//       label: <div><p>aws S3</p></div>
//     },
//     position: { x: 450, y: 450 },
//   },
// ];

// export const edges = [
//   { id: 'customer-lambda', source: 'customer', target: 'lambda', label: 'API Call'},
//   { id: 'lambda-storageEngine', source: 'lambda', target: 'storageEngine' },
//   { id: 'lambda-apiGateway', source: 'lambda', target: 'apiGateway' },
//   { id: 'apiGateway-awsEC2', source: 'apiGateway', target: 'awsEC2' },
//   { id: 'awsEC2-awsS3', source: 'awsEC2', target: 'awsS3' },
// ];


// export const nodes = [
  // {
  //   "id": "1",
  //   position: { x: 10, y: 10 },
  //   "type": "AWS:MobileClient",
  //   "type": "default",
  //   "data": {
  //     "label": "Customer"
  //   }
  // },
//   {
//     "id": "2",
//     "type": "input",
//     "data": {
//       "label": "Client data layer"
//     }
//   },
//   {
//     "id": "2a",
//     "type": "AWS:LambdaFunction",
//     "parentNode": "2",
//     "data": {
//       "label": "Greengrass lambda"
//     }
//   },
//   {
//     "id": "2b",
//     "type": "AWS:DB",
//     "parentNode": "2",
//     "data": {
//       "label": "Storage engine"
//     }
//   },
//   {
//     "id": "3",
//     "type": "AWS:AWSCloud",
//     "data": {
//       "label": "AWS cloud"
//     }
//   },
//   {
//     "id": "3a",
//     "type": "AWS:APIGateway",
//     "parentNode": "3",
//     "data": {
//       "label": "API gateway"
//     }
//   },
//   {
//     "id": "3b",
//     "type": "AWS:EC2",
//     "parentNode": "3",
//     "data": {
//       "label": "AWS EC2"
//     }
//   },
//   {
//     "id": "3c",
//     "type": "AWS:S3",
//     "parentNode": "3",
//     "data": {
//       "label": "Object storage"
//     }
//   }
// ]

// export const edges = [
//   {
//     "id": "e1-2a",
//     "source": "1",
//     "target": "2a",
//     "data": {
//       "label": "API call"
//     }
//   },
//   {
//     "id": "e2a-2b",
//     "source": "2a",
//     "target": "2b",
//     "data": {
//       "label": "API call"
//     }
//   },
//   {
//     "id": "e2a-3a",
//     "source": "2a",
//     "target": "3a",
//     "data": {
//       "label": "Call backend"
//     }
//   },
//   {
//     "id": "e3a-3b",
//     "source": "3a",
//     "target": "3b",
//     "data": {
//       "label": "Make computation"
//     }
//   },
//   {
//     "id": "e3b-3c",
//     "source": "3b",
//     "target": "3c",
//     "data": {
//       "label": "Write to S3"
//     }
//   }
// ]